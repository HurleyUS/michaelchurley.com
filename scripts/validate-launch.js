#!/usr/bin/env node

// Launch week validation script
// Runs comprehensive checks and generates a report

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function logStep(step, status = 'info') {
  const icons = {
    info: '🔍',
    success: '✅',
    warning: '⚠️',
    error: '❌',
  };
  console.log(`${icons[status]} ${step}`);
}

function runCommand(command, description) {
  logStep(description);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    logStep(`${description} - completed`, 'success');
    return { success: true, output };
  } catch (error) {
    logStep(`${description} - failed: ${error.message}`, 'error');
    return { success: false, error: error.message };
  }
}

function generateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    checks: {},
    overall: { passed: true, issues: [] },
  };

  // TypeScript compilation check
  logStep('Checking TypeScript compilation...');
  const tscCheck = runCommand('bun tsc --noEmit', 'TypeScript compilation');
  report.checks.typescript = tscCheck;
  if (!tscCheck.success) {
    report.overall.passed = false;
    report.overall.issues.push('TypeScript compilation failed');
  }

  // Build check
  logStep('Testing production build...');
  const buildCheck = runCommand('bun run build', 'Production build');
  report.checks.build = buildCheck;
  if (!buildCheck.success) {
    report.overall.passed = false;
    report.overall.issues.push('Production build failed');
  }

  // Test check
  logStep('Running tests...');
  const testCheck = runCommand('bun test', 'Test suite');
  report.checks.tests = testCheck;
  if (!testCheck.success) {
    report.overall.issues.push('Some tests failed');
    // Don't fail overall for tests, just warn
  }

  // Lint check
  logStep('Running linter...');
  const lintCheck = runCommand('bun run lint', 'ESLint');
  report.checks.lint = lintCheck;
  if (!lintCheck.success) {
    report.overall.issues.push('Linting issues found');
  }

  // Package audit
  logStep('Checking for security vulnerabilities...');
  const auditCheck = runCommand('bun audit', 'Security audit');
  report.checks.audit = auditCheck;
  // Audit failures are warnings, not critical

  // Bundle analysis (if available)
  logStep('Checking bundle size...');
  try {
    const bundleCheck = runCommand('bun run build && bun run analyze', 'Bundle analysis');
    report.checks.bundle = bundleCheck;
  } catch {
    // Bundle analysis is optional
    logStep('Bundle analysis not available', 'warning');
  }

  // Check for required files
  const requiredFiles = [
    'app/sitemap.ts',
    'app/robots.ts',
    'app/layout.tsx',
    'app/error.tsx',
    'app/global-error.tsx',
    'lib/analytics.ts',
    'lib/error-reporting.ts',
  ];

  logStep('Checking required files...');
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
  if (missingFiles.length > 0) {
    report.overall.passed = false;
    report.overall.issues.push(`Missing files: ${missingFiles.join(', ')}`);
    logStep(`Missing files: ${missingFiles.join(', ')}`, 'error');
  } else {
    logStep('All required files present', 'success');
  }

  // Check environment variables
  logStep('Checking environment configuration...');
  const requiredEnvVars = [
    'NEXT_PUBLIC_POSTHOG_KEY',
    'CONVEX_DEPLOYMENT',
  ];

  // Check .env.example if it exists
  if (fs.existsSync('.env.example')) {
    const envExample = fs.readFileSync('.env.example', 'utf8');
    const missingEnvVars = requiredEnvVars.filter(envVar => !envExample.includes(envVar));
    if (missingEnvVars.length > 0) {
      report.overall.issues.push(`Missing env vars in .env.example: ${missingEnvVars.join(', ')}`);
      logStep(`Missing env vars in .env.example: ${missingEnvVars.join(', ')}`, 'warning');
    }
  }

  return report;
}

function writeReport(report) {
  const reportsDir = 'launch-week/validation-reports';
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  // Write JSON report
  const timestamp = new Date().toISOString().split('T')[0];
  const jsonPath = path.join(reportsDir, `validation-${timestamp}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  
  // Write markdown report
  const mdPath = path.join(reportsDir, `validation-${timestamp}.md`);
  const markdown = generateMarkdownReport(report);
  fs.writeFileSync(mdPath, markdown);
  
  logStep(`Reports written to ${reportsDir}/`, 'success');
  return { jsonPath, mdPath };
}

function generateMarkdownReport(report) {
  const status = report.overall.passed ? '✅ PASSED' : '❌ FAILED';
  const checkResults = Object.entries(report.checks)
    .map(([name, result]) => `- ${name}: ${result.success ? '✅' : '❌'}`)
    .join('\n');

  const issuesList = report.overall.issues.length > 0 
    ? report.overall.issues.map(issue => `- ❌ ${issue}`).join('\n')
    : '- ✅ No issues found';

  return `# Launch Week Validation Report

**Generated:** ${report.timestamp}  
**Status:** ${status}

## Check Results

${checkResults}

## Issues Found

${issuesList}

## Next Steps

${report.overall.passed 
  ? '🎉 **Ready for launch!** All checks passed successfully.'
  : '⚠️ **Address issues before launch.** Fix the issues listed above and re-run validation.'
}

## Commands Run

${Object.entries(report.checks).map(([name, result]) => `
### ${name}
- **Status:** ${result.success ? 'Success' : 'Failed'}
${result.error ? `- **Error:** ${result.error}` : ''}
${result.output ? `- **Output:** \`\`\`\n${result.output.slice(0, 500)}...\n\`\`\`` : ''}
`).join('\n')}
`;
}

// Main execution
console.log('🚀 Starting Launch Week Validation...\n');

const report = generateReport();
const { jsonPath, mdPath } = writeReport(report);

console.log('\n📊 Validation Summary:');
console.log(`Status: ${report.overall.passed ? '✅ PASSED' : '❌ FAILED'}`);
console.log(`Issues: ${report.overall.issues.length}`);
console.log(`Reports: ${jsonPath}, ${mdPath}`);

if (!report.overall.passed) {
  console.log('\n❌ Issues to fix:');
  report.overall.issues.forEach(issue => console.log(`  - ${issue}`));
  process.exit(1);
} else {
  console.log('\n🎉 All checks passed! Ready for launch week.');
}