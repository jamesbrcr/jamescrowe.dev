import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Define your components for each page
function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>
        Hi! I'm [Your Name], a [Your Profession/Interest]. I love working on [Your Interests/Hobbies],
        and I'm passionate about [Your Passion]. This site is a place where I share my journey and projects.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section className="about-me">
      <h2>Projects</h2>
      <p>Here are some of the projects I've worked on:</p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </section>
  );
}

function Blog() {
  return (
    <section className="about-me">
      <h2>Blog</h2>
      <p>Welcome to my blog! Here, I share my thoughts and experiences.</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="about-me">
      <h2>Contact</h2>
      <p>Feel free to reach out to me at [Your Email].</p>
    </section>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Personal Site</h1>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/" className="nav-link">Welcome!</Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

