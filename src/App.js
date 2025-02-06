import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Site</h1>
      </header>

      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hi! I'm [Your Name], a [Your Profession/Interest]. I love working on [Your Interests/Hobbies],
            and I'm passionate about [Your Passion]. This site is a place where I share my journey and projects.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

