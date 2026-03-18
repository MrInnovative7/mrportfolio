import React, { useState, useEffect } from 'react';
import './Navbar.css';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      {/* 🔥 PROFILE IMAGE (Logo replacement) */}
      <div className="nav-logo">
        <Link to="/profile" onClick={() => setMenuOpen(false)}>
          <img src={profile} alt="profile" className="nav-profile" />
        </Link>
      </div>

      {/* 🍔 Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* 🔗 Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {links.map((l) => (
          <li key={l.href} onClick={() => setMenuOpen(false)}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

    </nav>
  );
}

export default Navbar;