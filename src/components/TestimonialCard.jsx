import React from "react";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const TestimonialCard = ({ index, name, feedback }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
  >
    <p className="text-gray-700 dark:text-gray-100 italic text-sm mb-4 leading-relaxed">
      “{feedback}”
    </p>
    <h4 className="text-[#B8860B] dark:text-yellow-400 font-semibold text-sm text-right">
      – {name}
    </h4>
  </motion.div>
);

export default TestimonialCard;
