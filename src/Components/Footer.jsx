import { UtensilsCrossed, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] px-6 pt-12 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-black"
            >
              <UtensilsCrossed className="text-orange-500" />
              Urban <span className="text-orange-500">Bites.</span>
            </a>

            <p className="mt-3 text-sm text-gray-400">
              Fresh food. Good mood. Every bite.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-6 text-sm text-gray-400"
          >
            <a href="#menu" className="hover:text-orange-400">
              Menu
            </a>
            <a href="#about" className="hover:text-orange-400">
              About
            </a>
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
            <a
              href="#home"
              className="flex items-center gap-1 text-orange-400"
            >
              Back to top
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Urban Bites · Portfolio demo
          </p>
          <p>Designed & developed by Haris Imran</p>
        </div>
      </div>
    </footer>
  );
}