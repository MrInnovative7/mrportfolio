import React, { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  // Scroll reveal observer
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
    <>
      {/* 🔥 GLOBAL BACKGROUND */}
      <BackgroundCanvas />

      {/* 🔝 UI Components */}
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Activities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;