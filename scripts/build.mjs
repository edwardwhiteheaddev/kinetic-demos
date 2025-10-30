import fs from 'node:fs/promises';
import path from 'node:path';

const cwd = process.cwd();
const packageJsonPath = path.join(cwd, 'package.json');
const tsconfigPath = path.join(cwd, 'tsconfig.json');
const srcDir = path.join(cwd, 'src');
const distDir = path.join(cwd, 'dist');

async function ensureConfig() {
  const configExists = await fileExists(tsconfigPath);
  if (!configExists) {
    throw new Error('tsconfig.json is required for composite builds.');
  }
}

async function fileExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

function stripTypeAnnotations(code) {
  let result = code;
  result = result.replace(/import\s+type\s+{[^}]+}\s+from\s+['\"][^'\"]+['\"];?\s*/g, '');
  result = result.replace(/export\s+type\s+[^;]+;\s*/g, '');
  result = result.replace(/type\s+[^;]+;\s*/g, '');
  result = result.replace(/export\s+interface[\s\S]+?\n}\n?/g, '');
  result = result.replace(/interface[\s\S]+?\n}\n?/g, '');
  result = result.replace(/\sas\s+[A-Za-z0-9_<>&\[\]\s'"|]+/g, '');
  return result;
}

function emitDts(packageName, code) {
  return `// Auto-generated type definitions for ${packageName}\n${code}`;
}

async function copySource(packageName) {
  const srcExists = await fileExists(srcDir);
  if (!srcExists) {
    await fs.rm(distDir, { recursive: true, force: true });
    await fs.mkdir(distDir, { recursive: true });
    return;
  }

  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });

  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(srcDir, entry.name);
    const targetPath = path.join(distDir, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(packageName, sourcePath, targetPath);
    } else if (entry.isFile()) {
      await copyFile(packageName, sourcePath, targetPath);
    }
  }
}

async function copyDirectory(packageName, source, target) {
  await fs.mkdir(target, { recursive: true });
  const entries = await fs.readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(packageName, sourcePath, targetPath);
    } else if (entry.isFile()) {
      await copyFile(packageName, sourcePath, targetPath);
    }
  }
}

async function copyFile(packageName, source, target) {
  const extension = path.extname(source);
  if (source.endsWith('.d.ts')) {
    await fs.copyFile(source, target);
    return;
  }
  if (extension === '.ts' || extension === '.tsx') {
    const code = await fs.readFile(source, 'utf8');
    const jsPath = target.replace(/\.tsx?$/, '.js');
    const dtsPath = target.replace(/\.tsx?$/, '.d.ts');
    await fs.writeFile(jsPath, stripTypeAnnotations(code), 'utf8');
    const siblingDts = source.replace(/\.tsx?$/, '.d.ts');
    if (!(await fileExists(siblingDts))) {
      await fs.writeFile(dtsPath, emitDts(packageName, code), 'utf8');
    }
  } else {
    await fs.copyFile(source, target);
  }
}

async function main() {
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
  await ensureConfig();
  await copySource(packageJson.name ?? 'workspace-package');
  console.log(`[build] ${packageJson.name ?? path.basename(cwd)} -> dist`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
