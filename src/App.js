import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

function Card() {
  const memoryData = [
    {
      id: 1,
      name: "Cat",
      image: require("./Images/cat.jpg"),
      active: false,
    },
    {
      id: 2,
      name: "Dog",
      image: require("./Images/dog.jpg"),
      active: false,
    },
    {
      id: 3,
      name: "Fish",
      image: require("./Images/fish.jpg"),
      active: false,
    },
    {
      id: 4,
      name: "Horse",
      image: require("./Images/horse.jpg"),
      active: false,
    },
    {
      id: 5,
      name: "Shark",
      image: require("./Images/shark.jpg"),
      active: false,
    },
    {
      id: 6,
      name: "Horse",
      image: require("./Images/horse.jpg"),
      active: false,
    },
    {
      id: 7,
      name: "Cat",
      image: require("./Images/cat.jpg"),
      active: false,
    },
    {
      id: 8,
      name: "Shark",
      image: require("./Images/shark.jpg"),
      active: false,
    },
    {
      id: 9,
      name: "Fish",
      image: require("./Images/fish.jpg"),
      active: false,
    },
    {
      id: 10,
      name: "Dog",
      image: require("./Images/dog.jpg"),
      active: false,
    },
  ];

  const [memoryState, setMemoryState] = useState(memoryData);
  const [prevCard, setPrevCard] = useState(null);

  const handleMemoryClick = (card) => {
    const newState = memoryState.map((item) => {
      if (item.id === card.id) {
        if (prevCard && prevCard.name === card.name) {
          item.active = true;
        } else {
          item.active = !item.active;
        }
        setPrevCard(item);
      }
      return item;
    });

    setMemoryState(newState);
  };

  const handleRestart = () => {
    setMemoryState(memoryData);
  };

  return (
    <div className="grid-container">
      {memoryState.map((card) => (
        <>
          <img
            className="imgenes"
            src={card.active ? card.image : require("./Images/question.jpg")}
            alt={card.name}
            key={card.id}
            onClick={() => handleMemoryClick(card)}
          />
        </>
      ))}
      <button className="btn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}
