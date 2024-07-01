import React from "react";

const Card = ({ character }) => {
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
