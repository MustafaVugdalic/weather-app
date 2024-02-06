import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Weather from './weather/weather';
import DocumentationPage from './documentazione/documentazione';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/documentation" element={<DocumentationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
