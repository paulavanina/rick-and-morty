import React from "react";

const Card=({character1})=>{
    return (
        <div className="centered-card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={character1.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {character1.name} </h5>
            
            <p className="card-text">{character1.status} {character1.species}</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    )
}

export default Card;