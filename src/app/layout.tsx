import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Azuri Studios",
  description: "World-class design and development for startups.",
};

/**
 * Runs before React hydrates so the correct theme is applied on first paint.
 * Order of precedence: saved choice in localStorage -> OS preference -> light.
 * Keep the storage key in sync with THEME_STORAGE_KEY in ThemeToggle.tsx.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("azuri-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored ? stored === "dark" : prefersDark;
    var root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the init script may add the `dark` class before hydration.
    <html lang="en" className={instrumentSerif.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}