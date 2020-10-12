
import React, { Component } from "react";

import PlayerHand from "./components/PlayerHand";
import PlayerActions from "./components/PlayerActions";
import PlayerScore from "./components/PlayerScore";

import GameInfo from "../GameInfo";

//for buttons and alerts and other similar things, please use reactstrap, unless you
//have a specific style you are going for.  https://reactstrap.github.io/

//There is a css file provided in this directory, you can import it here and style anything you like
//but please do not modify the App.css stylesheet

export default class BlackJack extends Component {
  constructor(props) {
    super();
    this.state = {
      hand: [],
      score: 0,
      deck: [],
    };

    this.addCard = this.addCard.bind(this)
    this.resetHand = this.resetHand.bind(this)
  }

  componentDidMount() {
    this.setState({
      deck: this.getDeck(),
    });
  }

  render() {
    // Modify the two following variables to make sure the correct info is presented about the game
    const about = "A simple low stakes game of blackjack";
    const contributors = "Ben and Nashmeyah";

    return (
      <div>
        {/* Player's hand */}
        <PlayerHand hand={this.state.hand} />

        <PlayerActions hand={this.state.hand} deck={this.state.deck} addCard={this.addCard} resetHand={this.resetHand}/>
        <PlayerScore hand={this.state.hand}/>
        {/* GameInfo must remain at the bottom of your root component */}
        <GameInfo about={about} contributors={contributors} />
      </div>
    );
  }

  addCard(){
    const val = Math.floor(Math.random() * this.state.deck.length )
    const new_card = this.state.deck[val]

    const new_deck = [...this.state.deck]
    new_deck.splice(val, 1)
    
    this.setState({
      hand: [...this.state.hand, new_card],
      deck: new_deck
    })
  }

  resetHand() {
    this.setState({
      hand: [],
      deck: this.getDeck()
    })
  }
  
  getDeck(count = 1) {
    const deck = [];
    const suits = ["S", "D", "C", "H"];
    const numbers = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    numbers.forEach((num) => {
      suits.forEach((suit) => {
        deck.push(num + suit);
      });
    });
    //   console.log(deck);
    return deck;
  }
}