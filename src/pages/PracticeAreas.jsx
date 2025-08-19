import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { practiceAreas } from "../constants";
import PracticeAreaCard from "../components/PracticeAreaCard";

const PracticeAreas = () => {
  return (
    <section className="bg-white text-black dark:bg-[#0a0a0a] dark:text-gray-100 transition-all duration-300 py-10">
      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-light-accent dark:text-yellow-400 text-lg sm:text-xl uppercase tracking-widest font-medium mb-2">
          What We Do
        </p>
        <h2 className="text-light-accent dark:text-yellow-400 text-3xl sm:text-5xl font-bold">
          Practice Areas
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-0">
        {practiceAreas.map((area, index) => (
          <motion.div
            key={area.title}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
          >
            <PracticeAreaCard index={index} {...area} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WrappedPracticeAreas = SectionWrapper(PracticeAreas, "practice-areas");
export default WrappedPracticeAreas;
