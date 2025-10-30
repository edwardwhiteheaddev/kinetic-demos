import fs from 'node:fs/promises';
import path from 'node:path';

const cwd = process.cwd();
const tsconfigPath = path.join(cwd, 'tsconfig.json');

async function ensureTsconfigExtendsBase() {
  const content = await fs.readFile(tsconfigPath, 'utf8');
  const config = JSON.parse(content);
  if (!config.extends || !config.extends.includes('tsconfig.base.json')) {
    throw new Error('tsconfig.json must extend the shared tsconfig.base.json');
  }
  const composite = config.compilerOptions?.composite;
  if (!composite) {
    throw new Error('Composite builds must be enabled for workspace projects.');
  }
}

async function ensureSourceDirectory() {
  const srcPath = path.join(cwd, 'src');
  try {
    await fs.access(srcPath);
  } catch {
    throw new Error('Workspace packages must declare a src directory.');
  }
}

async function main() {
  await ensureTsconfigExtendsBase();
  await ensureSourceDirectory();
  console.log(`[lint] ${path.basename(cwd)} configuration validated.`);
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
