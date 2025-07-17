function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal website built with React and deployed on Netlify.</p>
          <a href="https://ademii.netlify.app/" >View Code</a>
        </div>
        <div className="project-card">
          <h3>Age Calculator App</h3>
          <p>Manage tasks with real-time updates.</p>
          <a href="https://agey.netlify.app/">View Code</a>
        </div>
      </div>
    </div>
  );
}