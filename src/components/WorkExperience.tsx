"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MeteorLine } from "./MeteorLine";

const ITEMS = [
  {
    logo: "/d-icon.svg",
    company: "Direct",
    companyFull: "Direct Pojišťovna",
    role: "Frontend Developer",
    date: "Aug 2024 - Present",
    place: "Brno, Czech Republic",
    bullets: [
      "Developing and optimizing interactive web forms for insurance applications using moder frontend technologies like React, Next.js and Tailwind CSS.",
      "Introduced coding standards and best practices to the team, significantly improving code quality and maintainability.",
    ],
  },
  {
    logo: "/maptiler.png",
    company: "MapTiler",
    role: "Frontend Developer",
    date: "Nov 2022 - Jul 2024",
    place: "Brno, Czech Republic",
    bullets: [
      "Contributed to the development of an online map editing tool using TypeScript and React, focusing on enhancing user experience and functionality.",
      "Implemented end-to-end testing using Cypress, significantly improving code quality and identifying and resolving bugs in the early stages of development.",
      "Actively participated in code reviews, providing constructive feedback to team members and ensuring adherence to coding standards.",
    ],
  },
  {
    logo: "/inqool.png",
    company: "InQool",
    role: "Frontend Developer",
    date: "Apr 2021 - Oct 2022",
    place: "Brno, Czech Republic",
    bullets: [
      "Contributed to the development of frontend solutions for multiple major projects, serving clients such as Telekom SK, Olomoucký Kraj and Národní Knihovna ČR, leveraging TypeScript and React.",
      "Introduced end-to-end testing strategies to ensure the reliability and performance of the developed solutions.",
    ],
  },
  {
    logo: "/ibm.png",
    company: "IBM",
    role: "Intern",
    date: "Oct 2020 - Feb 2021",
    place: "Brno, Czech Republic",
    bullets: [
      "Contributed to the development of components for an internal dashboard application at IBM, using Angular.",
      "Gained practical experience in frontend development by actively participating in the creation and maintenance of key components.",
    ],
  },
];

const WorkExperience = () => {
  const [selectedCompany, setSelectedCompany] = useState(ITEMS[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-12 flex max-w-2xl flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
      <div className="relative flex flex-row gap-2 overflow-x-auto md:flex-col md:overflow-x-visible">
        <MeteorLine height={220} />

        {ITEMS.map((item, index) => (
          <div
            key={item.company}
            className="group relative block"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-md bg-gray-800"
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
            <div className="relative">
              <button
                className={cn(
                  "group relative z-20 flex w-full min-w-28 cursor-pointer flex-row items-center gap-3 space-x-2 rounded-md px-4 py-2 text-left text-gray-300",
                  selectedCompany.company === item.company && "bg-gray-800",
                )}
                onClick={() => setSelectedCompany(item)}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-800">
                  <Image
                    alt={item.company}
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
      <div className="flex-1 md:pl-10">
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
        <div className="mt-4">
          {selectedCompany.bullets.map((bullet, index) => (
            <div
              key={index}
              className="flex flex-row items-start space-x-2 text-sm"
            >
              <div className="mt-4 min-h-2 min-w-2 rounded-full bg-blue-500" />
              <p className="mt-2 text-gray-300">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { WorkExperience };
