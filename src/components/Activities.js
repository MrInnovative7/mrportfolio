import React from 'react';
import './Activities.css';

const activitiesData = [
  {
    num:    '01',
    role:   'Student Representative — T&P Cell',
    org:    'Government Engineering College (GEC), Siwan',
    period: '2023 – Present',
  },
  {
    num:    '02',
    role:   'Student Representative — Startup Cell',
    org:    'Government Engineering College (GEC), Siwan',
    period: '2023 – Present',
  },
  {
    num:    '03',
    role:   'Technical Club Lead',
    org:    'Government Engineering College (GEC), Siwan',
    period: '2024 – Present',
  },
];

function Activities() {
  return (
    <section id="activities" className="activities-section">
      <div className="section-inner">
        <div className="section-label">Leadership</div>
        <div className="section-title">Honors &amp; Activities</div>
        <div className="act-list">
          {activitiesData.map((a) => (
            <div className="act-item" key={a.num}>
              <span className="act-num">{a.num}</span>
              <div className="act-info">
                <div className="act-role">{a.role}</div>
                <div className="act-org">{a.org}</div>
              </div>
              <div className="act-period">{a.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
