import React, { Component } from "react";

import PlayerHand from "./components/PlayerHand";
import PlayerActions from "./components/PlayerActions";
import PlayerScore from "./components/PlayerScore";

import DealerActions from "./components/DealerActions"

import GameInfo from "../GameInfo";

//for buttons and alerts and other similar things, please use reactstrap, unless you
//have a specific style you are going for.  https://reactstrap.github.io/

//There is a css file provided in this directory, you can import it here and style anything you like
//but please do not modify the App.css stylesheet

export default class BlackJack extends Component {
  constructor(props) {
    super();
    this.state = {
      playerhand: [],
      deck: [],
      dealerhand: [],
      playing: false,
    };
    
  }

  componentDidMount() {
    this.setState({
      deck: this.getDeck(),
    });
  }

  startGame =()=>{

    let val = Math.floor(Math.random() * this.state.deck.length);
    const new_card = this.state.deck[val];

    const new_deck = [...this.state.deck];
    new_deck.splice(val, 1);

    val = Math.floor(Math.random() * new_deck.length);
    const second_new_card = new_deck[val];

    new_deck.splice(val, 1);

    val = Math.floor(Math.random() * new_deck.length);
    const dealer_card = new_deck[val];

    new_deck.splice(val, 1);

    this.setState({
      playerhand: [new_card, second_new_card],
      dealerhand: [dealer_card],
      deck: new_deck,
      playing: true
    });
  }

  
  render() {
    // Modify the two following variables to make sure the correct info is presented about the game
    const about = "A simple low stakes game of blackjack";
    const contributors = "Ben and Nashmeyah";

    if(this.state.playing == true){
      return (
      <div >
        <div class="player">
          <PlayerHand playerhand={this.state.playerhand} />
          <PlayerActions
            playerhand={this.state.playerhand}
            deck={this.state.deck}
            addCardToPlayer={this.addCardToPlayer}
            resetPlayerHand={this.resetPlayerHand}
            playerStayButton={this.playerStayButton}
          />
          <h3>Player Score: {this.getScore(this.state.playerhand)}</h3>
        </div>
        
        <div class="dealer">
          <h2>Dealer's Hand <br/>{this.state.dealerhand}</h2>
          <DealerActions
            dealerhand={this.state.dealerhand}
            deck={this.state.deck}
            addCardToDealer={this.addCardToDealer}
            resetDealerHand={this.resetDealerHand}
          />
          <h3>Dealer Score: {this.getScore(this.state.dealerhand)}</h3>
        </div>

        {/* GameInfo must remain at the bottom of your root component */}
        <GameInfo about={about} contributors={contributors} />
      </div>
    );
    } else {
        return (
          <div>
            <button onClick={this.startGame}>Start Game</button>
          </div>
        )
    }
  }

  addCardToPlayer=() =>{
    const val = Math.floor(Math.random() * this.state.deck.length);
    const new_card = this.state.deck[val];

    const new_deck = [...this.state.deck];
    new_deck.splice(val, 1);

    this.setState({
      playerhand: [...this.state.playerhand, new_card],
      deck: new_deck,
    });
    // console.log("card was added")
    // console.log(this.state.playerhand)
  }

  addCardToDealer=()=>{
    const val = Math.floor(Math.random() * this.state.deck.length);
    const new_card = this.state.deck[val];

    const new_deck = [...this.state.deck];
    new_deck.splice(val, 1);

    this.setState({
      dealerhand: [...this.state.dealerhand, new_card],
      deck: new_deck,
    });
  }

  resetPlayerHand=() =>{
    this.setState({
      playerhand: [],
      deck: this.getDeck(),
    });
  }

  resetDealerHand=()=> {
    this.setState({
      dealerhand: [],
      deck: this.getDeck(),
    });
  }
  
  getScore(playerhand){
    let aces = 0;
    let base_score = 0;
    console.log("function called");
    playerhand.forEach((card) => {
      console.log("card counted");
      if (
        card[0] === "K" ||
        card[0] === "Q" ||
        card[0] === "J" ||
        card[0] === "1"
      ) {
        base_score += 10;
      } else if (card[0] === "A") {
        base_score += 1;
        aces += 1;
      } else {
        base_score += parseInt(card[0]);
      }
    });

    const scores = [];
    for (var i = 0; i < aces + 1; i++) {
      scores.push(base_score);
      base_score += 10;
    }

    // viable_scores = []
    const viable_scores = scores.filter((point) => point <= 21);
    let current_score;
    if (viable_scores.length > 0) {
      current_score = Math.max(...viable_scores);
    } else {
      current_score = "Bust";
    }
    console.log(current_score);
    return current_score;
  };

  playerStayButton =()=>{
    //function, if player hits stay, dealer keeps pulling cards till score == "Bust" or <= 21
    
    if(this.getScore(this.state.dealerhand) < this.getScore(this.state.playerhand)){
      if(this.getScore(this.state.dealerhand) < 21){
         this.addCardToDealer()
      }
      console.log("Dealer Wins")
    }

    if(this.getScore(this.state.dealerhand) == "Bust"){
      console.log("player wins")
    }
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
