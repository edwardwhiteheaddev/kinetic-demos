import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const cwd = process.cwd();

async function loadModule(entry) {
  const exists = await fileExists(entry);
  if (!exists) {
    throw new Error(`Build output missing at ${entry}`);
  }
  return import(pathToFileURL(entry).href);
}

async function fileExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function resolveEntryPoint() {
  const pkg = JSON.parse(await fs.readFile(path.join(cwd, 'package.json'), 'utf8'));
  const candidates = [
    pkg.module,
    pkg.main,
    pkg.exports?.['.']?.default,
    'dist/index.js',
    'dist/main.js'
  ].filter(Boolean);
  for (const candidate of candidates) {
    const abs = path.join(cwd, candidate);
    if (await fileExists(abs)) {
      return abs;
    }
  }
  throw new Error('Unable to locate build output to test.');
}

async function main() {
  const entry = await resolveEntryPoint();
  const moduleUnderTest = await loadModule(entry);
  if (typeof moduleUnderTest.runSelfTest === 'function') {
    await moduleUnderTest.runSelfTest();
  }
  console.log(`[test] ${path.basename(cwd)} runtime smoke test complete.`);
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
