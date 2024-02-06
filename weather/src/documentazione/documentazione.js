import React from 'react';
import { Link } from 'react-router-dom';

function DocumentationPage() {
  return (
    <div className="app documentazione-page">
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <h2>Welcome to the Documentation Page!</h2>
        <p>This is your documentation-related content.</p>
      </div>
    </div>
  );
}

export default DocumentationPage;
