import { Github, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[100dvh] flex-col items-center justify-center gap-4"
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl/none">
        Get in touch
      </h2>

      <Button variant="link">
        <a
          aria-label="Contact email: contact@pwallis.com"
          href="mailto:contact@pwallis.com"
          className="flex items-center text-center text-xl font-semibold text-accent"
        >
          contact@pwallis.com
        </a>
      </Button>
      <div className="flex gap-4">
        <a
          aria-label="linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/philip-wallis-b437a915a/"
        >
          <Linkedin className="text-stone-700 dark:text-stone-300" />
        </a>
        <a aria-label="github" target="_blank" href="https://github.com/tamong">
          <Github className="text-stone-700 dark:text-stone-300" />
        </a>
        <a aria-label="youtube" target="_blank" href="https://youtube.com/@ca9">
          <Youtube className="text-stone-700 dark:text-stone-300" />
        </a>
      </div>
    </section>
  );
}
