import React from "react";

const PlayerActions = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.addCardToPlayer}>Hit</button>
      <button onClick={props.playerStayButton}>Stay</button>

      {/* A button to reset the hand */}
      {/* <button onClick={props.resetPlayerHand}>Reset Hand</button> */}

      {/* resets the hand count i.e resets the state in BlackJack component */}
    </React.Fragment>
  );
};
export default PlayerActions;


