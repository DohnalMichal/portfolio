import { LINKS } from "@/data/links";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";
import { siGithub, siLinkedin } from "simple-icons";

export const Footer = () => {
  return (
    <footer className="row-start-3 mt-20 flex flex-col flex-wrap items-center justify-center gap-6 pb-20">
      <div className="flex flex-row gap-4">
        <Image
          src="/me.jpeg"
          width={30}
          height={30}
          className="rounded-full"
          alt="Michal Dohnal"
        />
        <h4 className="font-inter text-xl font-bold text-white">
          Michal Dohnal
        </h4>
      </div>
      <div className="flex flex-row gap-4">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-400 hover:text-gray-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="w-full max-w-fit border-t border-gray-700 pt-4 text-center text-gray-400">
        © 2024 Michal Dohnal. All rights reserved.
      </p>
      <div className="flex gap-6">
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
    </footer>
  );
};
