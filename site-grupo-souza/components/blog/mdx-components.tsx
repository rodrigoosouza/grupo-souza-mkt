import type { ReactNode, HTMLAttributes, TableHTMLAttributes } from "react";

function getText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getText).join("");
  if (node && typeof node === "object" && "props" in node) {
    // @ts-expect-error - traversal of arbitrary react nodes
    return getText(node.props?.children);
  }
  return "";
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

export const mdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => {
    const id = slugify(getText(children));
    return (
      <h2 id={id} className="scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3: ({ children }: { children?: ReactNode }) => {
    const id = slugify(getText(children));
    return (
      <h3 id={id} className="scroll-mt-24">
        {children}
      </h3>
    );
  },
  // Tabelas: wrappear em container scrollavel pra nao quebrar layout no mobile
  table: ({ children, ...props }: TableHTMLAttributes<HTMLTableElement>) => (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-white/[0.06] bg-[#0A0A0A]">
      <table
        {...props}
        className="w-full min-w-[560px] text-sm text-left border-collapse"
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
    <thead {...props} className="bg-white/[0.03] border-b border-white/[0.06]">
      {children}
    </thead>
  ),
  th: ({ children, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      {...props}
      className="px-4 py-3 text-[11px] uppercase tracking-wider text-emerald-400 font-mono font-bold"
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} className="px-4 py-3 text-neutral-300 border-b border-white/[0.04]">
      {children}
    </td>
  ),
  // Code blocks: scrollaveis horizontal sem quebrar a pagina
  pre: ({ children, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      className="not-prose my-6 overflow-x-auto rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-4 text-sm text-neutral-300"
    >
      {children}
    </pre>
  ),
};
