import { useState, useEffect } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'coursework', label: 'Coursework' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header>
      <nav>
        <a href="#hero" className="brand">
          <svg className="brand-mark" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" stroke="#e3372c" strokeWidth="1.2" />
            <path d="M13 1V25M1 13H25M4 4L22 22M22 4L4 22" stroke="#e3372c" strokeWidth="0.8" opacity="0.7" />
            <circle cx="13" cy="13" r="7.5" stroke="#e3372c" strokeWidth="0.8" opacity="0.6" />
          </svg>
          AK.
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
                <li key={item.id}>
                <a
                href={`#${item.id}`}
                className={activeId === item.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
                >
                {item.label}
                </a>
                </li>
            ))}
        </ul>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Navbar;