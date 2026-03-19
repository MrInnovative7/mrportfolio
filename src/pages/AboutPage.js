import React from 'react';
import './AboutPage.css';
import profile from '../assets/profile.jpg';

function AboutPage() {
  return (
    <section className="about-page">

      <div className="about-container">

        {/* LEFT TEXT */}
        <div className="about-left">

          <h1>
            Hey! I'm <span>Abhinav Kumar</span> and I'm an Electrical Engineer.
          </h1>

          <p>
            I'm a highly motivated Electrical Engineer currently pursuing B.Tech
            at GEC Siwan under BEU Patna. I combine technical depth with
            communication and leadership skills.
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

    </section>
  );
}

export default AboutPage;