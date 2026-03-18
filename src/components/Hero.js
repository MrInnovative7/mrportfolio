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

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    document.addEventListener('mousemove', onMouseMove);

    // Build nodes
    const N = 55;
    const nodes = Array.from({ length: N }, () => ({
      x:  Math.random() * (window.innerWidth  || 1400),
      y:  Math.random() * (window.innerHeight || 800),
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r:  Math.random() * 1.4 + 0.4,
      ph: Math.random() * Math.PI * 2,
      ps: Math.random() * 0.018 + 0.008,
      active: Math.random() > 0.78,
    }));

    const sigs = [];
    const sigInterval = setInterval(() => {
      const a = Math.floor(Math.random() * N);
      let b;
      do { b = Math.floor(Math.random() * N); } while (b === a);
      if (Math.hypot(nodes[b].x - nodes[a].x, nodes[b].y - nodes[a].y) < 200) {
        sigs.push({ a, b, t: 0, spd: 0.007 + Math.random() * 0.006 });
      }
    }, 500);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy; n.ph += n.ps;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Draw L-shaped circuit edges
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 165) {
            const alpha = (1 - d / 165) * 0.11;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(232,255,71,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.setLineDash([3, 10]);
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // Mouse glow
      nodes.forEach((n) => {
        const d = Math.hypot(n.x - mouseX, n.y - mouseY);
        if (d < 140) {
          const f = (140 - d) / 140;
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 24 + f * 26);
          g.addColorStop(0, `rgba(232,255,71,${f * 0.28})`);
          g.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.fillStyle = g;
          ctx.arc(n.x, n.y, 24 + f * 26, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Signal particles
      for (let i = sigs.length - 1; i >= 0; i--) {
        const s = sigs[i];
        s.t += s.spd;
        if (s.t >= 1) { sigs.splice(i, 1); continue; }
        const fn = nodes[s.a], tn = nodes[s.b];
        const sx = fn.x + (tn.x - fn.x) * s.t;
        const sy = fn.y + (tn.y - fn.y) * s.t;
        const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, 6);
        g.addColorStop(0, 'rgba(232,255,71,0.9)');
        g.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.fillStyle = g;
        ctx.arc(sx, sy, 6, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.fillStyle = '#fff';
        ctx.arc(sx, sy, 1.6, 0, Math.PI * 2); ctx.fill();
      }

      // Draw nodes
      nodes.forEach((n) => {
        const ps = n.active ? 0.5 + 0.5 * Math.sin(n.ph) : 1;
        if (n.active) {
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 13 * ps);
          g.addColorStop(0, `rgba(232,255,71,${0.2 * ps})`);
          g.addColorStop(1, 'transparent');
          ctx.beginPath(); ctx.fillStyle = g;
          ctx.arc(n.x, n.y, 13 * ps, 0, Math.PI * 2); ctx.fill();
        }
        ctx.beginPath();
        ctx.fillStyle = n.active ? '#e8ff47' : 'rgba(255,255,255,0.38)';
        ctx.globalAlpha = n.active ? 0.44 + 0.44 * Math.sin(n.ph) : 0.26;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      clearInterval(sigInterval);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-vignette" />

      {/* Status pill */}
      <div className="hero-status">
        <span className="status-dot" />
        Available for Opportunities
      </div>

      {/* Corner stats */}
      <div className="hero-stat hero-stat--left">
        <div className="stat-value">8.0</div>
        <div className="stat-label">Diploma CGPA</div>
      </div>
      <div className="hero-stat hero-stat--right">
        <div className="stat-value">3+</div>
        <div className="stat-label">Live Projects</div>
      </div>

      {/* Center content */}
      <div className="hero-content">
        <p className="hero-eyebrow">B.Tech · Electrical Engineering · GEC Siwan</p>
        <h1 className="hero-name">
          <span className="hero-name__hollow">Abhinav</span>
          <span className="hero-name__solid">Kumar</span>
        </h1>
        <div className="hero-divider">
          <span className="divider-line" />
          <span className="hero-subtitle">Engineer · Builder · Leader</span>
          <span className="divider-line divider-line--right" />
        </div>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact"  className="btn btn--outline">Get in Touch</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
