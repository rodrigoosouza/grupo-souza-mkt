/**
 * Extrai headings (H2 e H3) do conteúdo markdown para gerar TOC.
 * Ignora headings dentro de blocos de código.
 */
export interface TocItem {
  level: 2 | 3;
  text: string;
  id: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractToc(markdown: string): TocItem[] {
  // Remove blocos de código pra não capturar # dentro deles
  const cleaned = markdown.replace(/```[\s\S]*?```/g, "");
  const lines = cleaned.split("\n");
  const toc: TocItem[] = [];
  const seen = new Map<string, number>();

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+?)\s*$/);
    if (!match) continue;
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/[*_`]/g, "").trim();
    let id = slugify(text);
    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;
    toc.push({ level, text, id });
  }
  return toc;
}
