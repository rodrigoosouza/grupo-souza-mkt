"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-on-scroll")
    );

    // 1. Anima imediatamente tudo que ja esta proximo da viewport no mount
    //    (evita "tela em branco" abaixo do fold quando o user rola rapido)
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;
    const eagerThreshold = viewportH + 800; // viewport + 800px de margem

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < eagerThreshold) {
        el.classList.add("animate");
      }
    });

    // 2. Observer para o restante (elementos bem distantes)
    //    rootMargin grande embaixo dispara MUITO antes de entrar em tela
    const remaining = elements.filter((el) => !el.classList.contains("animate"));

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

    return () => observer.disconnect();
  }, []);

  return null;
}
