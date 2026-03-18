import React from 'react';
import './About.css';

const infoRows = [
  { key: 'Location',   value: 'Darbhanga, Bihar' },
  { key: 'Degree',     value: 'B.Tech Electrical Engg.' },
  { key: 'College',    value: 'GEC, Siwan' },
  { key: 'University', value: 'BEU Patna' },
  { key: 'Graduation', value: '2026' },
  { key: 'Phone',      value: '+91 7061455548' },
  { key: 'Email',      value: 'abhinavdutta777@gmail.com' },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="section-label">Introduction</div>
        <div className="section-title">About Me</div>
        <div className="about-grid">
          <div className="about-text reveal">
            I'm a <strong>highly motivated Electrical Engineer</strong> currently pursuing
            B.Tech at GEC Siwan under BEU Patna. With a strong foundation in electrical
            systems, I combine technical depth with communication and leadership skills.
            <br /><br />
            My passion lies in building <strong>smart, automated systems</strong> — bridging
            the gap between traditional electrical engineering and modern software-driven
            solutions. I thrive in target-oriented settings and love tackling complex
            engineering challenges.
          </div>
          <div className="about-info reveal">
            {infoRows.map((row) => (
              <div className="info-row" key={row.key}>
                <span className="info-key">{row.key}</span>
                <span className="info-val">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
