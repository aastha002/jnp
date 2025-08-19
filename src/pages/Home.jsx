import React from "react";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg overflow-hidden transition-all duration-300">
      {/* Optional Dark Gradient Overlay (only for dark mode) */}
      <div className="absolute inset-0 dark:bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0" />

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div variants={textVariant()}>
          <p className="text-light-accent dark:text-dark-accent text-lg sm:text-xl font-medium uppercase tracking-widest mb-2">
            Welcome to
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-accent dark:from-dark-accent to-red-600 dark:to-yellow-400 leading-tight">
            J & P Legal Solutions LLP
          </h1>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-6 text-light-text dark:text-dark-text text-base sm:text-lg leading-relaxed"
        >
          At J&P Legal Solutions LLP, we are committed to delivering practical,
          client-focused legal counsel with integrity and professionalism. Our
          team ensures that navigating complex legal matters becomes simpler, so
          you can focus on what matters most.
        </motion.p>

        <motion.a
          href="#contact"
          variants={fadeIn("", "", 0.4, 1)}
          className="inline-block mt-8 px-8 py-3 bg-light-accent dark:bg-dark-accent text-white dark:text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          Schedule a Consultation
        </motion.a>
      </div>
    </section>
  );
};

const HomeSection = SectionWrapper(Home, "home");
export default HomeSection;
