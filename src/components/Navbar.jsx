import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Play } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import { useTheme } from "../context/ThemeContext";

/**
 * Sticky top navigation.
 * - Collapses into a hamburger menu below the `md` breakpoint.
 * - Links use anchor hrefs (#section) so smooth scrolling is handled
 *   purely by the `scroll-behavior: smooth` rule in index.css.
 * - Adds a subtle background/blur once the page is scrolled, so the
 *   bar reads clearly over the hero without a hard line on load.
 */
export default function Navbar({ onOpenDemo }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever a link is clicked.
  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 dark:bg-ink/90 backdrop-blur-md border-b border-paper-line dark:border-ink-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 sm:h-20">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-ink dark:bg-paper text-signal font-bold">
            N
          </span>
          NOVA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-paper-line dark:border-ink-line hover:border-signal transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={onOpenDemo}
            className="text-sm font-medium px-4 py-2 rounded-full border border-paper-line dark:border-ink-line hover:border-signal transition-colors flex items-center gap-1.5"
          >
            <Play size={12} className="text-signal-dim dark:text-signal fill-current" />
            Demo
          </button>
          <a
            href="#pricing"
            className="text-sm font-medium px-4 py-2 rounded-full border border-paper-line dark:border-ink-line hover:border-signal transition-colors"
          >
            Sign in
          </a>
          <a
            href="#final-cta"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-ink text-paper dark:bg-signal dark:text-ink hover:opacity-90 transition-opacity"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-paper-line dark:border-ink-line"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-paper-line dark:border-ink-line"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        } bg-paper dark:bg-ink border-b border-paper-line dark:border-ink-line`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block py-2.5 text-base font-medium text-ink/80 dark:text-paper/80"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenDemo?.();
              }}
              className="w-full text-center text-sm font-medium py-2.5 rounded-full border border-paper-line dark:border-ink-line flex items-center justify-center gap-2"
            >
              <Play size={13} className="text-signal-dim dark:text-signal fill-current" />
              Watch interactive demo
            </button>
            <a
              href="#final-cta"
              onClick={handleLinkClick}
              className="block text-center text-sm font-semibold px-4 py-2.5 rounded-full bg-ink text-paper dark:bg-signal dark:text-ink"
            >
              Start free trial
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
