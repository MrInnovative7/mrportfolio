import React, { useState } from 'react';
import './Navbar.css';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper">

      <nav className="navbar">

        {/* LEFT PROFILE */}
        <Link to="/" className="nav-left">
          <img src={profile} alt="profile" className="nav-profile" />
          <span className="nav-name">Abhinav</span>
        </Link>

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {links.map((l) => (
            <li key={l.href} onClick={() => setMenuOpen(false)}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}

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