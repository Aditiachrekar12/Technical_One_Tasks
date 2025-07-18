import React from "react";

const Certifications = () => {
  const items = [
    "✓ MERN Stack Development – Udemy",
    "✓ Power BI – Data Visualization",
    "✓ EY & Anudip – Utility Tools Workshop",
    "✓ Hackathons & Avishkar Participation",
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-[#0a192f] text-white" data-aos="flip-left">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Certifications & Achievements</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {items.map((cert, index) => (
            <span
              data-aos="zoom-in" data-aos-delay="150"
              key={index}
              className="bg-cyan-100 text-[#0a192f] px-6 py-2 rounded-full shadow-md text-sm font-medium border border-cyan-200 transition transform hover:bg-cyan-400 hover:text-white hover:-translate-y-1"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
