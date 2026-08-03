// Packs the built renderer (dist/) into a single release asset the installed
// app can download and swap in, so shipping new courses or UI never requires
// reinstalling the 219 MB .dmg.
//
//   node scripts/make-web-bundle.mjs
//
// Emits release/web-bundle.json (version + base64 file map) and
// release/web-bundle.sha256. Attach BOTH to the GitHub release — the app
// refuses a bundle whose checksum does not match.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const OUT_DIR = 'release';

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const { version } = JSON.parse(readFileSync('package.json', 'utf8'));

let files;
try {
  files = walk(DIST);
} catch {
  console.error(`No ${DIST}/ directory. Run "npm run build" first.`);
  process.exit(1);
}
if (!files.length) {
  console.error(`${DIST}/ is empty. Run "npm run build" first.`);
  process.exit(1);
}

const bundle = { version, files: {} };
for (const file of files) {
  // POSIX separators: the path is used as a key on every platform.
  const key = relative(DIST, file).split(sep).join('/');
  bundle.files[key] = readFileSync(file).toString('base64');
}

if (!bundle.files['index.html']) {
  console.error('Built output has no index.html; refusing to publish this bundle.');
  process.exit(1);
}

const payload = JSON.stringify(bundle);
const digest = createHash('sha256').update(payload, 'utf8').digest('hex');

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, 'web-bundle.json'), payload, 'utf8');
writeFileSync(join(OUT_DIR, 'web-bundle.sha256'), `${digest}  web-bundle.json\n`, 'utf8');

const kb = (payload.length / 1024).toFixed(0);
console.log(`web-bundle.json  v${version}  ${Object.keys(bundle.files).length} files  ${kb} KB`);
console.log(`sha256           ${digest}`);
