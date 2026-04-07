"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0d1b2a] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-3">
          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: FaGithub, href: "https://github.com/umemasultan", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/umema-sultan-5b6539305", label: "LinkedIn" },
              { icon: FaWhatsapp, href: "https://wa.me/923107627910", label: "WhatsApp" },
              { icon: FiMail, href: "mailto:umemasultan11@gmail.com", label: "Email" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-2"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400 text-center md:text-left">
            © 2026 <span className="text-cyan-400 font-semibold">Umema Sultan</span>. All rights reserved.
          </p>

          {/* Scroll to Top */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
