module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals'
  ],
  parserOptions: {
    project: ['./tsconfig.json']
  },
  ignorePatterns: ['node_modules', '.next', 'dist', 'build', '*.js'],
  settings: {
    next: {
      rootDir: ['apps/web', 'apps/dashboard']
    }
  }
};
