"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "top-4 w-[calc(100%-2rem)] max-w-300 bg-white/80 dark:bg-[#0a0a12]/85 backdrop-blur-md border border-gray-200/80 dark:border-white/10 shadow-lg dark:shadow-black/40 rounded-full py-2.5 px-6"
          : "top-0 w-full mt-0! pt-3! pb-3! bg-white/80 dark:bg-[#0a0a12]/85 backdrop-blur-md border-b border-gray-100/80 dark:border-white/10 rounded-none px-6 site-header"
      }`}
    >
      <div className="site-container navbar-inner flex items-center justify-between w-full mx-auto py-0! my-0!">
        <Link href="/" className="brand" aria-label="Azuri Studios home">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span>azuristudios.co</span>
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
          <Link href="#contact" className="button button-primary navbar-cta">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}