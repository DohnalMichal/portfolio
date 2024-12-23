import {
  siReact,
  siNextdotjs,
  siTailwindcss,
  siTypescript,
  siCss3,
  siOpenai,
  siPrisma,
} from "simple-icons/icons";

export const PROJECTS = [
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
    title: "CSS Tricks Cards",
    description:
      "One of my very first project, a collection of cards, copying style of cards on css-tricks.com",
    link: "https://dohnalmichal.github.io/CSS-Tricks-cards/",
    github: "https://github.com/DohnalMichal/CSS-Tricks-cards",
    icons: [siCss3],
  },
  {
    title: "First React Project",
    description: "Simple React project with TypeScript",
    github: "https://github.com/DohnalMichal/first-react-project",
    icons: [siReact, siTypescript],
  },
];
