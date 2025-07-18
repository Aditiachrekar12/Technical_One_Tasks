import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="py-24 px-6 bg-[#0a192f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div
            className="group bg-white text-[#0a192f] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="overflow-hidden">
              <img
                src="/Project1.png"
                alt="Pet Adoption Website"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-600 transition-colors">
                Home4Paws – Pet Adoption
              </h3>
              <p className="text-sm mb-4">
                Pet adoption platform built with HTML, CSS, JS, PHP & MySQL.
              </p>
              <a
                href="https://github.com/Aditiachrekar12/Home4Paws-Project"
                className="inline-block px-5 py-2 mt-2 bg-[#0a192f] text-white rounded hover:bg-cyan-500 transition"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="group bg-white text-[#0a192f] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="overflow-hidden">
              <img
                src="/dashboard.jpg"
                alt="Sales Dashboard"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-600 transition-colors">
                Sales Dashboard
              </h3>
              <p className="text-sm mb-4">
                Interactive dashboard using Power BI and Excel.
              </p>
              <a
                href="/dashboard.jpg"
                className="inline-block px-5 py-2 mt-2 bg-[#0a192f] text-white rounded hover:bg-cyan-500 transition"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
