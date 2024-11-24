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
import React from "react";
import { motion } from "framer-motion";
import ReactFlow, { Node, Position  } from "react-flow-renderer";

import {
  BrandJavaIcon,
  BrandKubernetesIcon,
  DigitaloceanIcon,
  IconBrandAnsible,
  IconBrandAxios,
  IconBrandCanva,
  IconBrandDotnet,
  IconBrandKubernetes,
  IconBrandNextauth,
  IconBrandNextui,
  IconBrandNginx,
  IconBrandOracle,
  IconBrandPostman,
  IconBrandSftp,
  IconBrandShadcn,
  IconBrandShell,
  IconBrandSqlite,
  IconBrandSqlserver,
  IconBrandSsl,
  SpringIcon,
} from "../icons";

const skillCategories = {
  frameworks: [
    { title: "Angular", description: "A powerful framework for building dynamic web applications using TypeScript.", icon: <IconBrandAngular /> },
    { title: "JavaFX", description: "A framework for building rich client applications in Java.", icon: <BrandJavaIcon /> },
    { title: "Python Django", description: "A high-level Python framework for rapid web development.", icon: <IconBrandPython /> },
    { title: "Tkinter", description: "The standard GUI toolkit for Python, allowing for easy desktop application development.", icon: <IconDeviceDesktop /> },
    { title: "React", description: "A JavaScript library for building user interfaces, particularly single-page applications.", icon: <IconBrandReact /> },
    { title: "Next.js", description: "A powerful framework for building fast and SEO-friendly web applications with React.", icon: <IconBrandNextjs /> },
    { title: ".NET", description: "A framework for building various applications on Windows and beyond.", icon: <IconBrandDotnet /> },
    { title: "Spring Boot", description: "A framework for creating production-ready applications in Java with minimal configuration.", icon: <SpringIcon /> },
    { title: "Laravel", description: "Develop elegant PHP applications with an expressive and easy-to-use framework.", icon: <IconBrandLaravel /> },
  ],
  devOps: [
    { title: "Docker", description: "Containerize your applications for consistent environments and easy deployment.", icon: <IconBrandDocker /> },
    { title: "Nginx", description: "High-performance web server for serving static and dynamic content.", icon: <IconBrandNginx /> },
    { title: "SSL", description: "Secure your applications with SSL certificates for encrypted communications.", icon: <IconBrandSsl /> },
    { title: "Shell", description: "Command-line interface for scripting and automating tasks in Unix/Linux systems.", icon: <IconBrandShell /> },
    { title: "SFTP", description: "Secure File Transfer Protocol for securely transferring files over a network.", icon: <IconBrandSftp /> },
    { title: "Ansible", description: "Automation tool for configuration management, application deployment, and task automation.", icon: <IconBrandAnsible /> },
    { title: "Kubernetes", description: "Orchestrate containerized applications for automated deployment, scaling, and management.", icon: <IconBrandKubernetes /> },
    { title: "GitHub", description: "Host, review, and manage code repositories with the world’s largest development platform.", icon: <IconBrandGithub /> },
    { title: "Git", description: "Version control to keep track of changes and collaborate seamlessly with other developers.", icon: <IconBrandGit /> },
    { title: "Vercel", description: "Deploy web applications effortlessly, with optimized performance and automatic scaling.", icon: <IconBrandVercel /> },
    { title: "Cloudflare", description: "Enhance website performance and security with a global CDN, DDoS protection, and SSL encryption.", icon: <IconBrandCloudflare /> },
  ],
  databases: [
    { title: "MySQL", description: "Relational database management system known for reliability and speed.", icon: <IconBrandMysql /> },
    { title: "SQL Server", description: "Microsoft's enterprise-level relational database management system.", icon: <IconBrandSqlserver /> },
    { title: "PL/SQL", description: "Oracle's procedural language extension to SQL, used for complex queries and database programming.", icon: <IconBrandOracle /> },
    { title: "T-SQL", description: "Microsoft's proprietary extension to SQL for data manipulation and querying.", icon: <IconBrandSqlserver /> },
    { title: "OracleDB", description: "Powerful relational database management system by Oracle.", icon: <IconBrandOracle /> },
    { title: "SQLite", description: "Lightweight, serverless, self-contained SQL database engine.", icon: <IconBrandSqlite /> },
  ],
  libraries: [
    { title: "Framer Motion", description: "Library for smooth animations in React applications.", icon: <IconBrandFramerMotion /> },
    { title: "shadcn", description: "Component library with a focus on simplicity and customization.", icon: <IconBrandShadcn /> },
    { title: "Next Auth", description: "Simple and customizable authentication library with many third party auth.", icon: <IconBrandNextauth /> },
    { title: "NextUI", description: "UI library for creating stylish React applications effortlessly.", icon: <IconBrandNextui /> },
    { title: "Axios", description: "Promise-based HTTP client for making requests to APIs in JavaScript.", icon: <IconBrandAxios /> },
    { title: "Redux", description: "A predictable state container for JavaScript apps, centralizing state management.", icon: <IconBrandRedux /> },
  ],
};

const MindMapNode = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => (
  <motion.div
    className="node-container"
    whileHover={{ scale: 1.1 }}
    style={{
      padding: "1rem",
      borderRadius: "8px",
      background: "#f9fafb",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center",
      maxWidth: "150px",
    }}
  >
    {icon}
    <h3 style={{ marginTop: "0.5rem", fontSize: "1rem" }}>{title}</h3>
    <p style={{ fontSize: "0.8rem", color: "#555" }}>{description}</p>
  </motion.div>
);

const MindMap = () => {
  const nodes: Node<any>[] = Object.entries(skillCategories).flatMap(([category, items], idx) =>
  items.map((item, itemIdx) => ({
    id: `${category}-${itemIdx}`,
    data: { label: <MindMapNode {...item} /> },
    position: { x: (idx + 1) * 300, y: itemIdx * 200 }, // Increased spacing
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    type: 'default', // Specify a type if required
  }))
);

  return (
    <ReactFlow
      nodes={nodes}
      edges={[]}
      fitView
      style={{ width: "100%", height: "100vh" }}
      zoomOnScroll={false}
      panOnScroll={true}
    />
  );
};

export default MindMap;
