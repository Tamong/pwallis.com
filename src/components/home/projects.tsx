import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import projectData from "@/components/home/projects.json"; // Import JSON data

import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-[100dvh] flex-col items-center justify-center"
    >
      <h2 className="p-8 text-center text-4xl font-semibold">Projects</h2>
      <div className="flex flex-col gap-4 md:flex-row">
        {projectData.map((project, index) => (
          <Card key={index} className="relative h-96 w-[23rem] border">
            <CardHeader>
              <CardTitle className="flex flex-col">
                {project.title}
                <div className="flex gap-2 pt-2">
                  <Badge>{project.badge.type}</Badge>
                  <Badge>{project.badge.status}</Badge>
                </div>
              </CardTitle>
              <CardDescription className="h-8">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                alt={project.title}
                src={project.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </CardContent>
            <CardFooter className="absolute bottom-0 flex gap-4">
              {project.links.map((link, index) => (
                <Link key={index} target="_blank" href={link.url}>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-sm font-semibold"
                  >
                    {link.title}
                  </Button>
                </Link>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
