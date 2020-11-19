import React, { Component } from "react";

class PlayerHand extends Component {
  render() {
    const cardStyle = {
      height: "150px",
      width: "100px",
      border: "4px solid red",
      display: "inline-flex",
      margin: "5px",
      padding: "10px",
      fontSize: "55px",
      alignItems: "center",
    };

    const playerCards = this.props.playerhand.map((card) => {
      return <p style={cardStyle}>{card}</p>;
    });

    return (
      <React.Fragment>
        <h2>Player's Hand</h2>
        {playerCards}
      </React.Fragment>
    );
  }
}
export default PlayerHand;
