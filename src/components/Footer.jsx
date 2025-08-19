import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-6 px-4 border-t border-light-accent dark:border-dark-accent">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left side: Icons */}
        <div className="flex gap-6 items-center">
          <a
            href="mailto:rashmijadvocate@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-accent dark:text-dark-accent hover:text-black dark:hover:text-white transition"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="tel:+919718094878"
            aria-label="Phone"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-accent dark:text-dark-accent hover:text-black dark:hover:text-white transition"
          >
            <FaPhoneAlt size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/j-p-legal-solutions-llp/posts/?feedView=all"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-accent dark:text-dark-accent hover:text-black dark:hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Right side: Copyright */}
        <p className="text-gray-700 dark:text-gray-400 text-sm text-center sm:text-right">
          &copy; 2025{" "}
          <span className="text-light-accent dark:text-dark-accent font-semibold">
            J&P Legal Solutions LLP
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
