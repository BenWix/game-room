import React, { Component } from 'react'

import PlayerHand from './components/PlayerHand'
import PlayerActions from './components/PlayerActions'
import PlayerScore from './components/PlayerScore'


import GameInfo from '../GameInfo'

//for buttons and alerts and other similar things, please use reactstrap, unless you 
//have a specific style you are going for.  https://reactstrap.github.io/

//There is a css file provided in this directory, you can import it here and style anything you like
//but please do not modify the App.css stylesheet


export default class BlackJack extends Component {
    constructor(props) {
        super()
        this.state = {
            hand: [],
            score: 0,
            deck: []
        }
    }

    componentDidMount(){
        this.setState({
            deck: getDeck()
        })
    }

    render() {
        // Modify the two following variables to make sure the correct info is presented about the game
        const about = 'A simple low stakes game of blackjack'
        const contributors = 'A string of the contributors for this page'

        
        return (
            <div>
                {/* Player's hand */}
                <PlayerHand hand={this.state.hand}/>

                <PlayerActions hand={this.state.hand}/>
                <PlayerScore />
                {/* GameInfo must remain at the bottom of your root component */}
                <GameInfo about={about} contributors={contributors} />
            </div>
        )
    }

}
        function getDeck(count=1) {
            const deck = []
            const suits = ['S', 'D', 'C', 'H']
            const numbers = ['2', '3', '4', '5', '6','7','8','9','10','J','Q','K','A']
            numbers.forEach(num => {
                suits.forEach(suit => {
                    deck.push(num + suit)
                })
            });
            console.log(deck)
            return deck
        } 
