import { Facebook, Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black/30 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex flex-col w-2/6 items-center">
            <h1 className="text-3xl font-bold ">
              Appliance{" "}
              <span className="bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Repair
              </span>
            </h1>
            <ul className="flex text-gray-200 space-x-10 list-disc marker:text-blue-400 text-sm">
              <li className="list-none">Quick</li>
              <li>Simple</li>
              <li>Stress free</li>
            </ul>
          </div>

          {/* Navigation */}
          <nav className="space-x-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Github />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Linkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
