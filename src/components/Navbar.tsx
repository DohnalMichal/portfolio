"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleX, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LINKS } from "@/data/links";
import { ActionButton } from "./ActionButton";
import { HomeLink } from "./HomeLink";

const MOBILE_MENU_ID = "mobile-nav-menu";

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Focus management: move focus into menu on open, return it on close.
  // Also handles Escape key and focus trap while the menu is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (e.key === "Tab" && menuPanelRef.current) {
        const focusable = menuPanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isMenuOpen]);

  return (
    <div className="relative z-[100] mx-auto flex max-w-5xl flex-row items-center justify-between px-8 py-8 sm:justify-between">
      {/* Desktop nav */}
      <nav
        aria-label="Main navigation"
        className="hidden flex-row items-center space-x-8 rounded-2xl border border-gray-700/60 bg-gray-800 px-4 py-2 md:flex"
      >
        <HomeLink />
        {LINKS.map((link, index) => (
          <Link
            className="group relative block p-2 text-sm text-white"
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-xl bg-gray-700"
                  layoutId="navbar-hover"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-20 text-white">{link.label}</div>
          </Link>
        ))}
      </nav>

      <ActionButton
        className="hidden h-[54px] md:flex"
        href="/Michal-Dohnal-CV.pdf"
        download="Michal-Dohnal-CV.pdf"
      >
        Download CV
      </ActionButton>

      {/* Mobile header row */}
      <div className="flex w-full justify-between md:hidden">
        <HomeLink />
        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          className="h-6 w-6 cursor-pointer text-gray-100 transition-all duration-100 hover:text-gray-400"
          onClick={toggleMenu}
        >
          <Menu aria-hidden="true" />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuPanelRef}
            id={MOBILE_MENU_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              className="absolute right-8 top-8 h-6 w-6 text-gray-100 transition-all duration-100 hover:text-gray-400"
              onClick={toggleMenu}
            >
              <CircleX aria-hidden="true" />
            </button>

            <motion.nav
              aria-label="Mobile navigation"
              className="flex flex-col items-center space-y-6"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
            >
              {LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    show: { x: 0, opacity: 1 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-xl font-bold text-gray-100 transition-all duration-100 hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { x: -50, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
              >
                <ActionButton
                  className="mt-10 h-[54px] md:hidden"
                  href="/Michal-Dohnal-CV.pdf"
                  download="Michal-Dohnal-CV.pdf"
                >
                  Download CV
                </ActionButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
