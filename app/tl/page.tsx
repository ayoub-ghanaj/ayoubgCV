import { title } from "@/components/primitives";
import { Timeline } from "@/components/ui/timeline";

export default function AboutPage() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 my-bold text-sm md:text-xl font-normal mb-8">
          - Master&apos;s Degree (M2) in Intelligent and Mobile Systems 
          </h1>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-2 gap-4">
          {[
              "Artificial Intelligence",
              "Machine Learning",
              "Data Science",
              "Big Data",
              "XML / JSON | SOAP / API",
              "Cross-Platform Mobile Development",
              "Augmented Reality",
              "Semantic Web",
            ].map((course, index) => (
              <div
                key={index}
                className="relative p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 my-bold text-sm md:text-xl font-normal mb-8">
          - Master&apos;s Degree (M1) in Intelligent and Mobile Systems 
          </h1>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-2 gap-4">
          {[
              "Data Science",
              "Big Data",
              "Distributed Architectures",
              "IoT",
              "Cross-Platform Mobile Development",
              "Information Security",
              "Virtualization",
              "Semantic Web",
            ].map((course, index) => (
              <div
                key={index}
                className="relative p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 my-bold text-sm md:text-xl font-normal mb-8">
          - Bachelor&apos;s Degree in Web Technologies and Programming 
          </h1>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-2 gap-4">
          {[
              "Software Engineering",
              "Java Programming",
              "JavaEE Web Development",
              "PHP Development",
              "Database Administration (Oracle)",
              "Information Systems",
              "Modern Web Development",
              "Systems & Networking",
            ].map((course, index) => (
              <div
                key={index}
                className="relative p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2021-2022",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 my-bold text-sm md:text-xl font-normal mb-8">
          - Advanced Technical Diploma in Software Development  
          </h1>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-2 gap-4">
          {[
              "OOP",
              "Algorithm Design",
              "Event-Driven Programming",
              "Object-Oriented Analysis & Design",
              "Full Stack Web Development",
              "Database Management (SQL)",
              "Desktop Application Development",
              "Mobile Application Development",
            ].map((course, index) => (
              <div
                key={index}
                className="relative p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

  ];
  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
