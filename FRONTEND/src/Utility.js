const handleRef = (source, target) => {
  target.value = source.value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-') // Replace spaces with a single hyphen
    .replace(/-+/g, '-') // Remove extra hyphens
    .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
}

export { handleRef };