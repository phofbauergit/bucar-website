"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Adds `.is-drawn` once the wrapped element enters the viewport — powers the
 * v2 meridian line-draw animation. Skips work entirely if the user prefers
 * reduced motion (CSS also hard-disables the transition in that case). */
export function DrawOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${drawn ? "is-drawn" : ""}`}>
      {children}
    </div>
  );
}
