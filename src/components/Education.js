import React, { useEffect, useRef } from 'react';
import './Education.css';

const eduData = [
  {
    year:   '2023 — 2026',
    degree: 'B.Tech — Electrical Engineering',
    inst:   'Government Engineering College (GEC), Siwan · BEU Patna',
    grade:  'CGPA: 6.75',
  },
  {
    year:   '2020 — 2023',
    degree: 'Diploma — Electrical Engineering',
    inst:   'BKPI, Sitamarhi · SBTE Bihar',
    grade:  'CGPA: 8.0',
  },
  {
    year:   '2020',
    degree: 'Matriculation (10th)',
    inst:   'CKN High School, Singhwara · BSEB Patna',
    grade:  'Percentage: 68.4%',
  },
];

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            document.querySelectorAll('.edu-item').forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 180);
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-label">Academic Journey</div>
        <div className="section-title">Education</div>
        <div className="edu-timeline">
          {eduData.map((item, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-year">{item.year}</div>
              <div className="edu-degree">{item.degree}</div>
              <div className="edu-inst">{item.inst}</div>
              <span className="edu-grade">{item.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
