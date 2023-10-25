import NavBar from "@/components/nav-bar";
import About from "@/components/home/about";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";
import Contact from "@/components/home/contact";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
