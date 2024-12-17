import { ProjectsCards } from "@/components/ProjectsCards";
import { TypewriterRotating } from "@/components/TypeWriterEffect";
import { WorkExperience } from "@/components/WorkExperience";

const STABLE_WORDS = [
  { text: "Creating" },
  { text: "stunning" },
  { text: "web" },
  { text: "experiences" },
  { text: "with" },
];

const ROTATING_WORDS = [
  { text: "React.", className: "text-blue-500" },
  { text: "Next.js.", className: "text-blue-500" },
  { text: "Tailwind CSS.", className: "text-blue-500" },
];

export default function Home() {
  return (
    <>
      <main className="min-h-screen antialiased">
        <div className="mx-auto mt-10 max-w-5xl px-8 md:mt-20">
          <TypewriterRotating
            stableWords={STABLE_WORDS}
            rotatingWords={ROTATING_WORDS}
            typeSpeed={40}
            deleteSpeed={50}
            delayBetweenWords={2000}
            asElement="h1"
          />

          <p className="mt-8 max-w-2xl text-sm leading-loose tracking-wide text-gray-300 md:text-base">
            I&apos;m Michal Dohnal, a passionate Frontend Developer with
            extensive experience in building dynamic, user-centric web
            applications. Skilled in React, Next.js, TypeScript, and Tailwind
            CSS, I have a proven track record of delivering high-quality,
            interactive solutions. From optimizing insurance application forms
            to crafting map-editing tools.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl px-8 md:mt-20">
          <h2 className="font-bold text-gray-300 sm:text-lg md:text-2xl lg:text-3xl">
            Work experience
          </h2>
          <WorkExperience />
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-8 md:mt-20">
          <h2 className="font-bold text-gray-300 sm:text-lg md:text-2xl lg:text-3xl">
            Projects
          </h2>
          <ProjectsCards />
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </>
  );
}
