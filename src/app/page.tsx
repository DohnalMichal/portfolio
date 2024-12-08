import { TypewriterRotating } from "@/components/TypeWriterEffect";

const STABLE_WORDS = [
  { text: "Creating" },
  { text: "stunning" },
  { text: "web" },
  { text: "experiences" },
  { text: "with" },
];

// Words to rotate through for the last position
const ROTATING_WORDS = [
  { text: "React.", className: "text-blue-500" },
  { text: "Next.js.", className: "text-blue-500" },
  { text: "Tailwind.", className: "text-blue-500" },
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
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
