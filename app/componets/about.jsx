import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="text-gray-700 body-font bg-cd-neutral">
      <div className="container mx-auto flex px-6 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
          <Image src="/assets/main.jpg"
            alt="Umema Sultan"
            width={420}
            height={420}
            className="object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1
            className="sm:text-4xl text-2xl font-extrabold mb-4 
             bg-gradient-to-r from-[#224757] via-[#33697a] to-[#468099] 
             text-transparent bg-clip-text 
             transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(70,128,153,0.5)]"
          >
            About Me
          </h1>


          <p className="leading-relaxed text-lg text-gray-700 mb-6 max-w-xl text-justify">
            I’m <span className="font-semibold text-[#468099]">Umema Sultan</span> — a passionate
            <span className="font-medium text-[#224757]"> Full-Stack Developer</span> who loves turning ideas into real, functional, and user-friendly digital experiences.
            I specialize in building responsive websites using
            <span className="text-[#468099] font-semibold"> Next.js</span>,
            <span className="text-[#468099] font-semibold"> React</span>, and
            <span className="text-[#468099] font-semibold"> Tailwind CSS</span>,
            combined with backend logic in
            <span className="text-[#468099] font-semibold"> Python</span>.

            My focus is on creating clean, modern UIs and integrating automation with
            <span className="italic text-[#224757]"> Agentic AI</span> for intelligent, adaptive systems.
            I enjoy continuous learning, exploring new technologies, and solving real-world problems through creative coding.
            My goal is to grow into a professional developer capable of building efficient, smart, and scalable digital solutions.
          </p>
          <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button
              className="inline-flex items-center text-white 
     bg-gradient-to-r from-[#1c4b61] via-[#224757] to-[#468099]
     py-2 px-6 rounded-lg text-lg font-semibold 
     shadow-md transition-all duration-300 
     hover:brightness-110 hover:shadow-[0_0_15px_rgba(70,128,153,0.6)] 
     focus:outline-none hover:scale-105"
            >
              View CV
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;
