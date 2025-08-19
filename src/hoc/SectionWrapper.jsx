import React from "react";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="py-16 px-6 max-w-7xl mx-auto">
        <Component />
      </section>
    );
  };

export default SectionWrapper;
