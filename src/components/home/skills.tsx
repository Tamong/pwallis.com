import {
  AreaChart,
  BrainCircuit,
  Database,
  FileBox,
  FolderGit2,
  Microscope,
  MonitorSmartphone,
  Link,
  UploadCloud,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "Web Development",
      icon: (
        <MonitorSmartphone className="text-stone-700 dark:text-stone-300" />
      ),
      description:
        "Crafting responsive, user-friendly websites using TypeScript, Next.js, and TailwindCSS.",
    },
    {
      name: "Data Analysis & Visualization",
      icon: <AreaChart className="text-stone-700 dark:text-stone-300" />,
      description:
        "Transforming raw data into actionable insights using Python Pandas and Seaborn libraries.",
    },
    {
      name: "Machine Learning",
      icon: <BrainCircuit className="text-stone-700 dark:text-stone-300" />,
      description:
        "Leveraging machine learning algorithms for predictive analytics, utilizing TensorFlow and Scikit-Learn.",
    },
    {
      name: "Artificial Intelligence",
      icon: <Microscope className="text-stone-700 dark:text-stone-300" />,
      description:
        "Incorporating advanced algorithms for enhanced decision-making and automation.",
    },
    {
      name: "Database Management",
      icon: <Database className="text-stone-700 dark:text-stone-300" />,
      description:
        "Designing and managing robust databases with SQL and NoSQL technologies",
    },
    {
      name: "Version Control",
      icon: <FolderGit2 className="text-stone-700 dark:text-stone-300" />,
      description:
        "Collaborating through use of version control systems like Git for code management.",
    },
    {
      name: "Cloud Computing",
      icon: <UploadCloud className="text-stone-700 dark:text-stone-300" />,
      description:
        "Deploying scalable applications on cloud platforms like AWS, Vercel, and PlanetScale.",
    },
    {
      name: "Blockchain",
      icon: <Link className="text-stone-700 dark:text-stone-300" />,
      description:
        "Developing secure blockchain solutions for various use-cases, employing Ethereum ERC-20 standard.",
    },
    {
      name: "3D Modeling",
      icon: <FileBox className="text-stone-700 dark:text-stone-300" />,
      description:
        "Constructing detailed 3D models and environments using Unity for gaming.",
    },
  ];

  return (
    <section
      id="skills"
      className="flex min-h-[100dvh] flex-col items-center justify-center"
    >
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="h-8 md:pt-0"></div>
        <div className="space-y-2 p-4 sm:p-0">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl/none">
            Technical Skills
          </h1>
          <p className="mx-auto max-w-fit sm:max-w-2xl sm:p-0 md:text-xl">
            The skills showcased here are the culmination of years of hands-on
            experience and continuous learning.
          </p>
        </div>
        <div className="mx-auto w-full max-w-full space-y-4">
          <div className="flex flex-col gap-4 p-4 sm:grid sm:grid-cols-3 sm:p-0">
            {skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-4"
                >
                  <div className="p-2">{skill.icon}</div>
                  <h2 className="text-xl font-bold ">{skill.name}</h2>
                  <p className="">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
