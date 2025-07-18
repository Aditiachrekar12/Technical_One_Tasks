import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-20 px-6 bg-[#0a192f] text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl">
          <form className="grid md:grid-cols-2 gap-6">
            <input
              data-aos="fade-right"
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:ring-2 ring-cyan-400 outline-none"
            />
            <input
              data-aos="fade-right"
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:ring-2 ring-cyan-400 outline-none"
            />
            <textarea
              data-aos="fade-left"
              placeholder="Your Message"
              className="md:col-span-2 w-full p-3 rounded bg-white/20 text-white placeholder-white focus:ring-2 ring-cyan-400 outline-none"
              rows="5"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-cyan-400 hover:bg-cyan-500 text-[#0a192f] font-semibold px-6 py-3 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 flex gap-8 justify-center">
        <a
          href="https://github.com/Aditiachrekar12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-transform transform hover:scale-125 text-4xl"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/aditi-achrekar-568a40282"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-transform transform hover:scale-125 text-4xl"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
