import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <div className="container row">
        {countries.map((country, index) => (
          <div className="col" key={index}>
            <div className="content card mt-4">
              <img src={country.flags.png} alt={`${country.name.common} Flag`} />
              <div className="text p-4">
                <h2>{country.name.common}</h2>
                <p className="mt-2">Region: {country.region}</p>
                <p className="sub">Subregion: {country.subregion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
