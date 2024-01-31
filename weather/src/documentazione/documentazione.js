// DocumentationPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function DocumentationPage() {
  return (
    <div className="app documentazione-page">
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
      <h2>Welcome to the Documentation Page!</h2>
      <p>This is your documentation-related content.</p>
    </div>
  );
}

export default DocumentationPage;
