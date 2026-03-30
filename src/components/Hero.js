import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <h1 className="hero-title">
            I'm an Electrical Engineer who builds
            <span> smart systems.</span>
          </h1>

          <p className="hero-description">
            Passionate about creating intelligent, automated solutions by combining 
            electrical engineering with modern software technologies. 
            I love solving real-world problems with innovation.
          </p>

          <div className="hero-buttons">

            {/* PRIMARY BUTTON */}
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            {/* 🔥 RESUME BUTTON (UPDATED) */}
            <a href="/resume.pdf" download className="btn-secondary">
              📄 Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;