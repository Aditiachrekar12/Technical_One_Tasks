import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#eaf6ff] text-[#0a192f] text-center py-6 text-sm border-t border-gray-300 shadow-inner" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-medium">
          © 2025 <span className="font-semibold text-cyan-600">Aditi Achrekar</span>. Crafted with
          <span className="mx-1 text-red-500">❤</span> using{" "}
          <span className="font-semibold text-blue-700">React</span> +{" "}
          <span className="font-semibold text-blue-500">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
