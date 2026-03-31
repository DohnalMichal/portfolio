"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useId, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { MeteorLine } from "./MeteorLine";

type Item = {
  logo: string;
  company: string;
  companyFull?: string;
  role: string;
  date: string;
  place: string;
  bullets: string[];
};

const WorkExperience = ({ items }: { items: Item[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCompany = items[selectedIndex];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const tabPanelId = `${id}-panel`;
  const tabId = (company: string) => `${id}-tab-${company}`;

  const handleTabKeyDown = (
    e: React.KeyboardEvent,
    index: number,
  ) => {
    let newIndex: number | null = null;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      newIndex = (index + 1) % items.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      newIndex = (index - 1 + items.length) % items.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newIndex = items.length - 1;
    }

    if (newIndex !== null) {
      setSelectedIndex(newIndex);
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <div className="mx-auto mt-12 flex max-w-2xl flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
      <div
        role="tablist"
        aria-label="Work experience"
        aria-orientation="vertical"
        className="relative flex flex-row gap-2 overflow-x-auto md:flex-col md:overflow-x-visible"
      >
        <MeteorLine height={220} />

        {items.map((item, index) => (
          <div
            key={item.company}
            role="none"
            className="group relative block"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-md bg-gray-800"
                  layoutId="work-hover"
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
            <div className="relative">
              <button
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={tabId(item.company)}
                aria-selected={selectedIndex === index}
                aria-controls={tabPanelId}
                tabIndex={selectedIndex === index ? 0 : -1}
                className={cn(
                  "group relative z-20 flex w-full min-w-28 cursor-pointer flex-row items-center gap-3 space-x-2 rounded-md px-4 py-2 text-left text-gray-300",
                  selectedIndex === index && "bg-gray-800",
                )}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-800">
                  <Image
                    alt={`${item.company} logo`}
                    src={item.logo}
                    loading="lazy"
                    width={16}
                    height={16}
                    className="aspect-square flex-shrink-0 object-contain transition duration-200"
                  />
                </div>
                {item.company}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        id={tabPanelId}
        role="tabpanel"
        aria-labelledby={tabId(selectedCompany.company)}
        // biome-ignore lint/a11y/noNoninteractiveTabindex: tabpanel with only static content should be focusable per ARIA APG tabs pattern
        tabIndex={0}
        className="flex-1 md:pl-10"
      >
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-gray-100 sm:text-lg md:text-xl">
            {selectedCompany.role}{" "}
            <span className="text-blue-500">
              @ {selectedCompany.companyFull ?? selectedCompany.company}
            </span>
          </h3>
          <p className="text-sm tracking-widest text-gray-300">
            {selectedCompany.date}
            <br />
            {selectedCompany.place}
          </p>
        </div>
        <ul className="mt-4 min-h-36 list-none md:min-h-48">
          {selectedCompany.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex flex-row items-start space-x-2 text-sm"
            >
              <div
                aria-hidden="true"
                className="mt-4 min-h-2 min-w-2 rounded-full bg-blue-500"
              />
              <p className="mt-2 text-gray-300">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { WorkExperience };
