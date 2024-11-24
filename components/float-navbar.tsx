"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { AboutIcon, EducationIcon, HomeIcon, ProjectsIcon, SkillsIcon, SoonIcon } from "./icons";
import { IconMessage } from "@tabler/icons-react";
export function Floating_Nav() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/pr",
      icon: <ProjectsIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <AboutIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Coming Soon",
      link: "/app",
      icon: <SoonIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },


  ];
  return (
    <div className="relative  w-full lg:hidden">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
