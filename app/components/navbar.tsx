"use client";
import Image from "next/image";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0 cursor-pointer">
       

            <span
              className="ml-3 text-2xl font-extrabold bg-gradient-to-r 
              from-[#1c4b61] via-[#224757] to-[#468099] 
              text-transparent bg-clip-text 
              transition-all duration-300 
              hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(70,128,153,0.7)]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Umema Sultan
            </span>
          </a>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-6">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className="relative text-gray-700 font-medium transition-all duration-300
                 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
                 hover:from-[#1c4b61] hover:via-[#224757] hover:to-[#468099]
                 hover:drop-shadow-[0_0_8px_rgba(70,128,153,0.55)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="/assets/cv.pdf" download className="flex items-center">
            <button
              className="inline-flex items-center bg-gradient-to-r 
              from-[#1c4b61] via-[#224757] to-[#468099]
              text-white font-semibold py-2 px-5 rounded-full text-base
              shadow-md hover:brightness-110 hover:shadow-[0_0_15px_rgba(70,128,153,0.6)]
              transition-all duration-300 hover:scale-105 focus:outline-none"
            >
              Download CV
              <FaCloudDownloadAlt className="text-lg ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
