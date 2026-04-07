"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" className="text-gray-700 body-font bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto flex px-6 md:flex-row flex-col items-center gap-12 relative z-10">
        {/* Image Section with parallax */}
        <motion.div
          style={{ scale, opacity }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center"
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, #224757, #468099)",
                  "linear-gradient(90deg, #468099, #224757)",
                  "linear-gradient(135deg, #224757, #468099)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Floating particles around image */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            <motion.div
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/assets/main.jpg"
                alt="Umema Sultan - Frontend Developer"
                width={420}
                height={420}
                className="relative object-cover object-center rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content Section with staggered animations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#224757] via-[#33697a] to-[#468099] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed max-w-2xl">
            {[
              <>
                I’m <span className="font-bold text-[#224757]">Umema Sultan</span>, a{" "}
                <span className="font-semibold text-[#468099]">Frontend Developer</span> architecting{" "}
                <span className="font-semibold">enterprise-scale React applications</span> that power modern digital experiences.
              </>,
              <>
                Specializing in <span className="font-semibold text-[#224757]">performance-critical systems</span>,{" "}
                <span className="font-semibold text-[#224757]">scalable architecture</span>, and{" "}
                <span className="font-semibold text-[#224757]">production-grade code</span>, I transform complex technical challenges into elegant, maintainable solutions that drive measurable business outcomes.
              </>,
              <>
                Pioneering the integration of{" "}
                <span className="font-semibold text-[#468099]">Agentic AI systems</span> and{" "}
                <span className="font-semibold text-[#468099]">autonomous robotics</span> into web platforms, building the next generation of intelligent applications that redefine what’s possible.
              </>,
              <span className="text-gray-600 italic">
                Let’s engineer breakthrough digital products that set new industry standards.
              </span>,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.a
            href="/assets/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34,71,87,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center text-white bg-gradient-to-r from-[#224757] to-[#468099] py-3 px-8 rounded-lg text-lg font-bold shadow-lg overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#468099] to-[#224757]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
