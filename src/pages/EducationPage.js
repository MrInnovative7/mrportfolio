import React from 'react';
import './EducationPage.css';

function EducationPage() {
  return (
    <section className="edu-page">

      <div className="edu-container">

        <p className="edu-label">ACADEMIC JOURNEY</p>
        <h1 className="edu-title">EDUCATION</h1>

        <div className="timeline">

          {/* ITEM 1 */}
          <div className="timeline-item">
            <span className="year">2023 – 2026</span>
            <h3>B.TECH – ELECTRICAL ENGINEERING</h3>
            <p>GEC Siwan – BEU Patna</p>
            <span className="badge">CGPA: 6.75</span>
          </div>

          {/* ITEM 2 */}
          <div className="timeline-item">
            <span className="year">2020 – 2023</span>
            <h3>DIPLOMA – ELECTRICAL ENGINEERING</h3>
            <p>BKPI Sitamarhi – SBTE Bihar</p>
            <span className="badge">CGPA: 8.0</span>
          </div>

          {/* ITEM 3 */}
          <div className="timeline-item">
            <span className="year">2020</span>
            <h3>MATRICULATION (10TH)</h3>
            <p>CKN High School – BSEB Patna</p>
            <span className="badge">68.4%</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default EducationPage;