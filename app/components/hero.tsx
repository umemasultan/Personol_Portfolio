"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Generate particles only on client to avoid hydration mismatch
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        yOffset: Math.random() * -500,
      }))
    );
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden text-white bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#2a4a6a] min-h-screen"
    >
      {/* Animated background elements with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(70,128,153,0.15),transparent_50%)]"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,71,87,0.2),transparent_50%)]"
      />

      {/* Floating particles - only render on client */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, particle.yOffset],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        style={{ opacity }}
        className="container mx-auto relative z-10 min-h-screen flex items-center px-6 md:px-12 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left space-y-8"
        >
          {/* Strong headline with staggered animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {["U", "m", "e", "m", "a", " ", "S", "u", "l", "t", "a", "n"].map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block bg-gradient-to-r from-white via-blue-100 to-cyan-200 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Professional tagline with animated gradient */}
            <motion.div
              className="text-2xl sm:text-3xl font-bold min-h-[80px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
                className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text"
              >
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "React & Next.js Expert",
                      "Building Scalable Applications",
                      "AI-Powered Solutions",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    deleteSpeed: 40,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-300 max-w-xl text-base sm:text-lg leading-relaxed"
          >
            Engineering <span className="text-cyan-300 font-semibold">enterprise-grade React applications</span> and <span className="text-cyan-300 font-semibold">intelligent AI systems</span> that drive measurable business impact. Transforming complex challenges into elegant, scalable solutions.
          </motion.p>

          {/* CTA Buttons with advanced hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Link href="#projects">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(34,211,238,0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(34,211,238,0.3)",
                    "0 0 30px rgba(34,211,238,0.5)",
                    "0 0 20px rgba(34,211,238,0.3)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-xl overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View Projects</span>
              </motion.button>
            </Link>

            <Link href="#contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(34,211,238,1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-cyan-400 text-cyan-300 font-bold py-4 px-8 rounded-full hover:bg-white/5 transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">Contact Me</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image Section with 3D effect */}
        <div className="md:w-1/2 hidden md:flex justify-center items-center mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
            className="relative perspective-1000"
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              whileHover={{
                rotateY: 10,
                rotateX: -10,
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/assets/main.jpg"
                alt="Umema Sultan - Frontend Developer"
                width={420}
                height={420}
                priority
                className="relative z-10 rounded-full border-4 border-cyan-400/50 shadow-2xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
