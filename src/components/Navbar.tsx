"use client";

import { LINKS } from "@/data/links";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HomeLink } from "./HomeLink";
import { CircleX, Menu } from "lucide-react";
import { ActionButton } from "./ActionButton";

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Michal_Dohnal_CV.pdf"; // file in 'public' folder
    link.download = "Michal_Dohnal_CV.pdf";
    link.click();
  };

  return (
    <div className="relative z-[100] mx-auto flex max-w-5xl flex-row items-center justify-between px-8 py-8 sm:justify-between">
      {/* Desktop */}
      <nav className="hidden flex-row items-center space-x-8 rounded-2xl border border-gray-700/60 bg-gray-800 px-4 py-2 md:flex">
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
                  layoutId="hoverBackground"
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
      <ActionButton className="hidden h-[54px] md:flex" onClick={downloadCV}>
        Download CV
      </ActionButton>
      {/* Mobile */}
      <div className="flex w-full justify-between md:hidden">
        <HomeLink />
        <button
          className="h-6 w-6 cursor-pointer text-gray-100 transition-all duration-100 hover:text-gray-400"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute right-8 top-8 h-6 w-6 text-gray-100 transition-all duration-100 hover:text-gray-400"
              onClick={toggleMenu}
            >
              <CircleX />
            </button>

            <motion.nav
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
                  onClick={downloadCV}
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
