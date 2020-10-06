import React, { useState } from "react";

const PlayerActions = (props) => {
  const [hand, setHand] = useState([]);
  const addCard = () => {
    setHand([
      ...hand,
      {
        id: hand.length,
        value: props.deck[Math.floor(Math.random() * props.deck.length)],
      },
    ]);
  };

  const clearHand = () => {
    setHand([]);
  };

  return (
    <React.Fragment>
      {/* A button to Draw a card */}
      <ul>
        {hand.map((card) => (
          <li key={card.id}>{card.value}</li>
        ))}
      </ul>

      <button onClick={addCard}>Draw card</button>

      {/* A button to reset the hand */}
      <button onClick={clearHand}>Reset Hand</button>

      {/* resets the hand count i.e resets the state in BlackJack component */}
    </React.Fragment>
  );
};
export default PlayerActions;
