import React from "react";
import Navbar from "./components/Navbar";

// Page Sections
import Home from "./pages/Home";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-sans scroll-smooth transition-colors duration-300">
      {/* Disclaimer shown above all content */}
      <DisclaimerModal />

      <Navbar />

      {/* Section-based Layout */}
      <main className="pt-20 space-y-20">
        <Home />
        <About />
        <PracticeAreas />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
