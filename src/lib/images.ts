export function getOptimizedImageSrc(src: string): string {
  if (
    !src.startsWith("/images/") ||
    src.startsWith("/images/optimized/") ||
    !/\.(?:jpe?g|png)$/i.test(src)
  ) {
    return src;
  }

  const relativePath = src.slice("/images/".length);
  const webpPath = relativePath.replace(/\.(?:jpe?g|png)$/i, ".webp");
  const [directory, ...remainingPath] = webpPath.split("/");
  const optimizedPath =
    directory === "anas_school_images" ? remainingPath.join("/") : webpPath;

  return `/images/optimized/${optimizedPath}`;
}
