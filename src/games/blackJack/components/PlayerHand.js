import React, { Component } from "react";

export default class PlayerHand extends Component {
  render() {
    const card = {
      height: "150px",
      width: "100px",
      border: "1px solid red",
    };

    return (
      <React.Fragment>
        <h2>Player's Hand</h2>
        <h3 style={card}>{this.props.playerhand}</h3>
      </React.Fragment>
    );
  }
}
