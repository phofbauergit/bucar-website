"use client";

import { useEffect, useRef, useState } from "react";

export function PulseLinePreview({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 48"
      preserveAspectRatio="none"
      className={`h-20 w-full ${drawn ? "is-drawn" : ""} ${className}`}
      aria-hidden="true"
    >
      <line x1="0" y1="24" x2="120" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <path
        d="M0 24 H28 L32 24 L36 8 L40 40 L44 16 L48 32 L52 24 H80 L84 24 L88 12 L92 36 L96 20 L100 28 L104 24 H120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength={1}
        className="pulse-path"
        style={drawn ? { strokeDashoffset: 0 } : undefined}
      />
    </svg>
  );
}
