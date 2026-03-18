import React from 'react';
import './Skills.css';

const skillsData = [
  {
    icon: '💬',
    cat:  'Communication',
    list: ['Written & Verbal', 'Objection Handling', 'Relationship Building', 'Teamwork'],
  },
  {
    icon: '⚙️',
    cat:  'Technical',
    list: ['Python Programming', 'Arduino IDE & IoT', 'eSim (Circuit Simulation)', 'Microsoft Excel'],
  },
  {
    icon: '🎨',
    cat:  'Design & Tools',
    list: ['Figma (UI/UX)', 'Canva', 'Google Maps API', 'Project Management'],
  },
  {
    icon: '🔌',
    cat:  'Electrical Core',
    list: ['Power Systems', 'Protection Systems', 'Home Automation', 'Network Design'],
  },
  {
    icon: '🧠',
    cat:  'Soft Skills',
    list: ['Problem Solving', 'Adaptability', 'Leadership', 'Target-Oriented'],
  },
  {
    icon: '🚀',
    cat:  'Leadership',
    list: ['Technical Club Lead', 'T&P Cell Rep', 'Startup Cell Rep', 'Team Mentoring'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <div className="section-label">Competencies</div>
        <div className="section-title">Skills &amp; Tools</div>
        <div className="skills-grid reveal">
          {skillsData.map((s, i) => (
            <div className="skill-cell" key={i}>
              <div className="skill-accent" />
              <span className="skill-icon">{s.icon}</span>
              <div className="skill-cat">{s.cat}</div>
              <ul className="skill-list">
                {s.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
