import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      data-aos="fade-up"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:pl-20 py-24 bg-gradient-to-br from-[#0a192f] to-[#1c2b3a] text-white"
    >
      {/* Left Column: Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Welcome to my <br />
          <span className="text-cyan-400">Web Development Portfolio!</span>
        </h1>
        <p className="mb-6 text-gray-300">
          I'm Aditi Achrekar, a passionate frontend developer and web designer.
          Get a glimpse of my journey, skills, and creative work here.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-cyan-400 text-[#0a192f] px-6 py-2 rounded-md hover:bg-cyan-300 transition font-medium shadow-md"
          >
            View Projects
          </a>
          <a
            href="/Aditi_Achrekar_Resume.pdf"
            download
            className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#0a192f] transition font-medium shadow-md"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Column: Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/photo.png"
          alt="Aditi Achrekar"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
