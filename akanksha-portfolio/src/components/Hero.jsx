function Hero() {
  return (
    <section id="hero">
      <svg className="web-corner" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="400" y1="0" x2="400" y2="400"></line>
        <line x1="400" y1="0" x2="276" y2="381" className="thread-red"></line>
        <line x1="400" y1="0" x2="165" y2="324"></line>
        <line x1="400" y1="0" x2="76" y2="235" className="thread-red"></line>
        <line x1="400" y1="0" x2="19" y2="124"></line>
        <line x1="400" y1="0" x2="0" y2="0"></line>
        <path d="M310 0 A90 90 0 0 1 400 90" className="thread-red"></path>
        <path d="M220 0 A180 180 0 0 1 400 180"></path>
        <path d="M130 0 A270 270 0 0 1 400 270" className="thread-red"></path>
        <path d="M40 0 A360 360 0 0 1 400 360"></path>
      </svg>

      <div className="container hero-grid">
        <div>
          <div className="status-pill thread">
            <span className="status-dot"></span> Open to internships &amp; entry-level roles
          </div>

          <h1 className="hero-name thread">
            Akanksha
            <br />
            <span className="accent">Kumari</span>
          </h1>

          <p className="hero-role thread">Aspiring Full Stack Developer &amp; Python Enthusiast</p>

          <p className="hero-desc thread">
            Frontend-leaning B.Tech Computer Science student building clean, functional interfaces
            while steadily strengthening backend and database fundamentals with Python and MySQL.
            Seeking internship and entry-level opportunities to contribute, learn, and grow.
          </p>

          <div className="hero-actions thread">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="mailto:akankshakumari90816@gmail.com" className="btn btn-outline">Get In Touch</a>
          </div>

          <div className="hero-socials thread">
            <a href="https://github.com/akanksha-076" target="_blank" rel="noopener noreferrer" className="social-node" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/akanksha-kumarihere" target="_blank" rel="noopener noreferrer" className="social-node" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:akankshakumari90816@gmail.com" className="social-node" aria-label="Email">
              <svg viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z"/></svg>
            </a>
          </div>
        </div>

        <div className="id-card thread">
          <div className="id-row"><span className="id-label">Degree</span><span className="id-value">B.Tech, Computer Science &amp; Engineering</span></div>
          <div className="id-row"><span className="id-label">University</span><span className="id-value">K. R. Mangalam University</span></div>
          <div className="id-row"><span className="id-label">Graduation</span><span className="id-value">Expected 2029</span></div>
          <div className="id-row"><span className="id-label">Focus</span><span className="id-value">React · Python · MySQL</span></div>
          <div className="id-row"><span className="id-label">Status</span><span className="id-value">Open to internships</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;