import '../styles/main.css'; 

function App() {
  return (
    <>
      <header>
  <div className="header-container">
    <h1>Robert Tutone 🖐️</h1>
    <div className="social-links">
      <a href="https://github.com/brandhayze" target="_blank" rel="noopener noreferrer" className="github-button bg-white text-black px-4 py-2 rounded">GitHub</a>
      <a href="https://www.linkedin.com/in/robert-tutone-0021a227b/" target="_blank" rel="noopener noreferrer" className="linkedin-button bg-white text-linkedin-blue px-4 py-2 rounded">LinkedIn</a>
    </div>
  </div>
</header>
      <main>
        <h1>Projects</h1>
        <section className="project">
          <h2><strong>Aim Trainer</strong></h2>
          <p> A simple way to improve reaction time and consistent speed clicking.</p>
          <a className="button" href="https://github.com/tohora-2024/aim-trainer" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <span className="team-size">Team Size: 5</span>
        </section>
        
        <section className="project">
          <h2><strong>Project 2</strong></h2>
          <p>Description of Project 2</p>
          <a className="button" href="#" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <span className="team-size">Team Size: 4</span>
        </section>
        
        <section className="project">
          <h2><strong>Project 3</strong></h2>
          <p>Description of Project 3</p>
          <a className="button" href="#" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <span className="team-size">Team Size: 4</span>
        </section>
      </main>
    </>
  );
}

export default App;
