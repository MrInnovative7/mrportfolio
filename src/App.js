import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

import AboutPage from './pages/AboutPage';

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

      <BackgroundCanvas />
      <Cursor />
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Marquee />
              <Education />
              <Skills />
              <Projects />
              <Activities />
              <Contact />
            </main>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<AboutPage />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;