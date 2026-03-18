import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, animId;
    let mouseX = -999, mouseY = -999;

    const isMobile = window.innerWidth < 768;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // ✅ FIXED: no early return
    let onMouseMove;
    if (!isMobile) {
      onMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };
      document.addEventListener('mousemove', onMouseMove);
    }

    // Nodes
    const N = isMobile ? 25 : 60;

    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        // 🔥 glow effect
        ctx.beginPath();
        ctx.fillStyle = 'rgba(232,255,71,0.9)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#e8ff47';
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);

      if (onMouseMove) {
        document.removeEventListener('mousemove', onMouseMove);
      }

      cancelAnimationFrame(animId);
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