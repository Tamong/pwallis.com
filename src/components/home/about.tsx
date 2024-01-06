import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import profilePic from "../../../public/benji.png";

export default function About() {
  const techs = [
    "C, C++",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "React.JS",
    "Node.JS",
    "Next.JS",
    "Express.JS",
    "Auth.JS",
    "HTML, CSS",
    "Tailwind CSS",
    "Git, Vercel",
    "OSX, Unix",
  ];

  return (
    <section
      id="about"
      className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 md:flex-row"
    >
      <div className="h-16"></div>
      <div className="flex flex-col items-center">
        <Image
          className="w-64 rounded-lg"
          src={profilePic}
          alt="Benji"
          width={256}
          height={256}
        />
        <p className="text-xs">Benji, my dog.</p>
      </div>
      <div className="max-w-lg space-y-4 p-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl/none">
          About Me
        </h1>
        <p>
          Hello! <span className="text-accent">My name is Philip</span>, and I
          am a software engineer based in Dallas, Texas, USA. My interest in
          software engineering started back in high school when I first learned
          to code. Since then, I have been constantly learning new things,
          building projects, and working on a variety of projects.
        </p>
        <p>Here are a few technologies that I know:</p>
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {techs.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
