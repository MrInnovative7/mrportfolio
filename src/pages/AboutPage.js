import React from 'react';
import './AboutPage.css';
import profile from '../assets/profile.jpg';

function AboutPage() {
  return (
    <section className="about-page">

      {/* ===== TOP SECTION ===== */}
      <div className="about-container">

        {/* LEFT TEXT */}
        <div className="about-left">

          <h1>
            Hey! I'm <span>Abhinav Kumar</span> and I'm an Electrical Engineer.
          </h1>

          <p>
            I'm a highly motivated Electrical Engineer currently pursuing B.Tech
            at GEC Siwan under BEU Patna. I have completed my Diploma in Electrical Engineering 
            with strong technical depth, communication, and leadership skills.
          </p>

          <p>
            My passion lies in building smart, automated systems — bridging the
            gap between traditional electrical engineering and modern
            software-driven solutions.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">

          <img src={profile} alt="profile" />

          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>

        </div>

      </div>


      {/* ===== SKILLS SECTION ===== */}
      <div className="skills-section">

        <h2>Skills & Tools</h2>

        <div className="skills-grid">

          {/* BOX 1 */}
          <div className="skill-box">
            <h3>Communication</h3>
            <p>→ Written & Verbal</p>
            <p>→ Objection Handling</p>
            <p>→ Relationship Building</p>
            <p>→ Teamwork</p>
          </div>

          {/* BOX 2 */}
          <div className="skill-box">
            <h3>Technical</h3>
            <p>→ Python Programming</p>
            <p>→ Arduino IDE & IoT</p>
            <p>→ eSim Simulation</p>
            <p>→ Microsoft Excel</p>
          </div>

          {/* BOX 3 */}
          <div className="skill-box">
            <h3>Design & Tools</h3>
            <p>→ Figma (UI/UX)</p>
            <p>→ Canva</p>
            <p>→ Google Maps API</p>
            <p>→ Project Management</p>
          </div>

          {/* BOX 4 */}
          <div className="skill-box">
            <h3>Electrical Core</h3>
            <p>→ Power Systems</p>
            <p>→ Protection Systems</p>
            <p>→ Home Automation</p>
            <p>→ Network Design</p>
          </div>

          {/* BOX 5 */}
          <div className="skill-box">
            <h3>Soft Skills</h3>
            <p>→ Problem Solving</p>
            <p>→ Adaptability</p>
            <p>→ Leadership</p>
            <p>→ Target-Oriented</p>
          </div>

          {/* BOX 6 */}
          <div className="skill-box">
            <h3>Leadership</h3>
            <p>→ Technical Club Lead</p>
            <p>→ T&P Cell Representative</p>
            <p>→ Startup Cell Representative</p>
            <p>→ Team Mentoring</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPage;