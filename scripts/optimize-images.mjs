import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imageDirectory = path.join(root, "public", "images");
const outputDirectory = path.join(root, "public", "images", "optimized");
const skippedFiles = new Set(["homepage-mockup-reference.jpg"]);

function maxWidthFor(filename) {
  if (filename.includes("hero")) return 1600;
  if (/activity|news|testimonial|students/.test(filename)) return 800;
  return 1200;
}

function qualityFor(filename) {
  return filename === "primary-hero.jpg" ? 90 : 83;
}

async function findImageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? findImageFiles(entryPath) : [entryPath];
    }),
  );

  return nestedFiles.flat();
}

await mkdir(outputDirectory, { recursive: true });

const sources = (await findImageFiles(imageDirectory))
  .filter((source) => {
    const relativePath = path.relative(imageDirectory, source);
    return (
      !relativePath.startsWith(`optimized${path.sep}`) &&
      /\.(jpe?g|png)$/i.test(source) &&
      !skippedFiles.has(path.basename(source))
    );
  })
  .sort();

const results = [];

for (const source of sources) {
  const relativePath = path.relative(imageDirectory, source);
  const relativeDirectory = path.dirname(relativePath);
  const outputSubdirectory =
    relativeDirectory === "anas_school_images" ? "" : relativeDirectory;
  const filename = path.basename(source);
  const destinationDirectory = path.join(outputDirectory, outputSubdirectory);
  const destination = path.join(
    destinationDirectory,
    `${path.parse(filename).name}.webp`,
  );
  const image = sharp(source);
  const metadata = await image.metadata();
  const sourceStats = await stat(source);

  if (!metadata.width || !metadata.height) {
    throw new Error(`Could not read image dimensions: ${source}`);
  }

  await mkdir(destinationDirectory, { recursive: true });
  const targetWidth = Math.min(metadata.width, maxWidthFor(filename));
  const output = await image
    .rotate()
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: qualityFor(filename), effort: 5 })
    .toFile(destination);

  results.push({
    file: relativePath,
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
