import React from 'react';
import './Projects.css';

const projectsData = [
  {
    num:   '01',
    name:  'Home Automation System',
    desc:  'Developed a home automation system for remote control of home appliances using IoT technologies. Enables smart monitoring and control from anywhere via wireless connectivity.',
    tags:  ['Arduino', 'IoT', 'Automation'],
  },
  {
    num:   '02',
    name:  'Smart Electrical Protection System',
    desc:  'Designed and implemented a smart, predictive protection system for building electrical networks. Enhances reliability and selectivity in fault detection and isolation.',
    tags:  ['eSim', 'Protection', 'Power Systems'],
  },
  {
    num:   '03',
    name:  'Distance Calculator App',
    desc:  'A Python application integrating Google Maps API to calculate distance and determine the optimal route between two locations with real-time traffic data.',
    tags:  ['Python', 'Google Maps API', 'App Dev'],
  },
];

function Projects() {


  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="section-label">Work</div>
        <div className="section-title">Projects</div>
        <div className="projects-grid">
          {projectsData.map((p) => (
            <div className="project-card" key={p.num}>
              <div className="project-num">{p.num}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
