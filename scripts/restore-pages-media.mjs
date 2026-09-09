import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(projectRoot, 'public');
const binaryExtensions = new Set(['.jpg', '.jpeg', '.mp4', '.png', '.webp']);

function hasBinarySignature(buffer, extension) {
  if (extension === '.png') return buffer.subarray(0, 8).toString('hex') === '89504e470d0a1a0a';
  if (extension === '.jpg' || extension === '.jpeg') {
    return buffer.subarray(0, 3).toString('hex') === 'ffd8ff';
  }
  if (extension === '.webp') {
    return buffer.subarray(0, 4).toString('ascii') === 'RIFF' && buffer.subarray(8, 12).toString('ascii') === 'WEBP';
  }
  if (extension === '.mp4') return buffer.subarray(4, 8).toString('ascii') === 'ftyp';
  return false;
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else files.push(fullPath);
  }

  return files;
}

let restored = 0;

for (const filePath of await walk(publicRoot)) {
  const extension = path.extname(filePath).toLowerCase();
  if (!binaryExtensions.has(extension)) continue;

  const current = await readFile(filePath);
  if (hasBinarySignature(current, extension)) continue;

  const encoded = current.toString('utf8').trim();
  if (!encoded || encoded.length % 4 !== 0 || !/^[A-Za-z0-9+/=]+$/.test(encoded)) continue;

  const decoded = Buffer.from(encoded, 'base64');
  if (!hasBinarySignature(decoded, extension)) continue;

  await writeFile(filePath, decoded);
  restored += 1;
}

if (restored > 0) console.log(`Restored ${restored} encoded media file(s).`);
