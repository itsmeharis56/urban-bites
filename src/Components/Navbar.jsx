import { useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Food Finder", href: "#assistant" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur-lg">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
      >
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-black"
        >
          <UtensilsCrossed className="text-orange-500" />
          Urban <span className="text-orange-500">Bites.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#menu"
          className="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400 md:inline-flex"
        >
          Explore Menu
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="rounded-lg p-2 text-orange-400 md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="space-y-1 border-t border-white/10 px-6 py-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}