import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = path.join(root, "public", "images", "anas_school_images");
const outputDirectory = path.join(root, "public", "images", "optimized");
const skippedFiles = new Set(["homepage-mockup-reference.jpg"]);

function maxWidthFor(filename) {
  if (filename.includes("hero")) return 1600;
  if (/activity|news|testimonial|students/.test(filename)) return 800;
  return 1200;
}

await mkdir(outputDirectory, { recursive: true });

const filenames = (await readdir(sourceDirectory))
  .filter((filename) => /\.(jpe?g|png)$/i.test(filename))
  .filter((filename) => !skippedFiles.has(filename))
  .sort();

const results = [];

for (const filename of filenames) {
  const source = path.join(sourceDirectory, filename);
  const destination = path.join(
    outputDirectory,
    `${path.parse(filename).name}.webp`,
  );
  const image = sharp(source);
  const metadata = await image.metadata();
  const sourceStats = await stat(source);

  if (!metadata.width || !metadata.height) {
    throw new Error(`Could not read image dimensions: ${source}`);
  }

  const targetWidth = Math.min(metadata.width, maxWidthFor(filename));
  const output = await image
    .rotate()
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 83, effort: 5 })
    .toFile(destination);

  results.push({
    file: filename,
    dimensions: `${metadata.width}x${metadata.height}`,
    before: sourceStats.size,
    after: output.size,
    output: `${output.width}x${output.height}`,
  });
}

const originalBytes = results.reduce((total, result) => total + result.before, 0);
const optimizedBytes = results.reduce((total, result) => total + result.after, 0);
const savedBytes = originalBytes - optimizedBytes;
const savedPercent =
  originalBytes === 0 ? 0 : (savedBytes / originalBytes) * 100;

console.table(results);
console.log(
  `Total: ${originalBytes} -> ${optimizedBytes} bytes (${savedBytes} bytes, ${savedPercent.toFixed(1)}% saved)`,
);
console.log(`Generated ${results.length} WebP files in ${outputDirectory}`);
