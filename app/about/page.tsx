import { title } from "@/components/primitives";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <div className="flex flex-row w-full h-[70vh]">
        <div className="w-full h-full grid align-middle lg:px-52  justify-center items-center">
          <h1 className="text-xl mb-10 text-center">Software Engineer</h1>
          <p>Ambitious software engineering student in the Master&apos;s Intelligent and Mobile Systems, currently looking for an
end-of-study internship in Morocco, to start in February 2025. Having done some projects revolving around
software development, AI, and data science, I am very excited about bringing all these skills into valuable projects</p>
        <Link target="_blank" href={'/ayoubGhanajCV_EN.pdf'} passHref className="mx-auto text-center flex flex-row  w-fit mt-10 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Download Resume <IconDownload className="ml-1"/>
        </Link>
        </div>
      </div>
    </div>
  );
}
