function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="sec-head thread">
          <p className="eyebrow">What I Work With</p>
          <h2 className="sec-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-group thread">
            <div className="skill-group-title">Frontend</div>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          <div className="skill-group thread">
            <div className="skill-group-title">Backend</div>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Node.js (learning)</span>
              <span className="skill-tag learning">Java (learning)</span>
            </div>
          </div>

          <div className="skill-group thread">
            <div className="skill-group-title">Database</div>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
            </div>
          </div>

          <div className="skill-group thread">
            <div className="skill-group-title">Tools</div>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;