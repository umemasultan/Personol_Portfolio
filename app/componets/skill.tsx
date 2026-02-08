import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiOpenai, SiTailwindcss, SiGit } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    level: "100%",
    description: "Strong understanding of semantic HTML and responsive structures.",
    icon: <FaHtml5 className="text-[#E44D26] text-2xl" />,
  },
  {
    name: "CSS / Tailwind CSS",
    level: "95%",
    description: "Expert in modern styling using Tailwind, Flexbox, and Grid.",
    icon: <FaCss3Alt className="text-[#1572B6] text-2xl" />,
  },
  {
    name: "JavaScript / TypeScript",
    level: "85%",
    description: "Hands-on experience with ES6+, DOM manipulation, and API integration.",
    icon: <FaJsSquare className="text-[#F7DF1E] text-2xl" />,
  },
  {
    name: "React.js / Next.js",
    level: "90%",
    description: "Building dynamic and high-performance UIs with reusable components.",
    icon: <SiNextdotjs className="text-black text-2xl" />,
  },
  {
    name: "Python",
    level: "80%",
    description: "Using Python for automation, AI models, and backend scripts.",
    icon: <FaPython className="text-[#3776AB] text-2xl" />,
  },
  {
    name: "Agentic AI / OpenAI",
    level: "70%",
    description: "Creating intelligent and adaptive systems with API-powered automation.",
    icon: <SiOpenai className="text-[#00A67E] text-2xl" />,
  },
 
];

const Skill = () => {
  return (
    <section id="skills" className="text-gray-700 body-font bg-white">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1
            className="sm:text-4xl text-2xl font-extrabold mb-4 
             bg-gradient-to-r from-[#224757] via-[#33697a] to-[#468099] 
             text-transparent bg-clip-text 
             transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(70,128,153,0.5)]"
          >
            Skills & Experience
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            I’ve developed a solid foundation in both frontend and backend technologies — with
            a focus on clean design, efficient code, and AI-powered automation.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {skills.map((skill, i) => (
            <div key={i} className="p-4 md:w-1/3 w-full">
              <div className="flex rounded-lg h-full bg-[#f9fafb] p-6 flex-col shadow-sm 
                              hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full 
                                  bg-white shadow text-white flex-shrink-0">
                    {skill.icon}
                  </div>
                  <h2 className="text-[#224757] text-lg title-font font-bold">{skill.name}</h2>
                </div>
                <p className="leading-relaxed text-sm text-gray-600 mb-3">{skill.description}</p>
                <div className="mt-auto">
                  <div className="relative w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      style={{
                        width: skill.level,
                        background:
                          "linear-gradient(90deg, #224757 0%, #33697a 50%, #468099 100%)",
                      }}
                      className="absolute h-full rounded-full"
                    ></div>
                  </div>
                  <p className="text-right text-xs text-gray-500 mt-1">Proficiency: {skill.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
