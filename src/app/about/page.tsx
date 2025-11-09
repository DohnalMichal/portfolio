import Image from "next/image";
import Link from "next/link";
import { siGithub, siLinkedin } from "simple-icons";
import { Icon } from "@/components/Icon";
import { Timeline } from "@/components/Timeline";
import { TypewriterRotating } from "@/components/TypeWriterEffect";
import { TIMELINE_DATA } from "@/data/timeline";

const STABLE_WORDS = [
  { text: "Hi!" },
  { text: "I'm" },
  { text: "Michal", className: "text-blue-500" },
  { text: "Dohnal", className: "text-blue-500" },
  { text: "a passionate" },
  { text: "Frontend" },
  { text: "Developer." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen antialiased">
      <div className="relative mx-auto flex max-w-5xl flex-col justify-between space-y-10 px-8 md:mt-20 md:flex-row md:space-x-10 md:space-y-0">
        <div className="flex flex-col text-sm leading-loose tracking-wide text-gray-300 md:text-base">
          <TypewriterRotating
            stableWords={STABLE_WORDS}
            typeSpeed={40}
            asElement="h1"
            className="mt-10 max-w-2xl md:min-h-24"
          />
          <p className="mt-4 max-w-2xl md:mt-20">
            Hi, I’m Michal, a passionate Frontend Developer with a strong
            background in <strong>React</strong>, <strong>TypeScript</strong>,
            and modern web technologies. My programming journey began in
            elementary school when my father gave me a book titled
            <i>&quot;Tvorba WWW stránek pro úplné začátečníky&quot;</i>{" "}
            (Creating Websites for Complete Beginners). It not only introduced
            me to the basics of web development but also deepened my fascination
            with computers and the endless possibilities of programming.
            Combined with my love for video games, this early experience
            solidified my dream of becoming a programmer.
          </p>
          <p className="mt-8 max-w-2xl">
            I built a strong foundation in programming and technology at the
            Secondary Technical School Purkyňova, where I specialized in
            Graphics and Web Design during my later years. After graduating, I
            pursued Informatics at <strong>Masaryk University</strong>,
            completing coursework in Python, Haskell, and C programming. During
            this time, I gained hands-on experience through an internship at{" "}
            <strong>IBM</strong>, where I contributed to building components for
            internal dashboards and further solidified my programming
            fundamentals.
          </p>
          <p className="mt-8 max-w-2xl">
            My professional career began with part-time React development while
            still in university. Eventually, I transitioned to full-time
            frontend development, collaborating on diverse projects like online
            map editing tools, Progressive Web Apps, and insurance web forms.
            Along the way, I’ve had the opportunity to work with various
            companies, including MapTiler, Direct Pojišťovna, and InQool, where
            I focused on delivering practical solutions and improving user
            experiences.
          </p>
          <p className="mt-8 max-w-2xl">
            Beyond coding, I’m a dedicated home barista, a former national-level
            rower who transitioned to amateur bodybuilding and later to
            powerlifting, a motorcycle enthusiast currently riding a Kawasaki
            Ninja 650, and a travel lover. These passions shape my attention to
            detail, perseverance, and creativity – qualities I bring to both my
            personal and professional life.
          </p>
        </div>

        <div className="order-first md:order-last">
          <Image
            src="/me.jpeg"
            width={200}
            height={200}
            alt="Michal Dohnal"
            className="rounded-2xl"
          />
          <div className="mt-4 flex flex-row justify-start space-x-4 md:justify-center">
            <Link
              href="https://www.linkedin.com/in/michal-dohnal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <Icon icon={siLinkedin} size={24} />
            </Link>
            <Link
              href="https://github.com/DohnalMichal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <Icon icon={siGithub} size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-8 md:mt-20">
        <Timeline data={TIMELINE_DATA} />
      </div>
    </main>
  );
}
