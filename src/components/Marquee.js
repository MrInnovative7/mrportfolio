import React from 'react';
import './Marquee.css';

const items = [
  'Home Automation',
  'Smart Protection Systems',
  'Python Developer',
  'Arduino & IoT',
  'Figma & Canva Design',
  'Project Management',
  'GEC Siwan',
  'T&P Cell Rep',
];

function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item}
            <em>★</em>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
