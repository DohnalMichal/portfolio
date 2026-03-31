import Image from "next/image";
import Link from "next/link";

export const HomeLink = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center space-x-2 text-sm text-white"
    >
      <Image
        src="/me.jpeg"
        width={30}
        height={30}
        alt="Author photo"
        priority
        className="scale-100 rounded-full object-cover blur-0 transition duration-500"
      />
      <span className="font-inter text-nowrap font-bold">Michal Dohnal</span>
    </Link>
  );
};
