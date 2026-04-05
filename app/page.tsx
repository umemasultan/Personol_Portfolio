import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skill";
import Contact from "./components/contact";
import Project from "./components/project";

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
