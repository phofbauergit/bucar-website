"use client";

import { useEffect } from "react";

/**
 * Easter egg for /v1: type the letters "q" then "i" anywhere on the page to
 * send a pulse of energy through the meridian illustration's nodes. Purely
 * decorative — respects prefers-reduced-motion via CSS (.qi-active rule is a
 * no-op under reduced motion).
 */
export function QiListener() {
  useEffect(() => {
    let buffer = "";
    let timeout: ReturnType<typeof setTimeout> | null = null;

    function handleKeydown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

      buffer = (buffer + event.key.toLowerCase()).slice(-2);
      if (buffer === "qi") {
        document.body.classList.add("qi-active");
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          document.body.classList.remove("qi-active");
        }, 4400);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return null;
}
