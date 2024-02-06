import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from './pic1.gif';
import Image2 from './pic2.gif';

function DocumentationPage() {
  const openUrl = () => {
    window.open('https://www.canva.com/design/DAF8DIZuP9E/TRoUNyPgzSShZHsOPj_T7A/view?utm_content=DAF8DIZuP9E&utm_campaign=designshare&utm_medium=link&utm_source=editor', '_blank');
  };

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
        <div className="layer-container">
          <div className="layer layer-left">
            <img src={Image1} alt="1" width="300" height="300"/>
            <p className="text-center">- Mustafa Vugdalic -</p>
          </div>
          <div className="layer layer-right">
            <img src={Image2} alt="1" width="300" height="300"/>
            <p className="text-center">- Serhii kushnir -</p>
          </div>
        </div>
        <div className="layer button-layer">
          <button onClick={openUrl}>Canva</button>
        </div>
      </div>
    </div>
  );
}

export default DocumentationPage;
