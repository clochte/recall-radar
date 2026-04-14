export function generateSlug(title: string, date: string): string {
  const dateStr = date ? date.split('T')[0] : new Date().toISOString().split('T')[0];
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60)
    .replace(/-+$/, '');
  return `${slug}-${dateStr}`;
}
