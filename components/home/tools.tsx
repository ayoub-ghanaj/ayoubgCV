import { cn } from "@/lib/utils";
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
} from "@tabler/icons-react";
import { BrandKubernetesIcon, DigitaloceanIcon, SpringIcon } from "../icons";

export function ToolsSection() {
   const features = [
      {
        title: "Docker",
        description:
          "Containerize your applications for consistent environments and easy deployment.",
        icon: <IconBrandDocker />,
      },
      {
        title: "Next.js",
        description:
          "Build fast and SEO-friendly web applications with this powerful React framework.",
        icon: <IconBrandNextjs />,
      },
      {
        title: "Spring Boot",
        description:
          "Create production-ready Java applications with ease and a robust ecosystem.",
        icon: <SpringIcon />,
      },
      {
        title: "Laravel",
        description:
          "Develop elegant PHP applications with an expressive and easy-to-use framework.",
        icon: <IconBrandLaravel />,
      },
      {
        title: "React",
        description:
          "Build dynamic and interactive user interfaces with a flexible JavaScript library.",
        icon: <IconBrandReact />,
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
        title: "Firebase",
        description:
          "Add real-time databases, authentication, and analytics to your applications.",
        icon: <IconBrandFirebase />,
      },
      {
        title: "AWS",
        description:
          "Leverage a wide range of cloud services to power your applications at any scale.",
        icon: <IconBrandAws />,
      },
      {
        title: "DigitalOcean",
        description:
          "Simple and scalable cloud computing for developers with easy-to-manage droplets.",
        icon: <DigitaloceanIcon />,
      },
      {
        title: "Kubernetes",
        description:
          "Automate the deployment, scaling, and management of containerized applications.",
        icon: <BrandKubernetesIcon />,
      },
      {
        title: "Socket.io",
        description:
          "Real-time bidirectional communication between clients and servers, perfect for chat apps and live updates.",
        icon: <IconTerminal2 />,
      },
      {
        title: "Python Django",
        description:
          "Build powerful and scalable web applications with Python's most popular web framework.",
        icon: <IconBook2 />,
      },
      {
        title: "Machine Learning",
        description:
          "Implement AI models that learn from data, helping you make smarter predictions and automate complex tasks.",
        icon: <IconBulb />,
      },
      {
        title: "GraphQL",
        description:
          "Query your data in a flexible way, enabling efficient and precise API interactions.",
        icon: <IconApi />,
      },
    ];
    
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 12) && "lg:border-l dark:border-neutral-800",
        index < 12 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 12 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 12 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
