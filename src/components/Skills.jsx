import React from "react";
import {
  CodeBracketIcon,
  PencilIcon,
  DevicePhoneMobileIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

const Skills = () => {
  const skillsData = [
    {
      icon: (
        <CodeBracketIcon className="w-10 h-10 mb-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Frontend Development",
      description:
        "HTML, CSS, JavaScript, React.js, Bootstrap – I build fast and responsive interfaces.",
    },
    {
      icon: (
        <PencilIcon className="w-10 h-10 mb-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "UI/UX Design",
      description:
        "I design clean and modern interfaces using Figma and web design best practices.",
    },
    {
      icon: (
        <DevicePhoneMobileIcon className="w-10 h-10 mb-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Responsive Layouts",
      description:
        "Ensuring all designs look great across mobile, tablet, and desktop devices.",
    },
    {
      icon: (
        <ServerStackIcon className="w-10 h-10 mb-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Backend Development",
      description:
        "Experience with PHP, MySQL, Node.js – building and integrating server-side logic and databases.",
    },
  ];

  return (
    <section
      id="skills"
      data-aos="zoom-in"
      className="py-24 px-6 bg-[#0a192f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What I Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={200 * (idx + 1)}
              className="group bg-white text-[#0a192f] p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-cyan-300"
            >
              {skill.icon}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
