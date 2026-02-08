"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-white bg-gradient-to-r from-[#081B33] via-[#003F7F] to-[#00BFE8] animate-gradient"
    >
      {/* Gradient animation overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,191,232,0.25),transparent_70%)]"></div>

      <div className="container mx-auto relative z-10 min-h-screen flex items-center px-6 md:px-12">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            I'm <br />
            <span className="text-gradient">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Python Developer",
                    "Agentic AI Developer",
                    "Intelligent System Creator",
                    "Automation Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </h1>

          <p className="text-cd-neutral max-w-lg text-sm sm:text-base leading-relaxed">
            I build modern, responsive interfaces using Next.js and React and
            combine them with Python-powered automation and Agentic AI to
            deliver practical, scalable solutions.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-cd-cyan hover:bg-white/10 text-cd-navy font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
              >
                Contact Me
              </motion.button>
            </Link>

            <a
              href="/assets/cv.pdf"
              download
              className="inline-flex items-center border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="md:w-1/2 hidden md:flex justify-center mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute inset-0 blur-3xl opacity-40 rounded-full" />
            <Image
              src="/assets/main.jpg"
              alt="Umema"
              width={380}
              height={380}
              className="relative z-10 rounded-full border-4 border-white/30 shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
