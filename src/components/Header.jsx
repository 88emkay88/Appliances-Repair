import { ChevronDown, Key } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = ["Appliance", "Plumbing", "Electronics", "AC & Furnace"];

  const handleSelect = (value) => {
    // Navigate to selected service
    const slug = value.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
    window.location.href = `/#${slug}`;
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="flex sticky top-0 z-50 p-10 text-gray-100 justify-between backdrop-blur-2xl bg-white/10">
        {/* Logo */}
        <div className="flex flex-col w-1/2 lg:w-1/6 items-center">
          <h1 className="text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-bold ">
            Appliance{" "}
            <span className="bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Repair
            </span>
          </h1>
          <ul className="flex text-gray-600 space-x-10 list-disc marker:text-blue-400 text-xs xl:text-sm">
            <li className="list-none">Quick</li>
            <li>Simple</li>
            <li>Stress free</li>
          </ul>
        </div>

        <nav className="hidden lg:flex space-x-8 items-center">
          <a className="hover:border-b-2 transition duration-500" href="#home">
            Home
          </a>
          <a className="hover:border-b-2 transition duration-500" href="#about">
            About Us
          </a>

          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-transparent text-white rounded"
            >
              Services
              <ChevronDown className="mt-1" size={18} />
            </button>

            {isOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white/10 backdrop-blur-md ring-1 ring-white/20 z-50">
                <ul className="py-1 text-sm text-white">
                  {options.map((option) => (
                    <li
                      key={option}
                      className="px-4 py2 hover:bg-white/20 cursor-pointer"
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a
            className="hover:border-b-2 transition duration-500"
            href="#review"
          >
            Review
          </a>

          <a
            className="hover:border-b-2 transition duration-500"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <div className="flex">
          <button className="bg-gradient-to-tr from-blue-800 to-blue-400 hover:from-blue-500 hover:to-blue-300 py-3 px-8 rounded-full font-bold text-blue-100 ">
            Call Me
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
