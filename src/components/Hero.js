import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Content */}
      <div className="hero-content">

        <p className="hero-eyebrow">
          B.Tech · Electrical Engineering · GEC Siwan
        </p>

        <h1 className="hero-name">
          <span className="hero-name__hollow">Abhinav</span>
          <span className="hero-name__solid">Kumar</span>
        </h1>

        <div className="hero-divider">
          <span className="divider-line" />
          <span className="hero-subtitle">
            Engineer · Builder · Leader
          </span>
          <span className="divider-line divider-line--right" />
        </div>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in Touch
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;