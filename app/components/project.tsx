"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Physical AI Humanoid Robotics Textbook",
      img: "/assets/work-1.png",
      desc: "Interactive educational platform for humanoid robotics and AI integration with comprehensive learning materials and real-world applications.",
      tech: ["Next.js", "React", "AI Integration", "Educational Tech"],
      liveLink: "https://physicalairumanoidroboticstextbook.vercel.app/",
      githubLink: null,
    },
    {
      id: 2,
      title: "Smart Todo Manager",
      img: "/assets/work-2.png",
      desc: "Intelligent task management application with advanced features for productivity optimization and seamless workflow management.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "State Management"],
      liveLink: "https://phase4-smart-todo-manager.vercel.app/",
      githubLink: null,
    },
    {
      id: 3,
      title: "Personal Portfolio",
      img: "/assets/work-3.png",
      desc: "Modern, responsive portfolio showcasing professional work with smooth animations and optimized performance.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveLink: null,
      githubLink: "https://github.com/umemasultan/Personol_Portfolio",
    },
  ];

  return (
    <section id="projects" className="text-gray-700 body-font bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container px-5 mx-auto relative z-10">
        {/* Section Title */}
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Real-world applications showcasing expertise in modern web development, AI integration, and scalable architecture.
          </motion.p>
        </motion.div>

        {/* Project Cards with 3D effect */}
        <div className="flex flex-wrap -m-4">
          {projects.map((p, index) => (
            <ProjectCard key={p.id} project={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// 3D Tilt Card Component
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="p-4 md:w-1/3 w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 group perspective-1000"
      >
        {/* Image with zoom effect */}
        <div className="relative overflow-hidden h-56">
          <motion.div
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Animated overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#224757]/90 via-[#224757]/50 to-transparent flex items-end justify-center pb-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="flex gap-3"
            >
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="bg-white/90 backdrop-blur-sm text-[#224757] font-semibold py-2 px-4 rounded-lg hover:bg-white transition-all flex items-center gap-2"
                >
                  <FiExternalLink /> Live
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="bg-white/90 backdrop-blur-sm text-[#224757] font-semibold py-2 px-4 rounded-lg hover:bg-white transition-all flex items-center gap-2"
                >
                  <FiGithub /> Code
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Content with 3D transform */}
        <motion.div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="p-6 space-y-4"
        >
          <motion.h3
            className="text-2xl font-bold text-[#224757] group-hover:text-[#468099] transition-colors duration-300"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <p className="leading-relaxed text-gray-600 text-sm">{project.desc}</p>

          {/* Tech Stack Badges with stagger animation */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, idx: number) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#224757]/10 to-[#468099]/10 text-[#224757] rounded-full border border-[#468099]/20 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                className="flex-1"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34,71,87,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#224757] to-[#468099] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300"
                >
                  <FiExternalLink className="text-lg" />
                  Live Demo
                </motion.button>
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex-1"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#224757",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#224757] text-[#224757] font-semibold py-2.5 px-4 rounded-lg transition-all duration-300"
                >
                  <FiGithub className="text-lg" />
                  GitHub
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
