import React, { useEffect, useState } from "react";

const DisclaimerModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      // 👉 Always show on localhost/development
      if (process.env.NODE_ENV === "development") {
        setShowModal(true);
        return;
      }

      // 👉 In production, check localStorage
      const stored = localStorage.getItem("disclaimerAccepted");

      if (stored) {
        const { accepted, timestamp } = JSON.parse(stored);
        const thirtyDays = 30 * 24 * 60 * 60 * 1000; // 30 days
        const now = Date.now();

        if (accepted && now - timestamp < thirtyDays) {
          setShowModal(false); // already accepted → don’t show
        } else {
          setShowModal(true); // expired → show again
        }
      } else {
        setShowModal(true); // first visit → show
      }
    } catch (err) {
      console.error("LocalStorage parse error:", err);
      setShowModal(true);
    }
  }, []);

  // Handle "I Agree"
  const handleAgree = () => {
    const timestamp = Date.now();
    localStorage.setItem(
      "disclaimerAccepted",
      JSON.stringify({ accepted: true, timestamp })
    );
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="bg-white text-black rounded-lg max-w-md w-full p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
        <p className="text-sm mb-6">
          The information provided on this website is for general informational
          purposes only and is not intended to be legal advice. Use of this
          website or contacting J&P Legal Solutions LLP does not create an
          attorney-client relationship.
        </p>
        <p className="text-sm mb-6">
          By clicking <strong>"I Agree"</strong>, you acknowledge that you have
          read and understood this disclaimer.
        </p>
        <button
          onClick={handleAgree}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
