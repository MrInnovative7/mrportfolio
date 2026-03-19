import React, { useState } from 'react';
import './Navbar.css';
import profile from '../assets/profile.jpg';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // ✅ helper: close menu
  const handleClick = () => setMenuOpen(false);

  return (
    <div className="nav-wrapper">

      <nav className="navbar">

        {/* LEFT PROFILE */}
        <Link to="/" className="nav-left" onClick={handleClick}>
          <img src={profile} alt="profile" className="nav-profile" />
          <span className="nav-name">Abhinav</span>
        </Link>

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

          {/* ABOUT (separate page) */}
          <li onClick={handleClick}>
            <Link to="/about">About</Link>
          </li>

          {/* HOME SECTIONS */}
          <li onClick={handleClick}>
            <a href="/#education">Education</a>
          </li>

          <li onClick={handleClick}>
            <a href="/#skills">Skills</a>
          </li>

          <li onClick={handleClick}>
            <a href="/#projects">Projects</a>
          </li>

          <li onClick={handleClick}>
            <a href="/#activities">Activities</a>
          </li>

          <li onClick={handleClick}>
            <a href="/#contact">Contact</a>
          </li>

        </ul>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </nav>

    </div>
  );
}

export default Navbar;