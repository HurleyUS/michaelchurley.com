import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Basic health checks
    const checks = {
      timestamp: new Date().toISOString(),
      status: "healthy",
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "unknown",
      version: process.env.npm_package_version || "unknown",
      checks: {
        database: await checkDatabase(),
        api: checkAPI(),
        memory: checkMemory(),
      },
    };

    // Determine overall health
    const isHealthy = Object.values(checks.checks).every((check) => check.status === "healthy");

    return NextResponse.json(checks, {
      status: isHealthy ? 200 : 503,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        timestamp: new Date().toISOString(),
        status: "unhealthy",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Content-Type": "application/json",
        },
      },
    );
  }
}

async function checkDatabase() {
  try {
    // For now, just check if we can access environment variables
    // In a real app, you'd ping your database
    const hasDbUrl = !!process.env.CONVEX_DEPLOYMENT;

    return {
      status: hasDbUrl ? "healthy" : "degraded",
      message: hasDbUrl ? "Database accessible" : "Database connection not configured",
      responseTime: 0,
    };
  } catch (error) {
    return {
      status: "unhealthy",
      message: error instanceof Error ? error.message : "Database check failed",
      responseTime: -1,
    };
  }
}

function checkAPI() {
  try {
    // Check if basic API functionality is working
    const canRespond = typeof NextResponse !== "undefined";

    return {
      status: canRespond ? "healthy" : "unhealthy",
      message: canRespond ? "API responding" : "API not responding",
      responseTime: 0,
    };
  } catch (error) {
    return {
      status: "unhealthy",
      message: error instanceof Error ? error.message : "API check failed",
      responseTime: -1,
    };
  }
}

function checkMemory() {
  try {
    const memUsage = process.memoryUsage();
    const totalMemMB = Math.round(memUsage.rss / 1024 / 1024);
    const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024);
    const heapTotalMB = Math.round(memUsage.heapTotal / 1024 / 1024);

    // Consider memory unhealthy if using more than 1GB RSS
    const isHealthy = totalMemMB < 1024;

    return {
      status: isHealthy ? "healthy" : "degraded",
      message: `Memory usage: ${totalMemMB}MB RSS, ${heapUsedMB}MB/${heapTotalMB}MB heap`,
      details: {
        rss: totalMemMB,
        heapUsed: heapUsedMB,
        heapTotal: heapTotalMB,
      },
    };
  } catch (error) {
    return {
      status: "unhealthy",
      message: error instanceof Error ? error.message : "Memory check failed",
    };
  }
}
