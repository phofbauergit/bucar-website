"use client";

import { useEffect, useRef, useState } from "react";

type ReadoutChipProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function ReadoutChip({ value, suffix = "", prefix = "", label, delay = 0 }: ReadoutChipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1400;
    const startTime = performance.now() + delay;

    const tick = (now: number) => {
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.round(easeOutCubic(progress) * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, value, delay]);

  return (
    <div
      ref={ref}
      className={`border border-v3-border bg-v3-surface px-5 py-4 ${started ? "readout-visible" : "opacity-0"}`}
    >
      <p className="font-mono-v3 text-3xl font-medium tabular-nums tracking-tight text-v3-signal">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-v3-subtle">{label}</p>
    </div>
  );
}
