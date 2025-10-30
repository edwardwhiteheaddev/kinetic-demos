import path from 'node:path';

const cwd = process.cwd();

console.log(`[dev] Watching ${path.basename(cwd)} for changes is not supported in this offline template.`);
console.log('[dev] Use the build command to regenerate outputs as you iterate.');
