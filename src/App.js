import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage'; // ✅ IMPORTANT

function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Router>

      {/* 🌌 GLOBAL BACKGROUND */}
      <BackgroundCanvas />

      {/* UI */}
      <Cursor />
      <Navbar />

      <Routes>

        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Marquee />
              <Projects />
              <Activities />
              <Contact />
            </main>
          }
        />

        {/* 📄 ABOUT PAGE */}
        <Route path="/about" element={<AboutPage />} />

        {/* 🎓 EDUCATION PAGE */}
        <Route path="/education" element={<EducationPage />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;