import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Aarti Sharma",
    feedback:
      "Outstanding legal service. Highly professional and approachable team. Got justice in my family dispute.",
  },
  {
    name: "Raj Malhotra",
    feedback:
      "Their dedication and expertise in corporate law helped my business grow confidently.",
  },
  {
    name: "Rahul Singh",
    feedback:
      "I was impressed by their expertise in corporate law. They handled my case efficiently and achieved a great outcome.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100 py-12">
      {/* Section Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-light-accent dark:text-yellow-400 text-lg sm:text-xl uppercase tracking-widest font-medium mb-2">
          Our Clients Say
        </p>
        <h2 className="text-light-accent dark:text-yellow-400 text-3xl sm:text-5xl font-bold">
          Testimonials
        </h2>
      </motion.div>

      {/* Testimonial Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-0">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.3, 0.8)}
          >
            <TestimonialCard index={index} {...testimonial} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WrappedTestimonials = SectionWrapper(Testimonials, "testimonials");
export default WrappedTestimonials;
