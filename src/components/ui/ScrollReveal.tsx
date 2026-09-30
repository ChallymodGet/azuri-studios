"use client";

import { useEffect } from "react";

/**
 * Scroll-driven reveal + pointer-tilt engine. Styles live in globals.css.
 *
 * Markup API
 *  - `data-reveal[="up|left|right|scale|blur|clip"]`  fade the element in when it scrolls into view
 *  - `data-reveal-group[="<ms>"]`                       reveal all `[data-reveal]` descendants together,
 *                                                       staggered by <ms> (default 90ms) in DOM order
 *  - `data-delay="<ms>"`                                explicit delay for one element inside a group
 *  - `data-tilt`                                        3D tilt that follows a fine pointer
 *
 * The html element gets `js-reveal` once mounted (so content stays visible without JS),
 * and `is-ready` once the loading screen has gone (hero entrance animations key off it).
 */

export const READY_EVENT = "azuri:ready";

const IN = "is-in";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | null = null;

    const revealGroup = (group: HTMLElement) => {
      const step = Number(group.dataset.revealGroup) || 90;
      const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
      items.forEach((item, index) => {
        const delay = item.dataset.delay !== undefined ? Number(item.dataset.delay) : index * step;
        item.style.setProperty("--reveal-delay", `${delay}ms`);
        item.classList.add(IN);
      });
      group.classList.add(IN);
    };

    const start = () => {
      root.classList.add("is-ready");

      const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-group]"));
      const singles = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
        (el) => !el.closest("[data-reveal-group]"),
      );

      if (reduceMotion) {
        groups.forEach((g) => revealGroup(g));
        singles.forEach((s) => s.classList.add(IN));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            if (el.hasAttribute("data-reveal-group")) revealGroup(el);
            else el.classList.add(IN);
            observer?.unobserve(el);
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      [...groups, ...singles].forEach((el) => observer?.observe(el));
    };

    // Hold everything until the loading screen has faded out.
    const loading = document.querySelector("[data-loading-screen]");
    const onReady = () => {
      window.removeEventListener(READY_EVENT, onReady);
      start();
    };
    if (!loading || root.classList.contains("is-ready")) start();
    else window.addEventListener(READY_EVENT, onReady);

    // Pointer tilt for [data-tilt] cards (fine pointers only).
    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    let tilted: HTMLElement | null = null;

    const handleMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-tilt]") : null;
      if (tilted && tilted !== target) resetTilt();
      if (!target) return;
      tilted = target;
      const rect = target.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      const max = Number(target.dataset.tilt) || 6;
      target.style.setProperty("--ry", `${(px * max * 2).toFixed(2)}deg`);
      target.style.setProperty("--rx", `${(-py * max * 2).toFixed(2)}deg`);
      target.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(1)}%`);
      target.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(1)}%`);
      target.classList.add("is-tilting");
    };

    const resetTilt = () => {
      if (!tilted) return;
      tilted.style.removeProperty("--rx");
      tilted.style.removeProperty("--ry");
      tilted.classList.remove("is-tilting");
      tilted = null;
    };

    if (finePointer && !reduceMotion) {
      document.addEventListener("pointermove", handleMove, { passive: true });
      document.addEventListener("pointerleave", resetTilt);
    }

    return () => {
      window.removeEventListener(READY_EVENT, onReady);
      observer?.disconnect();
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", resetTilt);
    };
  }, []);

  return null;
}
