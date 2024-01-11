import React from "react";
import { useParams, Link } from "react-router-dom";

function DogProfile({ dogs }) {
  const { dogName } = useParams();

  const dog = dogs.find((dog) => dog.name === dogName);

  if (!dog) {
    return <p>Dog not found</p>;
  }

  return (
    <div>
      <h2>{dog.name}'s Profile</h2>
      <img src={dog.pictureUrl} alt={`${dog.name}'s profile`} />
      <p>Age: {dog.age}</p>
      <h3>Facts:</h3>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <br />
      <Link to="/dogs">Go Home</Link>
    </div>
  );
}

export default DogProfile;
