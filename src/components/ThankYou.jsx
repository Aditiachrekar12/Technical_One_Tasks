// components/ThankYou.jsx
import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white px-6">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-xl text-center shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">Thank You!</h1>
        <p className="text-lg mb-6">
          Your message has been sent successfully. I’ll get back to you soon!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-[#0a192f] font-semibold rounded transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
