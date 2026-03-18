import React from 'react';
import './Contact.css';

const contactLinks = [
  { href: 'mailto:abhinavdutta777@gmail.com', icon: '📧', label: 'Email Me' },
  { href: 'tel:+917061455548',                icon: '📞', label: 'Call Me' },
  { href: 'https://linkedin.com/in/abhinav-kumargecsiwan', icon: '💼', label: 'LinkedIn', external: true },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-glow" />
        <div className="section-label contact-label">Let's Connect</div>
        <div className="contact-title reveal">
          Let's Build<br />
          <span className="contact-title__accent">Something</span>
          {' '}Together
        </div>
        <p className="contact-sub reveal">
          Open to internships, collaborations &amp; engineering challenges
        </p>
        <div className="contact-links reveal">
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="contact-link"
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
            >
              <span>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
