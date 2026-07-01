"use client";

import { useRef, useState, type ReactNode } from "react";

/**
 * Easter egg for /v2: triple-click the meridian mark in the hero to reveal a
 * hidden Thich Nhat Hanh quote card. Keyboard-reachable via Enter/Space on
 * the focusable trigger so it isn't a mouse-only gimmick.
 */
export function TripleClickReveal({
  children,
  quote,
  source,
}: {
  children: ReactNode;
  quote: string;
  source: string;
}) {
  const [revealed, setRevealed] = useState(false);
  const clicksRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function registerClick() {
    clicksRef.current += 1;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      clicksRef.current = 0;
    }, 900);
    if (clicksRef.current >= 3) {
      setRevealed(true);
      clicksRef.current = 0;
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={registerClick}
        className="block w-full cursor-pointer text-left focus-visible:outline-offset-4"
        aria-label="Meridian-Illustration — dreimal klicken für ein verborgenes Zitat"
      >
        {children}
      </button>

      {revealed && (
        <div
          role="dialog"
          aria-label="Verborgenes Zitat"
          className="absolute inset-4 flex items-center justify-center bg-v2-ink/95 p-8 text-center backdrop-blur-sm"
        >
          <div className="reveal is-visible">
            <p className="font-display text-xl italic leading-relaxed text-v2-bone sm:text-2xl">
              „{quote}“
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-v2-jade">
              {source}
            </p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setRevealed(false);
              }}
              className="mt-6 cursor-pointer text-xs uppercase tracking-[0.2em] text-v2-mist underline-offset-4 hover:underline"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
