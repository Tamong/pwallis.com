"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const ToggleTheme = () => {
    const html = document.querySelector("html")!;
    if (html.classList.contains("dark")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Button
      aria-label="toggle-theme"
      variant="link"
      className="flex w-full justify-center"
      onClick={() => ToggleTheme()}
    >
      <Sun className="h-5 w-5 -rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
