import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, animId;

    // 📱 Detect mobile
    const isMobile = window.innerWidth < 768;

    let mouseX = -999, mouseY = -999;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // ❌ Mouse move disable on mobile (performance boost)
    if (!isMobile) {
      const onMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };
      document.addEventListener('mousemove', onMouseMove);

      return () => {
        document.removeEventListener('mousemove', onMouseMove);
      };
    }

    // 🔥 Reduce nodes for mobile
    const N = isMobile ? 25 : 55;

    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.4 + 0.4,
      ph: Math.random() * Math.PI * 2,
      ps: Math.random() * 0.018 + 0.008,
      active: Math.random() > 0.78,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = '#e8ff47';
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="hero">

      {/* Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Content */}
      <div className="hero-content">

        <p className="hero-eyebrow">
          B.Tech · Electrical Engineering
        </p>

        <h1 className="hero-name">
          <span className="hero-name__hollow">Abhinav</span>
          <span className="hero-name__solid">Kumar</span>
        </h1>

        <p className="hero-subtitle">
          Engineer · Builder · Leader
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--outline">
            Contact Me
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;