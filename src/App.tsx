import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Card';
import Pagination from './Pagination';

const apiURL = 'https://rickandmortyapi.com/api/character';

interface Character{
  id:number;
  name:string;
  image:string;
  status:string;
  url :string;
  species :string;
}


function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchCharacters = async (page:number) => {
    const response = await fetch(`${apiURL}?page=${page}`);
    const data = await response.json();
    setCharacters(data.results);
    setTotalPages(data.info.pages);
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1 className="text-center">
        Rick and Morty  <span className='text-primary' style={{ color: 'blue' }}>App</span>
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

      <div className="pagination-class">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </div>




  );
}

export default App;
