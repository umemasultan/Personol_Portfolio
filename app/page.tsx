import Image from "next/image";
import Hero from "./componets/hero";
import About from "./componets/about";
import Skills from "./componets/skill";
import Contact from "./componets/contact";
import Project from "./componets/project";

export default function Home() {
  return (
    <div>

      
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* ✅ Skills Section (fixed id) */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Project />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
