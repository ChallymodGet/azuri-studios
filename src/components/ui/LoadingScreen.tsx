"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Increment progress counter smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random step increment for realistic dynamic feel
        const increment = Math.floor(Math.random() * 12) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Trigger fade-out animation once counter hits 100%
      const fadeTimeout = setTimeout(() => setIsFadingOut(true), 300);
      // Remove completely from DOM after animation completes
      const hideTimeout = setTimeout(() => setIsHidden(true), 800);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(hideTimeout);
      };
    }
  }, [progress]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-between bg-black px-8 py-12 text-white transition-opacity duration-500 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top Brand Logo */}
      <div className="flex items-center text-white" aria-label="Azuri Studios">
        <Logo height={36} />
      </div>

      {/* Middle Animated Centerpiece */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-16 items-center justify-center">
          {/* Outer Pulsing Ring */}
          <span className="absolute h-full w-full animate-ping rounded-full bg-azuri-500/30" />
          {/* Inner Glowing Badge */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-azuri-500 shadow-[0_0_24px_rgba(21,93,252,0.6)]">
            <span className="h-3 w-3 rounded-full bg-white animate-bounce" />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
          Crafting digital experiences
        </p>
      </div>

      {/* Bottom Counter & Progress Bar */}
      <div className="w-full max-w-xs flex flex-col gap-3">
        <div className="flex justify-between items-center text-xs font-mono text-gray-400">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
        {/* Progress Bar Track */}
        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-800">
          <div
            className="h-full bg-azuri-500 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}