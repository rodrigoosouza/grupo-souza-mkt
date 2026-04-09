import type { ReactNode } from "react";

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
};
