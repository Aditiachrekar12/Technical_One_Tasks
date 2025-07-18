import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LanguageIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0a192f] text-white border-t border-[#1f2f40]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* === Left Side === */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <p className="mb-4 leading-relaxed text-gray-300">
            I’m <span className="font-semibold text-white">Aditi Achrekar</span>, a passionate and
            detail-oriented <strong>B.Sc. IT</strong> graduate with a strong foundation in frontend
            development and a growing enthusiasm for UI/UX design.
          </p>
          <p className="leading-relaxed text-gray-300">
            I love building user-friendly, clean interfaces and meaningful digital experiences.
            I'm creative, adaptable, and always eager to learn new technologies and solve real-world challenges.
          </p>
        </div>

        {/* === Right Side === */}
        <div
          data-aos="fade-left"
          className="bg-white text-[#0a192f] rounded-2xl shadow-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
          <ul className="space-y-4 text-sm text-gray-800">
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-cyan-600" />
              <span>achrekar.aditi12@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-cyan-600" />
              <span>+91 9326852690</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-cyan-600" />
              <span>Lower Parel, Mumbai, Maharashtra</span>
            </li>
            <li className="flex items-center gap-3">
              <LanguageIcon className="w-5 h-5 text-cyan-600" />
              <span>English, Hindi, Marathi</span>
            </li>
            <li className="flex items-center gap-3">
              <AcademicCapIcon className="w-5 h-5 text-cyan-600" />
              <span>B.Sc. IT, Kirti M. Doongursee College (2025)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
