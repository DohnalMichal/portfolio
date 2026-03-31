import {
  siJavascript,
  siNextdotjs,
  siOpenai,
  siPrisma,
  siReact,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVite,
} from "simple-icons/icons";

export const PROJECTS = [
  {
    title: "Klipsch RP-5000F II Ebony",
    description:
      "A Three.js visualization of the Klipsch RP-5000F II Ebony floor-standing speaker I have at home. Features a speaker cabinet with ebony wood texture, beveled rubber grille, dual woofers with brushed copper cones, orbit controls for 3D exploration, and a debug GUI for tweaking lights, materials and geometry.",
    link: "https://klipsch-speaker.vercel.app/",
    github: "https://github.com/DohnalMichal/klipsch-speaker",
    icons: [siThreedotjs, siVite, siJavascript],
  },
  {
    title: "AI Mood Journal",
    description:
      "A Next.js application powered by OpenAI for tracking daily emotions and experiences through journal entries, with integrated sentiment analysis, question answering, and graphical visualization.",
    link: "https://ai-mood-journal-psi.vercel.app/",
    github: "https://github.com/DohnalMichal/ai-mood-journal",
    icons: [
      siNextdotjs,
      siOpenai,
      siTypescript,
      siTailwindcss,
      siReact,
      siPrisma,
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website, built with Next.js and Tailwind CSS.",
    github: "https://github.com/DohnalMichal/portfolio",
    icons: [siNextdotjs, siReact, siTailwindcss, siTypescript],
  }
];
