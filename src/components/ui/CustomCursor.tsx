"use client";

import { useEffect, useRef } from "react";

/**
 * Custom pointer: a 48px blurred disc with a crisp plus at its centre.
 *
 * The disc uses `mix-blend-mode: difference`, so whatever sits beneath it is
 * shown as a photographic negative. Element hover styles are untouched.
 * Only active for fine pointers (mouse/trackpad); touch devices see nothing.
 *
 * - Grows over links/buttons/other interactive controls.
 * - Shrinks while the mouse button is held.
 * - Hides over text fields and anything marked `data-cursor="native"`, where
 *   the browser's own cursor is shown instead.
 */

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], summary, label, select, [data-cursor="interactive"]';
const NATIVE_SELECTOR =
  'input, textarea, select, [contenteditable="true"], [data-cursor="native"]';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
    const root = document.documentElement;
    let frame = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      frame = 0;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const updateTargetState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      const overNative = !!element?.closest(NATIVE_SELECTOR);
      const overInteractive = !overNative && !!element?.closest(INTERACTIVE_SELECTOR);
      cursor.classList.toggle("is-hidden", overNative);
      cursor.classList.toggle("is-hover", overInteractive);
    };

    const handleMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(render);
      updateTargetState(event.target);
    };

    const handleDown = () => cursor.classList.add("is-pressed");
    const handleUp = () => cursor.classList.remove("is-pressed");
    const handleLeave = () => cursor.classList.add("is-hidden");
    const handleEnter = (event: PointerEvent) => updateTargetState(event.target);

    const enable = () => {
      root.classList.add("has-custom-cursor");
      cursor.classList.add("is-hidden"); // stays hidden until the first move
      window.addEventListener("pointermove", handleMove, { passive: true });
      window.addEventListener("pointerdown", handleDown);
      window.addEventListener("pointerup", handleUp);
      document.addEventListener("pointerenter", handleEnter);
      document.addEventListener("pointerleave", handleLeave);
    };

    const disable = () => {
      root.classList.remove("has-custom-cursor");
      cursor.classList.add("is-hidden");
      cursor.classList.remove("is-hover", "is-pressed");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.removeEventListener("pointerenter", handleEnter);
      document.removeEventListener("pointerleave", handleLeave);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const applyMode = () => (finePointer.matches ? enable() : disable());

    applyMode();
    finePointer.addEventListener("change", applyMode);

    return () => {
      finePointer.removeEventListener("change", applyMode);
      disable();
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor is-hidden" aria-hidden="true">
      <span className="cursor-ring" />
      <span className="cursor-plus" />
    </div>
  );
}
