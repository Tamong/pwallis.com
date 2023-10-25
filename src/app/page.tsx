import NavBar from "@/components/nav-bar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="flex h-[100dvh] flex-col">
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
