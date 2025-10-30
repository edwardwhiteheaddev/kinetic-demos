#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);

if (args.length === 0 || args[0] !== 'run') {
  console.error('Usage: turbo run <task> [--filter <pattern>]');
  process.exit(1);
}

const task = args[1];
if (!task) {
  console.error('A task name must be provided.');
  process.exit(1);
}

const extraArgs = args.slice(2);
const workspaceRoot = process.cwd();
const turboConfigPath = path.join(workspaceRoot, 'turbo.json');

if (fs.existsSync(turboConfigPath)) {
  try {
    const turboConfig = JSON.parse(fs.readFileSync(turboConfigPath, 'utf8'));
    const pipeline = turboConfig.pipeline?.[task];
    if (!pipeline) {
      console.warn(`Warning: no pipeline configuration found for task "${task}".`);
    }
  } catch (error) {
    console.warn(`Warning: unable to read turbo.json (${error.message}).`);
  }
}

const spawnResult = spawnSync(
  'pnpm',
  ['recursive', '--workspace-root=false', 'run', task, ...extraArgs],
  {
    stdio: 'inherit',
    cwd: workspaceRoot,
    env: process.env
  }
);

if (spawnResult.error) {
  console.error(spawnResult.error.message);
  process.exit(1);
}

process.exit(spawnResult.status ?? 1);
