import '../styles/main.css'; 
import AimTrainerImage from '../components/AimTrainer.png';

function App() {
  return (
    <>
<header>
  <div className="header-container">
    <h1>Robert Tutone 🖐️</h1>
    <div className="social-links">
      <a href="https://docs.google.com/document/d/14JOZIvOD3hRePtADmT6vgpoHgGgdRyazCdqoQ1y11Pc/edit?usp=sharing" className="cv-button">CV</a>
      <a href="https://github.com/brandhayze" className="github-button">GitHub</a>
      <a href="https://www.linkedin.com/in/robert-tutone-0021a227b/" target="_blank" rel="noopener noreferrer" className="linkedin-button px-4 py-2 rounded">LinkedIn</a>
    </div>
  </div>
</header>

      <main>
        <h1>Projects I am Proud of</h1>
        <section className="project">
          <h2><strong>Aim Trainer</strong></h2>
          <p> A simple way to improve reaction time and consistent speed clicking.</p>
          <p> on this project I worked on the frontend mainly to do with a displaying a game grid managing the target to randomly appear and the countdown functions.
            
The code I worked on is a React component called Grid, used for a timed clicking game. It utilizes React, React Router, and Node.js. It tracks time, hits, and generates a grid of clickable cells.
I chose React for its component-based architecture and ease of state management. React Router enables navigation within the app. Node.js powers the interval for time tracking.
To improve, I could optimize the interval handling for better performance and consider using CSS Grid for the layout instead of manually creating grid cells.
          </p>
          <a href="https://github.com/tohora-2024/aim-trainer">View on GitHub</a>
          <span className="team-size">Team Size: 5</span>
        </section>
        
        <section className="project"> 
          <h2><strong>CockTail Maker</strong></h2>
          <p>A Simple Generator if you are looking for something to drink but dont know what? :D</p>
          <br></br>
          <p>I worked solo on a component called RandomDrinkGenerator. It generates a random cocktail by selecting a random spirit from a data file and then selecting a random cocktail associated with that spirit. It uses React's useState hook to manage the state of the random drink. When the user clicks the "Generate" button, it triggers the generation of a random drink and displays its name, ingredients, and instructions. The code utilizes ES6 features like destructuring assignment and arrow functions. To improve, it could handle edge cases like empty data or provide better error handling. The project aims to offer users a fun way to discover new cocktail recipes randomly.
          One thing I couldve done better is implement error handling for cases such as empty data or unexpected errors during the random drink generation process.
</p>
          <a href="https://github.com/tohora-2024/cocktail-maker">View on GitHub</a>
          <span className="team-size">Team Size: 4</span>
        </section>
      </main>
    </>
  );
}

export default App;
