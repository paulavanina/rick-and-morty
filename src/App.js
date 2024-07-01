import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Card from './Card';


const apiURL = 'https://rickandmortyapi.com/api/character';

function App() {

  const character1={
    "id": 8,
    "name": "Adjudicator Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "unknown",
        "url": ""
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/8",
    "created": "2017-11-04T20:03:34.737Z"
}

  return (
    <div className="App">
      <h1 className="text-center">
        Rick and Morty <span className='text-primary' style={{ color: 'blue' }}>App</span>
      </h1>
      
    <div className="container">
      <Card character1={character1} />
    </div>

<div className="paginationClass">
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">2</span>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default App;
