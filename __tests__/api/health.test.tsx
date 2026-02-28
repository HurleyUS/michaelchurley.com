/**
 * @jest-environment node
 */
import { GET } from "@/app/api/health/route";
import { expect, test, describe, jest } from "@jest/globals";

describe("/api/health", () => {
  test("returns 200 status for healthy system", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.status).toBe("healthy");
    expect(data.timestamp).toBeDefined();
    expect(data.uptime).toBeGreaterThan(0);
  });

  test("includes all required health checks", async () => {
    const response = await GET();
    const data = await response.json();

    expect(data.checks).toBeDefined();
    expect(data.checks.database).toBeDefined();
    expect(data.checks.api).toBeDefined();
    expect(data.checks.memory).toBeDefined();
  });

  test("includes version information", async () => {
    const response = await GET();
    const data = await response.json();

    expect(data.version).toBeDefined();
    expect(data.environment).toBeDefined();
  });

  test("has proper cache headers", async () => {
    const response = await GET();

    expect(response.headers.get("Cache-Control")).toBe(
      "no-cache, no-store, must-revalidate"
    );
    expect(response.headers.get("Content-Type")).toBe("application/json");
  });

  test("database check returns status", async () => {
    const response = await GET();
    const data = await response.json();

    const dbCheck = data.checks.database;
    expect(dbCheck.status).toMatch(/^(healthy|degraded|unhealthy)$/);
    expect(dbCheck.message).toBeDefined();
    expect(typeof dbCheck.responseTime).toBe("number");
  });

  test("api check returns healthy status", async () => {
    const response = await GET();
    const data = await response.json();

    const apiCheck = data.checks.api;
    expect(apiCheck.status).toBe("healthy");
    expect(apiCheck.message).toBe("API responding");
  });

  test("memory check includes usage details", async () => {
    const response = await GET();
    const data = await response.json();

    const memoryCheck = data.checks.memory;
    expect(memoryCheck.status).toMatch(/^(healthy|degraded|unhealthy)$/);
    expect(memoryCheck.details).toBeDefined();
    expect(typeof memoryCheck.details.rss).toBe("number");
    expect(typeof memoryCheck.details.heapUsed).toBe("number");
    expect(typeof memoryCheck.details.heapTotal).toBe("number");
  });
});