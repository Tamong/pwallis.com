import NavBar from "@/components/nav-bar";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";
import Contact from "@/components/home/contact";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto flex max-w-6xl flex-col">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
