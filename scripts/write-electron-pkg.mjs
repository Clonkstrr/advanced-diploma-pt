// dist-electron/ holds CommonJS output, but the root package.json declares
// "type": "module" — without a nested CommonJS scope, Electron parses
// dist-electron/main.js as ESM and crashes ("exports is not defined").
// dist-electron/ is gitignored and regenerated, so the build must emit this
// marker every time rather than relying on a hand-created file.
import { writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist-electron', { recursive: true });
writeFileSync(
  'dist-electron/package.json',
  JSON.stringify({ type: 'commonjs' }, null, 2) + '\n',
);
