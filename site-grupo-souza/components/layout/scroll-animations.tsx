"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Pequeno delay pra garantir que o DOM da nova rota foi montado
    const timer = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".animate-on-scroll")
      );

      // 1. Anima imediatamente tudo que ja esta proximo da viewport no mount
      const viewportH =
        window.innerHeight || document.documentElement.clientHeight;
      const eagerThreshold = viewportH + 800;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < eagerThreshold) {
          el.classList.add("animate");
        }
      });

      // 2. Observer para o restante (elementos bem distantes)
      const remaining = elements.filter(
        (el) => !el.classList.contains("animate")
      );

      if (remaining.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px 1200px 0px" }
      );

      remaining.forEach((el) => observer.observe(el));

      // Cleanup ao trocar de rota
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
