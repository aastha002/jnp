import React, { useState } from "react";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const LawyerCard = ({ index, name, title, image, bio, darkMode }) => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Color classes based on mode
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const cardTextColor = darkMode ? "text-gray-200" : "text-black";
  const titleColor = darkMode ? "text-gray-300" : "text-red-700";
  const secondaryTextColor = darkMode ? "text-gray-400" : "text-red-500";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-300";
  const overlayBg = "bg-black bg-opacity-60";

  return (
    <>
      {/* Card */}
      <motion.div
        variants={fadeIn("up", "spring", index * 0.3, 0.75)}
        whileHover={{ scale: 1.05 }}
        className={`${bgColor} w-full h-full rounded-lg overflow-hidden shadow-md transition-all duration-300 border ${borderColor} cursor-pointer`}
        onClick={() => setShowModal(true)}
      >
        {/* Image wrapper with white background */}
        <div className="flex items-center justify-center bg-white w-full h-48">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 object-contain rounded-full"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className={`text-lg font-semibold mb-1 ${titleColor}`}>{name}</h3>
          <p className={`italic text-sm ${secondaryTextColor} mb-2`}>{title}</p>

          <p className={`text-sm ${cardTextColor} leading-snug`}>
            {expanded ? bio : `${bio.slice(0, 100)}...`}
            <button
              className={`${titleColor} ml-1 text-xs underline`}
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 ${overlayBg} flex items-center justify-center z-50 px-4`}
          onClick={() => setShowModal(false)}
        >
          <div
            className={`${bgColor} max-w-md w-full rounded-lg p-6 border ${borderColor} relative`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-400 text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Image with white background */}
            <div className="flex items-center justify-center bg-white w-full h-52 rounded">
              <img
                src={image}
                alt={name}
                className="w-40 h-40 object-contain rounded-full"
              />
            </div>

            <h3 className={`text-2xl font-semibold mt-4 ${titleColor}`}>
              {name}
            </h3>
            <p className={`italic text-sm ${secondaryTextColor} mb-2`}>
              {title}
            </p>
            <p className={`text-sm mt-2 ${cardTextColor}`}>{bio}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LawyerCard;
