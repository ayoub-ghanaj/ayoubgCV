import { cn } from "@/lib/utils";
import {
  IconApi,
  IconAutomation,
  IconBook,
  IconBrandSpeedtest,
  IconBulb,
  IconCloudUpload,
  IconDatabase,
  IconLayout,
  IconNetwork,
  IconPalette,
  IconServer,
  IconShieldCheck,
  IconTerminal2,
} from "@tabler/icons-react";

export function SkillsSection() {
   const features = [
      {
        title: "Database Management",
        description:
          "Efficiently manage and optimize databases, ensuring data integrity and high performance.",
        icon: <IconDatabase />,
      },
      {
        title: "Backend Wizardry",
        description:
          "Develop scalable and robust backend systems to power your applications with seamless functionality.",
        icon: <IconServer />,
      },
      {
        title: "Frontend Excellence",
        description:
          "Craft user interfaces that are intuitive, responsive, and visually appealing, ensuring a delightful user experience.",
        icon: <IconLayout />,
      },
      {
        title: "Web Design Mastery",
        description:
          "Design stunning websites that combine aesthetics with functionality, tailored to your brand’s needs.",
        icon: <IconPalette />,
      },
      {
        title: "Server Management",
        description:
          "Monitor, configure, and maintain servers to keep your applications running smoothly and securely.",
        icon: <IconNetwork />,
      },
      {
        title: "API Development",
        description:
          "Build and integrate RESTful APIs for seamless communication between systems and services.",
        icon: <IconApi />,
      },
      {
        title: "Cloud Integration",
        description:
          "Leverage cloud technologies to ensure scalability, reliability, and cost-efficiency for your business.",
        icon: <IconCloudUpload />,
      },
      {
        title: "Security & Compliance",
        description:
          "Implement robust security protocols to safeguard your data and ensure compliance with industry standards.",
        icon: <IconShieldCheck />,
      },
      {
        title: "DevOps Automation",
        description:
          "Streamline your development pipeline with CI/CD tools and automation, enabling faster and more reliable deployments.",
        icon: <IconAutomation />,
      },
      {
        title: "Continuous Learning",
        description:
          "Stay up-to-date with the latest tech trends and best practices, bringing innovative solutions to every project.",
        icon: <IconBook />,
      },
      {
        title: "Performance Optimization",
        description:
          "Identify and resolve bottlenecks to keep your applications running at peak performance, delivering fast user experiences.",
        icon: <IconBrandSpeedtest />,
      },
      {
         title: "Problem-Solving ",
         description:
           "Swiftly identify and resolve technical challenges, minimizing disruptions and keeping systems running smoothly.",
         icon: <IconBulb />,
       }
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
        (index === 0 || index === 8) && "lg:border-l dark:border-neutral-800",
        index < 8 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 8 && (
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
