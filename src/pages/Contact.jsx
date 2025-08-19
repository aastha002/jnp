import React, { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ✅ Replace this with your Google Apps Script URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw8WFDFCpOS1Qat1N1VhUXAUjzZQW4ZqsX6dPC6_ud5D9_Qm7GSgtqh91LXj5eykLkk/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // 🔹 Convert formData to FormData object (so Google Apps Script can read it)
    const form = new FormData();
    form.append("Name", name);
    form.append("Email", email);
    form.append("Message", message);

    fetch(SCRIPT_URL, { method: "POST", body: form })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        setError("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <section className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-all duration-300 py-10">
      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-light-accent dark:text-dark-accent text-lg sm:text-xl uppercase tracking-widest font-medium mb-2">
          Get in touch
        </p>
        <h2 className="text-light-accent dark:text-dark-accent text-3xl sm:text-5xl font-bold">
          Contact Us
        </h2>
      </motion.div>

      {/* Form */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-10 mx-auto p-8 rounded-xl max-w-2xl shadow-md bg-white dark:bg-[#111111] transition-all duration-300"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="p-4 rounded bg-light-bg dark:bg-black border border-light-accent dark:border-dark-accent text-light-text dark:text-dark-text placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            required
            className="p-4 rounded bg-light-bg dark:bg-black border border-light-accent dark:border-dark-accent text-light-text dark:text-dark-text placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message *"
            required
            rows="5"
            className="p-4 rounded bg-light-bg dark:bg-black border border-light-accent dark:border-dark-accent text-light-text dark:text-dark-text placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
          />

          {/* validation / status messages */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {submitted && (
            <p className="text-green-600 dark:text-green-400 text-sm">
              ✅ Thank you! Your message has been sent.
            </p>
          )}

          <button
            type="submit"
            className="bg-light-accent dark:bg-dark-accent text-white dark:text-black py-3 px-6 rounded font-semibold hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Contact details */}
      <div className="mt-12 text-center text-sm text-gray-700 dark:text-gray-300 space-y-2">
        <p>
          <span className="text-light-accent dark:text-dark-accent font-semibold">
            Email:
          </span>{" "}
          rashmijadvocate@gmail.com
        </p>
        <p>
          <span className="text-light-accent dark:text-dark-accent font-semibold">
            Phone:
          </span>{" "}
          +91&nbsp;97180&nbsp;94878
        </p>
        <p>
          <span className="text-light-accent dark:text-dark-accent font-semibold">
            Advocate-Partner
          </span>{" "}
          J&P Legal Solutions LLP
        </p>
      </div>
    </section>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;
