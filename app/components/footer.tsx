"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-50 to-gray-100 text-gray-800 py-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {[
            { icon: FaGithub, href: "https://github.com/umemasultan", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/umema-sultan-5b6539305", label: "LinkedIn" },
            { icon: FaWhatsapp, href: "https://wa.me/923107627910", label: "WhatsApp" },
            { icon: FiMail, href: "mailto:umemasultan11@gmail.com", label: "Email" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#224757] transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-600">
          © 2026 <span className="text-[#224757] font-semibold">Umema Sultan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
