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
        <div className="max-w-5xl mx-auto mt-10 md:mt-20 px-8">
          <TypewriterRotating
            stableWords={STABLE_WORDS}
            rotatingWords={ROTATING_WORDS}
            typeSpeed={40}
            deleteSpeed={50}
            delayBetweenWords={2000}
            asElement="h1"
          />

          <p className="text-gray-300 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
            I&apos;m Michal Dohnal, a passionate Frontend Developer with
            extensive experience in building dynamic, user-centric web
            applications. Skilled in React, Next.js, TypeScript, and Tailwind
            CSS, I have a proven track record of delivering high-quality,
            interactive solutions. From optimizing insurance application forms
            to crafting map-editing tools.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 md:mt-20 px-8">
          <h2 className="sm:text-lg md:text-2xl lg:text-3xl text-gray-300 font-bold">
            Work experience
          </h2>
          <WorkExperience />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
