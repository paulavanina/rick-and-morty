import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Card from './Card';

const apiURL = 'https://rickandmortyapi.com/api/character';

function App() {
  const [characters, setCharacters] = useState([]);

  const searchCharacters = async (name) => {
    const response = await fetch(`${apiURL}?name=${name}`);
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    searchCharacters('Rick');
  }, []);

  return (
    <div className="App">
      <h1 className="text-center">
        Rick and Morty <span className='text-primary' style={{ color: 'blue' }}>App</span>
      </h1>
      
      <div className="container">
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Card character={character} />
            </div>
          ))}
        </div>
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
