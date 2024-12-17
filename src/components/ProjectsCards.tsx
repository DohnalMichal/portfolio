"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  siReact,
  siNextdotjs,
  siTailwindcss,
  siTypescript,
  siCss3,
  siOpenai,
  SimpleIcon,
  siGithub,
} from "simple-icons/icons";
import { Icon } from "./Icon";

type ProjectType = {
  title: string;
  description: string;
  link: string;
  github: string;
  technologies: SimpleIcon[];
};

const PROJECTS: ProjectType[] = [
  {
    title: "AI Mood Journal",
    description:
      "A Next.js application powered by OpenAI for tracking daily emotions and experiences through journal entries, with integrated sentiment analysis, question answering, and graphical visualization.",
    link: "https://ai-mood-journal-psi.vercel.app/",
    github: "https://github.com/DohnalMichal/ai-mood-journal",
    technologies: [siNextdotjs, siOpenai, siTypescript, siTailwindcss, siReact],
  },
  {
    title: "CSS Tricks Cards",
    description:
      "One of my very first project, a collection of cards, copying style of cards on css-tricks.com",
    link: "https://dohnalmichal.github.io/CSS-Tricks-cards/",
    github: "https://github.com/DohnalMichal/CSS-Tricks-cards",
    technologies: [siCss3],
  },
  {
    title: "Placeholder Project",
    description: "Lorem ipsum",
    link: "",
    github: "",
    technologies: [siReact, siTailwindcss],
  },
];

export const ProjectsCards = ({ className }: { className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {PROJECTS.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-gray-700/[0.8]"
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
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="mt-4 flex flex-row gap-2">
              {item.technologies.map((tech) => (
                <Icon
                  key={tech.title}
                  icon={tech}
                  size={16}
                  className="text-gray-400"
                />
              ))}
            </div>

            <Link
              href={item.github}
              className="group mt-8 flex max-w-fit flex-row items-center gap-2 text-sm text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon={siGithub} size={16} />
              View source
            </Link>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border-none border-transparent bg-gray-800 p-4 group-hover:border-gray-400",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h4 className={cn("mt-4 font-bold tracking-wide text-gray-100", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide text-gray-400",
        className,
      )}
    >
      {children}
    </p>
  );
};
