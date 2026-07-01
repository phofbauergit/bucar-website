"use client";

import { useRef, type ReactNode } from "react";
import { practice } from "@/content/home";

/** Phone CTA that subtly follows the cursor within its own bounds — a small
 * tactile flourish with zero layout shift. No-ops under reduced motion. */
export function MagneticCTA({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }

  return (
    <a
      ref={ref}
      href={`tel:${practice.phoneHref}`}
      className={`magnetic ${className}`}
      aria-label={`${practice.phone} anrufen`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}
