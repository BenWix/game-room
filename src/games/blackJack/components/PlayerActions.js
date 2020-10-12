import React from "react";

const PlayerActions = (props) => {
  // const [hand, setHand] = useState([]);
  // const addCard = () => {
  //   setHand([
  //     ...hand,
  //     {
  //       id: hand.length,
  //       value: props.deck[Math.floor(Math.random() * props.deck.length)],
  //     },
  //   ]);
  // };

  // const clearHand = () => {
  //   setHand([]);
  // };

  return (
    <React.Fragment>
      {/* A button to Draw a card */}
      {/* <ul>
        {props.hand.map((card) => (
          <li >{card.value}</li>
        ))}
      </ul> */}

      <button onClick={props.addCard}>Draw card</button>

      {/* A button to reset the hand */}
      <button onClick={props.resetHand}>Reset Hand</button>

      {/* resets the hand count i.e resets the state in BlackJack component */}
    </React.Fragment>
  );
};
export default PlayerActions;
