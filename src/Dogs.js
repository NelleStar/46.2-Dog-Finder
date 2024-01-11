import { Link } from "react-router-dom";

function Dogs({ dogs }) {
  return (
    <>
      <h1>This is dogfnder</h1>
      <h4>Come look at the puppies</h4>
      <p>Click the dogs to view their profile</p>

      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>
              {dog.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

Dogs.defaultProps = {
  dogs: [
    {
      name: "Willa",
      age: 5,
      pictureUrl: "https://images.unsplash.com/photo-1610734002093-b6424e7a1a33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&w=1000&q=80",
      facts: [
        "Willa loves eating popcorn.",
        "Willa is a terrible guard dog.",
        "Willa wants to cuddle with you!"
      ]
    },
    {
      name: "Atticus",
      age: 3,
      pictureUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhdmFuZXNlJTIwZG9nfGVufDB8fDB8fHww",
      facts: [
        "Atticus believes that ball is life.",
        "Atticus likes snow.",
        "Atticus enjoys pawing other dogs."
      ]
    },
    {
      name: "Dandy",
      age: 4,
      pictureUrl: "https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwcmV0cmlldmVyJTIwcHVwcHl8ZW58MHx8MHx8fDA%3D",
      facts: [
        "Dandy loves all humans.",
        "Dandy demolishes all snacks.",
        "Dandy hates the rain."
      ]
    },
    {
      name: "Maya Belle",
      age: 4,
      pictureUrl: "https://plus.unsplash.com/premium_photo-1667099521471-5ac8bea83328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpaHVhaHVhfGVufDB8fDB8fHww",
      facts: [
        "Maya is really stupid.",
        "Maya does not like walks.",
        "Angelina used to hate Maya, but claims not to anymore."
      ]
    }
  ]
};

export default Dogs;