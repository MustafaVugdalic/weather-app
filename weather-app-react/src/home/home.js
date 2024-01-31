import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="app home-page">
      <header className="header">
        {/* Black header with 10% opacity */}
        <nav>
          <ul>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/documentation">Documentazione</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Explicitly create a separate content section */}
      <div className="content">
        <h2>Casa pagina del dio bestia</h2>
        <p>attenzione pericolo imminente</p>
      </div>
    </div>
  );
}

export default Home;
