"use client";

import { useEffect, useRef } from "react";

interface CalendlyInlineEmbedProps {
  url: string;
}

/**
 * Calendly’s free embed (no npm package). Loads their widget script once.
 * @see https://help.calendly.com/hc/en-us/articles/360020934813
 */
export default function CalendlyInlineEmbed({ url }: CalendlyInlineEmbedProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = "";
    const widget = document.createElement("div");
    widget.className = "calendly-inline-widget";
    widget.dataset.url = url;
    widget.style.minWidth = "320px";
    widget.style.height = "720px";
    host.appendChild(widget);

    const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (existing) {
      // Widget script already on the page from a prior navigation
      window.Calendly?.initInlineWidget?.({ url, parentElement: widget });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      host.innerHTML = "";
    };
  }, [url]);

  return <div ref={hostRef} className="book-embed-host" />;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}
