"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiOpenai, SiGit, SiVercel } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend Development",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React & Next.js", level: 95, icon: <SiNextdotjs className="text-black text-2xl" /> },
      { name: "TypeScript", level: 90, icon: <SiTypescript className="text-[#3178C6] text-2xl" /> },
      { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-[#06B6D4] text-2xl" /> },
      { name: "Framer Motion", level: 85, icon: <SiFramer className="text-[#0055FF] text-2xl" /> },
    ],
  },
  {
    category: "Backend & Tools",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Python", level: 75, icon: <FaPython className="text-[#3776AB] text-2xl" /> },
      { name: "Git & GitHub", level: 88, icon: <SiGit className="text-[#F05032] text-2xl" /> },
      { name: "VS Code", level: 92, icon: <TbBrandVscode className="text-[#007ACC] text-2xl" /> },
      { name: "Vercel", level: 90, icon: <SiVercel className="text-black text-2xl" /> },
    ],
  },
  {
    category: "AI & Innovation",
    color: "from-green-500 to-teal-600",
    skills: [
      { name: "Agentic AI", level: 80, icon: <SiOpenai className="text-[#00A67E] text-2xl" /> },
      { name: "OpenAI Integration", level: 78, icon: <SiOpenai className="text-[#00A67E] text-2xl" /> },
      { name: "Robotics Concepts", level: 70, icon: <FaReact className="text-[#61DAFB] text-2xl" /> },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="text-gray-700 body-font bg-white py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-5 mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-center w-full mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#224757] via-[#33697a] to-[#468099] text-transparent bg-clip-text"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Specialized in modern frontend architecture, performance optimization, and cutting-edge AI integration.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Skill Category Component
const SkillCategory = ({ category, index }: { category: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.h3
        className="text-2xl font-bold text-[#224757] mb-8 text-center md:text-left relative inline-block"
        initial={{ x: -20 }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        {category.category}
        <motion.div
          className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${category.color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
        />
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.skills.map((skill: any, i: number) => (
          <SkillCard key={i} skill={skill} index={i} categoryColor={category.color} />
        ))}
      </div>
    </motion.div>
  );
};

// Animated Skill Card Component
const SkillCard = ({ skill, index, categoryColor }: { skill: any; index: number; categoryColor: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 relative overflow-hidden group cursor-pointer"
    >
      {/* Animated background gradient on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-sm"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {skill.icon}
          </motion.div>
          <h4 className="text-[#224757] text-lg font-bold">{skill.name}</h4>
        </div>

        {/* Animated Progress Bar */}
        <div className="relative w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: `${skill.level}%`, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className={`absolute h-full rounded-full bg-gradient-to-r ${categoryColor} relative overflow-hidden`}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.1 + 1,
              }}
            />
          </motion.div>
        </div>

        <motion.p
          className="text-right text-sm text-gray-500 mt-2 font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {skill.level}%
        </motion.p>
      </div>

      {/* Floating particles on hover */}
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          y: [0, -20, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default Skill;
