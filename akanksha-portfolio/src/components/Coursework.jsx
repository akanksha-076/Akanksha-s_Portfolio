function Coursework() {
  return (
    <section id="coursework">
      <div className="container">
        <div className="sec-head thread">
          <p className="eyebrow">Always Learning</p>
          <h2 className="sec-title">Coursework &amp; Certifications</h2>
        </div>

        <div className="course-grid">
          <div className="course-card thread">
            <span className="course-status">In Progress</span>
            <div className="course-title">CCST Cybersecurity (100-160)</div>
            <p className="course-desc">CIA triad, AAA framework, encryption, access management, and threat/vulnerability concepts — completed via a mentored track through the Projexa Internship portal.</p>
          </div>

          <div className="course-card thread">
            <span className="course-status done">Coursework</span>
            <div className="course-title">Data Structures</div>
            <p className="course-desc">Sorting algorithms, tree traversals, graph traversal (BFS/DFS), time complexity, stacks, queues, and linked lists.</p>
          </div>

          <div className="course-card thread">
            <span className="course-status done">Coursework</span>
            <div className="course-title">Web Development — React &amp; JavaScript</div>
            <p className="course-desc">React hooks, Context API, Virtual DOM, React Router, async JavaScript patterns, and the event loop.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coursework;