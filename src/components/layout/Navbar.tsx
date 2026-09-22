import Link from "next/link";

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
  return (
    <header className="site-header">
      <div className="site-container navbar-inner">
        <Link href="/" className="brand" aria-label="Azuri Studios home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>azuristudios.co</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="button button-primary navbar-cta"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}