function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="sec-head thread">
          <p className="eyebrow">What I've Built</p>
          <h2 className="sec-title">Projects</h2>
        </div>

        <div className="projects-list">
          <div className="project-row thread">
            <div className="project-head">
              <div className="project-name">Netflix Clone</div>
              <div className="project-stack">React.js · Firebase Auth · TMDB API · React Router DOM · Axios</div>
            </div>
            <div className="project-body">
              <ul>
                <li>Built a full capstone clone of the Netflix UI replicating movie browsing and layout design, with Firebase-based user authentication and live movie data pulled from the TMDB API.</li>
                <li>Deployed the application on Netlify.</li>
              </ul>
            </div>
          </div>

          <div className="project-row thread">
            <div className="project-head">
              <div className="project-name">AI-Powered Full-Stack Chatbot</div>
              <div className="project-stack">React · Vite · Flask · Gemini API</div>
            </div>
            <div className="project-body">
              <ul>
                <li>Developed a full-stack conversational chatbot with a React/Vite frontend and a Flask backend, integrating Google's Gemini API for AI-generated responses.</li>
                <li>Deployed the frontend on Netlify and the backend on Render as part of an active portfolio project.</li>
              </ul>
            </div>
          </div>

          <div className="project-row thread">
            <div className="project-head">
              <div className="project-name">GitHub Analyzer</div>
              <div className="project-stack">React</div>
            </div>
            <div className="project-body">
              <ul>
                <li>Built a React-based tool that fetches and analyzes GitHub profile and repository data to surface stats and insights for any given user.</li>
              </ul>
            </div>
          </div>

          <div className="project-row thread">
            <div className="project-head">
              <div className="project-name">Gesture-Controlled Computer Vision Suite</div>
              <div className="project-stack">Python · OpenCV · MediaPipe · NumPy</div>
            </div>
            <div className="project-body">
              <ul>
                <li>Built a core hand-tracking engine using MediaPipe to detect 21 real-time 3D hand landmarks, with FPS profiling and bounding-box overlays via OpenCV.</li>
                <li>Developed a touchless "Air Canvas" drawing application using HSV color masking and NumPy-smoothed drawing vectors for jitter-free, mid-air sketching.</li>
                <li>Built a gesture-controlled Flappy Bird game that calculates real-time Euclidean distance between the thumb and index fingertip to detect pinch gestures and drive game physics.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;