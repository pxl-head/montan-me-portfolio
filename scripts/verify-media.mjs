import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));
const supportedExtensions = new Set(['.jpg', '.jpeg', '.mp4', '.png', '.webp']);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(entryPath) : [entryPath];
    }),
  );
  return files.flat();
}

function hasSignature(extension, bytes) {
  if (extension === '.webp') {
    return (
      bytes.subarray(0, 4).toString('ascii') === 'RIFF' &&
      bytes.subarray(8, 12).toString('ascii') === 'WEBP'
    );
  }
  if (extension === '.png') {
    return bytes
      .subarray(0, 8)
      .equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  }
  if (extension === '.jpg' || extension === '.jpeg') {
    return (
      bytes[0] === 0xff &&
      bytes[1] === 0xd8 &&
      bytes.at(-2) === 0xff &&
      bytes.at(-1) === 0xd9
    );
  }
  if (extension === '.mp4') {
    return bytes.subarray(4, 8).toString('ascii') === 'ftyp';
  }
  return false;
}

const files = (await walk(publicDirectory)).filter((file) =>
  supportedExtensions.has(path.extname(file).toLowerCase()),
);
const invalid = [];

for (const file of files) {
  const bytes = await readFile(file);
  const extension = path.extname(file).toLowerCase();
  if (!hasSignature(extension, bytes)) {
    invalid.push(path.relative(publicDirectory, file));
  }
}

if (invalid.length > 0) {
  throw new Error(`Invalid media files:\n${invalid.join('\n')}`);
}

console.log(`Verified ${files.length} binary media files.`);
