function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="sec-head thread">
          <p className="eyebrow">Who I Am</p>
          <h2 className="sec-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text thread">
            <p>
              I'm <strong>Akanksha Kumari</strong>, a B.Tech Computer Science student who leans toward
              the frontend — building clean, functional interfaces — while steadily strengthening my
              backend and database fundamentals with <strong>Python</strong> and <strong>MySQL</strong>.
            </p>
            <p>
              My stack centers on <strong>React</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> and{' '}
              <strong>JavaScript</strong> on the frontend, with <strong>Node.js</strong> and Python on the
              backend. I'm currently learning <strong>Java</strong> and working through a mentored
              cybersecurity track alongside my coursework.
            </p>
            <p>
              I'm seeking internship and entry-level opportunities where I can contribute, keep
              learning, and grow as a developer.
            </p>
          </div>

          <div className="fact-list thread">
            <div className="fact"><span className="fact-key">Education</span><span className="fact-val">B.Tech CSE, K. R. Mangalam University</span></div>
            <div className="fact"><span className="fact-key">Graduation</span><span className="fact-val">Expected 2029</span></div>
            <div className="fact"><span className="fact-key">Email</span><span className="fact-val">akankshakumari90816@gmail.com</span></div>
            <div className="fact"><span className="fact-key">GitHub</span><span className="fact-val">akanksha-076</span></div>
            <div className="fact"><span className="fact-key">Looking For</span><span className="fact-val">Internships &amp; entry-level roles</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;