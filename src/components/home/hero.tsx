import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className=" flex min-h-[100dvh] flex-col justify-center gap-4 p-4 sm:p-20"
    >
      <p className="text-md font-semibold">Hi, my name is</p>
      <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl/none">
        Philip Wallis
      </h1>
      <h2 className="text-lg font-semibold text-accent sm:text-xl">
        Software Engineer
      </h2>
      <p className="text-md max-w-lg">
        A student at UTD, graduating Winter of 2023. <br />
        Currently exploring job opportunities.
      </p>
      <Button
        disabled={true}
        variant="outline"
        className="flex w-28 gap-2"
        asChild
      >
        <Link target="_blank" href="/Resume.pdf" prefetch={false}>
          <p>Resume</p>
          <MoveUpRight className="h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}
