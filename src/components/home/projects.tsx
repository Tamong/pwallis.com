"use client";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="projects"
      className="flex min-h-[100dvh] flex-col items-center justify-center"
    >
      <h2 className="p-8 text-3xl font-bold tracking-tighter sm:text-5xl/none">
        Projects
      </h2>
      <Carousel className="w-full max-w-md" setApi={setApi}>
        <CarouselContent>
          {projectData.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card key={index} className="relative border">
                  <CardHeader>
                    <CardTitle className="flex flex-col text-accent">
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
                  <CardFooter className="flex gap-4">
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </section>
  );
}
