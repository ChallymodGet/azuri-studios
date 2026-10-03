"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "@/components/ui/Logo";
import { BOOKING_PATH } from "@/lib/site-config";

interface NavItem {
  label: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "About us", href: "#about-us" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    // The menu only exists below the desktop breakpoint; close it if the viewport grows.
    const handleResize = () => {
      if (window.innerWidth > 960) setIsMenuOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "top-4 w-[calc(100%-2rem)] max-w-300 bg-white/80 dark:bg-[#0a0a12]/85 backdrop-blur-md border border-gray-200/80 dark:border-white/10 shadow-lg dark:shadow-black/40 rounded-full py-2.5 px-6"
          : "top-0 w-full mt-0! pt-3! pb-3! bg-white/80 dark:bg-[#0a0a12]/85 backdrop-blur-md border-b border-gray-100/80 dark:border-white/10 rounded-none px-6 site-header"
      }`}
    >
      <div className="site-container navbar-inner flex items-center justify-between w-full mx-auto py-0! my-0!">
        <Link href="/" className="brand" aria-label="Azuri Studios home">
          <Logo className="brand-logo navbar-logo" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <Link href={BOOKING_PATH} className="button button-primary navbar-cta">
            Get started
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg
              className={isMenuOpen ? "icon-close" : "icon-menu"}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}