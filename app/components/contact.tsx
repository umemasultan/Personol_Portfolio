"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const contactCards = [
    {
      icon: FiMail,
      title: "Email",
      value: "umemasultan11@gmail.com",
      href: "mailto:umemasultan11@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+92 310 7627910",
      href: "https://wa.me/923107627910",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FiGithub,
      title: "GitHub",
      value: "@umemasultan",
      href: "https://github.com/umemasultan",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      value: "Umema Sultan",
      href: "https://www.linkedin.com/in/umema-sultan-5b6539305",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section id="contact" className="text-gray-700 body-font bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container px-5 mx-auto relative z-10">
        {/* Strong CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 py-2 text-sm font-semibold text-cyan-600">
              <motion.div
                className="w-2 h-2 bg-cyan-500 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available for Projects
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#224757] via-[#33697a] to-[#468099] text-transparent bg-clip-text"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Have a project in mind? Let's discuss how we can create exceptional digital experiences that drive results.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Contact Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full space-y-6"
          >
            {/* Map */}
            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.142157538!2d66.49600210977367!3d25.191740595358027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1760059274877!5m2!1sen!2s"
              />
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactCards.map((card, idx) => (
                <motion.a
                  key={idx}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 group cursor-pointer relative overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <card.icon className="text-white text-xl" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-[#224757]">{card.title}</h3>
                      <p className="text-sm text-gray-600 truncate">{card.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-0" />

              <h3 className="text-2xl font-bold text-[#224757] mb-6 relative z-10">Send a Message</h3>
              <form className="space-y-5 relative z-10">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
                ].map((field, idx) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-[#468099] focus:ring-2 focus:ring-[#468099]/20 text-base outline-none text-gray-700 py-3 px-4 transition-all"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-[#468099] focus:ring-2 focus:ring-[#468099]/20 text-base outline-none text-gray-700 py-3 px-4 resize-none transition-all"
                    placeholder="Tell me about your project..."
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(34,71,87,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#224757] to-[#468099] text-white font-bold py-4 px-6 rounded-lg shadow-lg relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#468099] to-[#224757]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiSend />
                    </motion.div>
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
