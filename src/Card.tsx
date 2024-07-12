import React from "react";

interface Character{
    id:number;
    name:string;
    image:string;
    status:string;
    url :string;
    species :string;
}

const Card = ( {character }:{character:Character}) => {
  return (
    <div className="centered-card-container">
      <div className="card" style={{ width: "18rem" }}>
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body">
          <h5 className="card-title"> {character.name} </h5>
          <p className="card-text">{character.status} {character.species}</p>
          <a href={character.url} className="btn btn-primary">Details</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
