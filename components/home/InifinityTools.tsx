"use client";
import {
  IconBrandNextjs,
  IconBrandLaravel,
  IconBrandReact,
  IconBrandGithub,
  IconBrandGit,
  IconBrandVercel,
  IconBrandFirebase,
  IconBrandAws,
  IconBrandDocker,
  IconBulb,
  IconBook2,
  IconApi,
  IconTerminal2,
  IconBrandAngular,
  IconDeviceDesktop,
  IconBrandPython,
  IconBrandMysql,
  IconBrandAdobePhotoshop,
  IconBrandFigma,
  IconBrandVisualStudio,
  IconBrandFramerMotion,
  IconBrandRedux,
  IconBrandCloudflare,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { BrandJavaIcon, BrandKubernetesIcon, DigitaloceanIcon, IconBrandAnsible, IconBrandAxios, IconBrandCanva, IconBrandDotnet, IconBrandKubernetes, IconBrandNextauth, IconBrandNextui, IconBrandNginx, IconBrandOracle, IconBrandPostman, IconBrandSftp, IconBrandShadcn, IconBrandShell, IconBrandSqlite, IconBrandSqlserver, IconBrandSsl, SpringIcon } from "../icons";

export function InfiniteMovingToolsSection() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="m-3 text-4xl border-x border-t border-dashed yellowtail-regular px-12">Frameworks</h1>
      <InfiniteMovingCards
        items={frameworks}
        direction="left"
        speed="rrrslow"
      />
      <h1 className="m-3 text-4xl border-x border-dashed yellowtail-regular px-12">DevOps Utilities & Tools</h1>
      <InfiniteMovingCards
        items={devOps}
        direction="left"
        speed="rrrslow"
      />
      <h1 className="m-3 text-4xl border-x border-dashed yellowtail-regular px-12">Databases</h1>
      <InfiniteMovingCards
        items={databases}
        direction="left"
        speed="rrslow"
      />
      <h1 className="m-3 text-4xl border-x border-dashed yellowtail-regular px-12">Libraries</h1>
      <InfiniteMovingCards
        items={libraries}
        direction="left"
        speed="rrslow"
      />
    </div>
  );
}

const frameworks = [
  {
    title: "Angular",
    description: "A powerful framework for building dynamic web applications using TypeScript.",
    icon: <IconBrandAngular />, // Replace with actual icon component
  },
  {
    title: "JavaFX",
    description: "A framework for building rich client applications in Java.",
    icon: <BrandJavaIcon />, // Replace with actual icon component
  },
  {
    title: "Python Django",
    description: "A high-level Python framework for rapid web development.",
    icon: <IconBrandPython />, // Replace with actual icon component
  },
  {
    title: "Tkinter",
    description: "The standard GUI toolkit for Python, allowing for easy desktop application development.",
    icon: <IconDeviceDesktop />, // Replace with actual icon component
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces, particularly single-page applications.",
    icon: <IconBrandReact />, // Replace with actual icon component
  },
  {
    title: "Next.js",
    description: "A powerful framework for building fast and SEO-friendly web applications with React.",
    icon: <IconBrandNextjs />,
  },
  {
    title: ".NET",
    description: "A framework for building various applications on Windows and beyond.",
    icon: <IconBrandDotnet />, // Replace with actual icon component
  },
  {
    title: "Spring Boot",
    description: "A framework for creating production-ready applications in Java with minimal configuration.",
    icon: <SpringIcon />,
  },
  {
    title: "Laravel",
    description:
      "Develop elegant PHP applications with an expressive and easy-to-use framework.",
    icon: <IconBrandLaravel />,
  }, 
];
const devOps = [
  {
    title: "Docker",
    description:
      "Containerize your applications for consistent environments and easy deployment.",
    icon: <IconBrandDocker />,
  },
  {
    title: "Nginx",
    description:
      "High-performance web server for serving static and dynamic content.",
    icon: <IconBrandNginx />,
  },
  {
    title: "SSL",
    description:
      "Secure your applications with SSL certificates for encrypted communications.",
    icon: <IconBrandSsl />, // Replace with actual icon component
  },
  {
    title: "Shell",
    description:
      "Command-line interactionsface for scripting and automating tasks in Unix/Linux systems.",
    icon: <IconBrandShell />, // Replace with actual icon component
  },
  {
    title: "SFTP",
    description:
      "Secure File Transfer Protocol for securely transferring files over a network.",
    icon: <IconBrandSftp />, // Replace with actual icon component
  },
  {
    title: "Ansible",
    description:
      "Automation tool for configuration management, application deployment, and task automation.",
    icon: <IconBrandAnsible />, // Replace with actual icon component
  },
  {
    title: "Kubernetes",
    description:
      "Orchestrate containerized applications for automated deployment, scaling, and management.",
    icon: <IconBrandKubernetes />, // Replace with actual icon component
  },
  
  {
    title: "GitHub",
    description:
      "Host, review, and manage code repositories with the world’s largest development platform.",
    icon: <IconBrandGithub />,
  },
  {
    title: "Git",
    description:
      "Version control to keep track of changes and collaborate seamlessly with other developers.",
    icon: <IconBrandGit />,
  },
  {
    title: "Vercel",
    description:
      "Deploy web applications effortlessly, with optimized performance and automatic scaling.",
    icon: <IconBrandVercel />,
  },
  {
    title: "Cloudflare",
    description: "Enhance website performance and security with a global CDN, DDoS protection, and SSL encryption.",
    icon: <IconBrandCloudflare />,
  },
];
const databases = [
  {
    title: "MySQL",
    description: "Relational database management system known for reliability and speed.",
    icon: <IconBrandMysql />, // Replace with actual icon component
  },
  {
    title: "SQL Server",
    description: "Microsoft's enterprise-level relational database management system.",
    icon: <IconBrandSqlserver />, // Replace with actual icon component
  },
  {
    title: "PL/SQL",
    description: "Oracle's procedural language extension to SQL, used for complex queries and database programming.",
    icon: <IconBrandOracle />, // Replace with actual icon component
  },
  {
    title: "T-SQL",
    description: "Microsoft's proprietary extension to SQL for data manipulation and querying.",
    icon: <IconBrandSqlserver />, // Replace with actual icon component
  },
  {
    title: "OracleDB",
    description: "Powerful relational database management system by Oracle.",
    icon: <IconBrandOracle />, // Replace with actual icon component
  },
  {
    title: "SQLite",
    description: "Lightweight, serverless, self-contained SQL database engine.",
    icon: <IconBrandSqlite />, // Replace with actual icon component
  },
  // Add more as needed...
];
const libraries = [
  {
    title: "Framer Motion",
    description: "Library for smooth animations in React applications.",
    icon: <IconBrandFramerMotion />, // Replace with actual icon component
  },
  {
    title: "shadcn",
    description: "Component library with a focus on simplicity and customization.",
    icon: <IconBrandShadcn />, // Replace with actual icon component
  },
  {
    title: "Next Auth",
    description: "Simple and customizable authentication library with many third party auth.",
    icon: <IconBrandNextauth />, // Replace with actual icon component
  },
  {
    title: "NextUI",
    description: "UI library for creating stylish React applications effortlessly.",
    icon: <IconBrandNextui />, // Replace with actual icon component
  },
  {
    title: "Axios",
    description: "Promise-based HTTP client for making requests to APIs in JavaScript.",
    icon: <IconBrandAxios />, // Replace with actual icon component
  },
  {
    title: "Redux",
    description: "A predictable state container for JavaScript apps, centralizing state management.",
    icon: <IconBrandRedux />, // Replace with actual icon component
  },
  // Add more as needed...
];