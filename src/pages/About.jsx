import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { lawyers } from "../constants";
import LawyerCard from "../components/LawyerCard";

const About = () => {
  return (
    <section className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text py-10 transition-all duration-300">
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-light-accent dark:text-dark-accent text-lg sm:text-xl uppercase tracking-widest font-medium mb-2">
          Who We Are
        </p>
        <h2 className="text-light-accent dark:text-dark-accent text-3xl sm:text-5xl font-bold">
          Our Lawyers
        </h2>
      </motion.div>

      {/* Flex layout with responsive gaps */}
      <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-10 px-4">
        {lawyers.map((lawyer, index) => (
          <div key={lawyer.name} className="w-72">
            <LawyerCard index={index} {...lawyer} />
          </div>
        ))}
      </div>
    </section>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
