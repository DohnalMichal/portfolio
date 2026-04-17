import { ProjectsCards } from "@/components/ProjectsCards";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen antialiased">
      <div className="relative mx-auto flex max-w-5xl flex-col justify-start px-8 md:mt-20">
        <h1 className="text-left font-bold text-gray-100 sm:text-xl md:text-4xl lg:h-24 lg:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-loose tracking-wide text-gray-400 md:text-base">
          A collection of things I&apos;ve built.
        </p>
        <ProjectsCards items={PROJECTS} className="mt-10" />
      </div>
    </main>
  );
}
