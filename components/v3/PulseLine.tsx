"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EKG_PATH =
  "M0 24 H28 L32 24 L36 8 L40 40 L44 16 L48 32 L52 24 H80 L84 24 L88 12 L92 36 L96 20 L100 28 L104 24 H120";

const FLATLINE = "M0 24 H120";

const HEARTBEAT = "M0 24 H44 L48 6 L52 42 L56 18 L60 24 H120";

type PulseLineProps = {
  className?: string;
  interactive?: boolean;
};

export function PulseLine({ className = "", interactive = true }: PulseLineProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [pathD, setPathD] = useState(EKG_PATH);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
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

  const triggerEasterEgg = useCallback(() => {
    if (!interactive) return;
    setEasterEgg(true);
    setPathD(FLATLINE);
    setShowTooltip(false);

    window.setTimeout(() => {
      setPathD(HEARTBEAT);
    }, 600);

    window.setTimeout(() => {
      setPathD(EKG_PATH);
      setEasterEgg(false);
      setShowTooltip(true);
      window.setTimeout(() => setShowTooltip(false), 2800);
    }, 1800);
  }, [interactive]);

  const handleClick = () => {
    if (!interactive) return;
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 700);
    if (clickCount.current >= 3) {
      clickCount.current = 0;
      triggerEasterEgg();
    }
  };

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        aria-label={interactive ? "Puls-Linie — dreimal klicken für ein verborgenes Signal" : undefined}
        className={`block w-full ${interactive ? "cursor-pointer" : "pointer-events-none"}`}
        disabled={!interactive || easterEgg}
      >
        <svg
          viewBox="0 0 120 48"
          preserveAspectRatio="none"
          className={`h-12 w-full ${drawn ? "is-drawn" : ""} ${easterEgg ? "pulse-easter-egg" : ""}`}
          aria-hidden="true"
        >
          <line x1="0" y1="24" x2="120" y2="24" stroke="var(--v3-border)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <path
            d={pathD}
            fill="none"
            stroke="var(--v3-signal)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            className="pulse-path"
            style={drawn ? { strokeDashoffset: 0 } : undefined}
          />
        </svg>
      </button>

      {interactive && (
        <p className="mt-2 text-center text-[0.6rem] uppercase tracking-[0.35em] text-v3-subtle/60">
          Dreimal klicken · verborgenes Signal
        </p>
      )}

      {showTooltip && (
        <p
          role="status"
          className="absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded-sm bg-v3-graphite px-3 py-1.5 text-xs font-medium text-v3-paper shadow-lg"
        >
          Alles im Rhythmus.
        </p>
      )}
    </div>
  );
}
