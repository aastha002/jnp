import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PracticeAreaCard = ({ index, title, description, icon: Icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Tilt
        className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 w-60 sm:w-72 md:w-80 shadow-lg hover:scale-[1.03] transition-transform duration-300"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={1200}
      >
        {/* Icon */}
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full border-4 border-[#B8860B] mb-4 bg-gray-50 dark:bg-gray-800">
          <Icon className="w-10 h-10 text-[#B8860B]" />
        </div>

        {/* Title */}
        <h3 className="text-[#B8860B] text-center text-lg font-semibold mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-black dark:text-white text-sm text-center leading-snug">
          {description}
        </p>
      </Tilt>
    </motion.div>
  );
};

export default PracticeAreaCard;
