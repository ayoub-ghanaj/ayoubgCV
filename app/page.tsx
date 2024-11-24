"use client";

import Image from "next/image";
import freelance_d from "@/public/undraw_freelancer_re_irh4.svg";
import freelance_w from "@/public/undraw_freelancer_re_irh4_w.svg";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { FlipWords } from "@/components/ui/flip-words";
import { SkillsSection } from "@/components/home/skillz";
import { ToolsSection } from "@/components/home/tools";
import { InfiniteMovingToolsSection } from "@/components/home/InifinityTools";
import gifSrc from '@/public/cat.webp'; 
import MindMapT from "@/components/home/mindMapT";

export default function Home() {
  const { theme } = useTheme();
  const words = [
    "Manage Database.",
    "Do Back-end Development.",
    "Do Front-end Development.",
    "Design Websites.",
    "Manage Servers.",
    "Deploy Applications.",
    "Monitor System Performance.",
    "Develop APIs.",
    "Implement Security Protocols.",
    "Optimize Website Performance.",
    "Manage Cloud Infrastructure.",
    "Develop Mobile Applications.",
    "Set Up Reverse Proxies.",
    "Manage DNS Configurations.",
    "Handle Data Migration.",
    "Configure Web Hosting.",
    "Perform System Backups.",
    "Manage DevOps Processes."
  ];
  return (
    <>
      {/* First Section with Sparkles */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor={`${theme == "light" ? "#000000" : "#FFFFFF"}`}
          />
        </div>
        <div className="relative grid w-full h-full align-middle justify-center z-10">
          {/* <div className="relative grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4 z-10"> */}
          {/* First Column - Centered Text */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex mb-3">
              <label className="text-3xl sofia-regular"> hello , I am </label> &nbsp; &nbsp;&nbsp;<h1 className="text-3xl font-bold my-bold lemon-regular">Ayoub Ghanaj</h1>
            </div>
            <div className="flex mb-3">
              <h1 className="text-3xl font-bold outline my-bold p-2 ">Full-Stack {theme === "light" ? (<label className={`my-outline-b text-[2rem]`} > Developer </label>) : (<label className={`my-outline-w text-[2rem]`} > Developer </label>)}</h1>
            </div>
            <div className="flex mb-3">
              <label className="text-base lg:text-xl sofia-regular">  I Can </label> &nbsp;<h1 className="text-lg lg:text-  xl my-bold text-transparent ">{theme === "light" ? (<FlipWords words={words} className={`my-outline-b !text-transparent `} />) : (<FlipWords words={words} className={`my-outline-w !text-transparent`} />)}</h1>
            </div>
          </div>

          {/* Second Column - SVG Image */}
          {/* <div className="flex items-center justify-center">
            {theme == "light" ? (<Image src={freelance_d} alt="Developper ith a laptop" />) : (<Image src={freelance_w} alt="Developper ith a laptop" />)}

          </div> */}
        </div>
      </section>

      {/* Second Section */}
      <section className="h-[20vh]  flex items-center justify-center">
        <h1 className="my-retro text-[5vw]  px-9 my-6"> {theme === "light" ? (<label className={`text-[2rem]`} > My <label className={`my-outline-b text-[2rem]`}>Skills</label> </label>) : (<label className={`text-[2rem] `} > My <label className={`my-outline-w text-[2rem]`}>Skills</label> </label>)}</h1>
      </section>
      <section className="  flex items-center justify-center my-5">
        <div className="relative  w-full h-full z-10">
          <SkillsSection />
        </div>
      </section>

      {/* Second Section */}
      <section className="h-[20vh]  flex items-center justify-center">
        <h1 className="my-retro text-[5vw]  px-9 my-6"> {theme === "light" ? (<label className={`text-[2rem]`} > My <label className={`my-outline-b text-[2rem]`}>Tools</label> </label>) : (<label className={`text-[2rem] `} > My <label className={`my-outline-w text-[2rem]`}>Tools</label> </label>)}</h1>
      </section>
      <section className="  flex items-center justify-center ">
        <div className="relative  w-full h-full z-10">
          <MindMapT />
        </div>
      </section>
      {/* <section className="  flex items-center justify-center my-5">
        <div className="relative  w-full h-full z-10">
          <ToolsSection/>
        </div>
      </section> */}

      {/* Third Section */}
      <section className="h-[20vh]  flex items-center justify-center">
        <h1 className="my-retro text-[5vw]  px-9 my-6"> {theme === "light" ? (<label className={`text-[2rem]`} >  <label className={`my-outline-b text-[2rem]`}>About</label> Me </label>) : (<label className={`text-[2rem] `} >  <label className={`my-outline-w text-[2rem]`}>About</label> Me </label>)}</h1>
      </section>
      <section className=" h-[80vh] flex items-center justify-center px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Left Part with GIF */}
          <div className="flex items-center justify-center">
            <Image
              src={gifSrc}
              alt="Animated GIF"
              width={250}
              height={250}
              className="rounded-lg object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Right Part with Text */}
          <div className="flex items-center">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-300 lemon-regular">
            Master’s student in Intelligent Mobile Systems with a focus on Data Science and Machine Learning. 
            I bring solid experience in web development, IoT, and custom management systems.
            Skilled in diverse programming languages and technologies, I’m eager to contribute
            to data-driven projects and software development through an internship, 
            enhancing my expertise and driving impactful solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
