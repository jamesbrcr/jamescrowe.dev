import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">About Me</Link>
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
  );
}

export default Header;