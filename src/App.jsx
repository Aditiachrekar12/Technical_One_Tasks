import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS styles are imported

import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="bg-[#0a192f] text-white overflow-y-hidden w-full">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Fixed Small Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Divider />

        <About />
        <Divider />

        <Skills />
        <Divider />

        <Projects />
        <Divider />

        <Certifications />
        <Divider />

        <Contact />
        <Footer />
      </main>
    </div>
  );
}

// Divider Component
const Divider = () => (
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffffff30] to-transparent my-10" />
);

export default App;
