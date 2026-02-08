import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#224757] text-gray-300 body-font">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#468099] font-semibold">Umema Sultan</span> — All Rights Reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
          <a href="https://github.com" target="_blank" className="text-white hover:text-[#00BFE8] transition-all">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-white hover:text-[#00BFE8] transition-all">
            <FaLinkedin size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-white hover:text-[#00BFE8] transition-all">
            <FaInstagram size={18} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
