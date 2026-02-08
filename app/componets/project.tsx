"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      img: "/assets/work-1.png",
      desc: "A fully responsive portfolio showcasing my skills, built with Next.js, Tailwind CSS, and Framer Motion animations.",
      link: "#",
    },
    {
      id: 2,
      title: "AI Automation Dashboard",
      img: "/assets/work-2.png",
      desc: "An interactive dashboard integrating Python-based AI agents and OpenAI APIs for task automation and analytics.",
      link: "#",
    },
    {
      id: 3,
      title: "E-commerce Store",
      img: "/assets/work-3.png",
      desc: "A modern e-commerce application with product filtering, authentication, and Firebase backend integration.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="text-gray-700 body-font bg-[#f8fafc]">
      <div className="container px-5 py-20 mx-auto">
        {/* --- Section Title --- */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1
            className="sm:text-4xl text-2xl font-extrabold mb-4 
                       bg-gradient-to-r from-[#224757] via-[#33697a] to-[#468099] 
                       text-transparent bg-clip-text 
                       transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(70,128,153,0.5)]"
          >
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            A selection of projects that reflect my expertise in modern web design, automation, and full-stack development.
          </p>
        </div>

        {/* --- Project Cards --- */}
        <div className="flex flex-wrap -m-4">
          {projects.map((p) => (
            <div key={p.id} className="p-4 md:w-1/3 w-full">
              <div
                className="h-full rounded-xl overflow-hidden shadow-md hover:shadow-2xl 
                           hover:scale-[1.03] transition-all duration-500 bg-white border border-gray-100"
              >
                {/* Image */}
                <div className="relative group">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={450}
                    className="w-full h-52 object-cover object-center transition-all duration-500 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#224757]/60 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-semibold text-[#468099] mb-1 uppercase">
                    Featured Project
                  </h2>
                  <h1 className="title-font text-xl font-bold text-[#224757] mb-2">{p.title}</h1>
                  <p className="leading-relaxed mb-4 text-gray-600 text-sm">{p.desc}</p>

                  {/* Button */}
                  <Link
                    href={p.link}
                    target="_blank"
                    className="inline-flex items-center text-[#224757] font-semibold 
                               hover:text-[#468099] transition-all duration-300"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
