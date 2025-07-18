import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animation styles

import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou'; // Import Thank You Page

// Divider Component
const Divider = () => (
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffffff30] to-transparent my-10" />
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Router>
      <div className="bg-[#0a192f] text-white overflow-y-hidden w-full">
        <Routes>
          {/* Portfolio Main Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Sidebar />
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
              </>
            }
          />

          {/* Thank You Page Route */}
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
