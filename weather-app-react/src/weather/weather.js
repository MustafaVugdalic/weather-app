// Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  // Function to convert Fahrenheit to Celsius
  const convertToFahrenheit = (tempF) => {
    return ((tempF - 32) * 5) / 9;
  };

  // Function to convert MPH to KPH
  const convertToKPH = (speedMPH) => {
    return speedMPH * 1.60934;
  };

  return (
    <div className="app weather-page">
      <div className="app">
        <ul>
          <li>
            <Link to="/">Home </Link>
            <Link to="/documentation">Documentation</Link>
          </li>
        </ul>
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Inserisci località'
            type="text"
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{convertToFahrenheit(data.main.temp).toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{convertToFahrenheit(data.main.feels_like).toFixed()}°C</p> : null}
                <p>Temperatura</p>
              </div>
              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>umidità</p>
              </div>
              <div className="wind">
                {data.wind ? <p className='bold'>{convertToKPH(data.wind.speed).toFixed(2)} KPH</p> : null}
                <p>Velocità vento</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;