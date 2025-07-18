import React from "react";
import {
  HomeIcon,
  UserCircleIcon,
  LightBulbIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  { name: "Home", href: "#hero", icon: HomeIcon },
  { name: "About", href: "#about", icon: UserCircleIcon },
  { name: "Skills", href: "#skills", icon: LightBulbIcon },
  { name: "Projects", href: "#projects", icon: CodeBracketIcon },
  { name: "Certifications", href: "#certifications", icon: AcademicCapIcon },
  { name: "Contact", href: "#contact", icon: EnvelopeIcon },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-3 flex-col items-center space-y-5">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          title={item.name}
          className="text-white hover:text-cyan-300 transition"
        >
          <item.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
