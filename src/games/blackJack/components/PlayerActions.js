import React from "react";

const PlayerActions = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.addCardToPlayer}>Hit</button>
      <button
        disabled={props.playerscore === "Bust"}
        onClick={props.playerStayButton}
      >
        Stay
      </button>
    </React.Fragment>
  );
};
export default PlayerActions;
