import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "/src/assets/images/logo.jpeg"; // <-- make sure path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Start with dark mode

  const navItems = [
    "Home",
    "About",
    "Practice Areas",
    "Testimonials",
    "Contact",
  ];

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 shadow-lg ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`hover:text-[#B8860B] transition-colors duration-300 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Icons: Theme Toggle + Mobile Menu */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="focus:outline-none"
        >
          {darkMode ? (
            <FaSun className="text-xl text-[#B8860B]" />
          ) : (
            <FaMoon className="text-xl text-[#B8860B]" />
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <HiX className="text-2xl text-[#B8860B]" />
            ) : (
              <HiMenuAlt3 className="text-2xl text-[#B8860B]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-16 right-4 w-48 border border-[#B8860B] rounded-lg shadow-lg p-4 space-y-3 md:hidden transition-all duration-300 ${
            darkMode ? "bg-[#111] text-white" : "bg-gray-100 text-black"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setIsOpen(false)}
              className="block text-sm hover:text-[#B8860B] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
