import {
  AreaChart,
  BrainCircuit,
  Database,
  FolderGit2,
  Microscope,
  MonitorSmartphone,
  Link,
  UploadCloud,
  BookText,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "Web Development",
      icon: <MonitorSmartphone />,
      description:
        "Crafting responsive, user-friendly websites using TypeScript, Next.js, and TailwindCSS.",
    },
    {
      name: "Data Analysis & Visualization",
      icon: <AreaChart />,
      description:
        "Transforming raw data into actionable insights using Python Pandas and Seaborn libraries.",
    },
    {
      name: "Machine Learning",
      icon: <BrainCircuit />,
      description:
        "Leveraging machine learning algorithms for predictive analytics, utilizing TensorFlow and Scikit-Learn.",
    },
    {
      name: "Artificial Intelligence",
      icon: <Microscope />,
      description:
        "Incorporating advanced algorithms for enhanced decision-making and automation.",
    },
    {
      name: "Database Management",
      icon: <Database />,
      description:
        "Designing and managing robust databases with SQL and NoSQL technologies",
    },
    {
      name: "Version Control",
      icon: <FolderGit2 />,
      description:
        "Collaborating through use of version control systems like Git for code management.",
    },
    {
      name: "Cloud Computing",
      icon: <UploadCloud />,
      description:
        "Deploying scalable applications on cloud platforms like AWS, Vercel, and PlanetScale.",
    },
    {
      name: "Blockchain",
      icon: <Link />,
      description:
        "Developing secure blockchain solutions for various use-cases, employing Ethereum ERC-20 standard.",
    },
    {
      name: "Natural Language Processing",
      icon: <BookText />,
      description:
        "Utilizing Python NLTK and BeautifulSoup libraries for text & sentiment analysis.",
    },
  ];

  return (
    <section
      id="skills"
      className="flex min-h-[100dvh] flex-col items-center justify-center"
    >
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="h-16"></div>
        <div className="space-y-2 p-4 sm:p-0">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl/none">
            Technical Skills
          </h1>
          <p className="mx-auto max-w-fit text-accent sm:max-w-2xl sm:p-0 md:text-xl">
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
                  <div className="p-2 text-accent">{skill.icon}</div>
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
