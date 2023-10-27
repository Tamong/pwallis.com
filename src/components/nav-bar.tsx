import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed z-50 mx-auto w-full max-w-6xl bg-background px-4 py-2 ">
      <div className="flex items-center justify-between">
        {/* Left */}

        <a href="#">
          <h1 className="text-2xl font-semibold tracking-tight transition-all duration-100 hover:text-accent">
            Philip Wallis
          </h1>
        </a>

        {/* Right */}
        {/* Web */}
        <div className="hidden items-center md:flex">
          <Button variant="link" asChild>
            <a href="#about">
              <h2 className="text-lg font-medium transition-all duration-100 hover:text-accent">
                About
              </h2>
            </a>
          </Button>
          <Button variant="link" asChild>
            <a href="#skills">
              <h2 className="text-lg font-medium transition-all duration-100 hover:text-accent">
                Skills
              </h2>
            </a>
          </Button>
          <Button variant="link" asChild>
            <a href="#projects">
              <h2 className="text-lg font-medium transition-all duration-100 hover:text-accent">
                Projects
              </h2>
            </a>
          </Button>
          <Button variant="link" asChild>
            <a href="#contact">
              <h2 className="text-lg font-medium transition-all duration-100 hover:text-accent">
                Contact
              </h2>
            </a>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button aria-label="open-menu" className="relative rounded-full">
                <Menu className="h-5 w-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mt-4 flex w-[100vw] flex-col items-center justify-center"
              forceMount
            >
              <Button
                variant="link"
                size={"sm"}
                className="flex w-full justify-center"
                asChild
              >
                <a href="#about">
                  <h2 className=" text-lg font-medium">About</h2>
                </a>
              </Button>

              <Button
                variant="link"
                size={"sm"}
                className="flex w-full justify-center"
                asChild
              >
                <a href="#skills">
                  <h2 className=" text-lg font-medium">Skills</h2>
                </a>
              </Button>
              <Button
                variant="link"
                className="flex w-full justify-center"
                asChild
              >
                <a href="#projects">
                  <h2 className=" text-lg font-medium">Projects</h2>
                </a>
              </Button>
              <Button
                variant="link"
                className="flex w-full justify-center"
                asChild
              >
                <a href="#contact">
                  <h2 className=" text-lg font-medium">Contact</h2>
                </a>
              </Button>

              <ModeToggle />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
