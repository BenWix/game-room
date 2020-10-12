import React, { Component } from 'react'

import GameInfo from '../GameInfo'

//for buttons and alerts and other similar things, please use reactstrap, unless you 
//have a specific style you are going for.  https://reactstrap.github.io/

//There is a css file provided in this directory, you can import it here and style anything you like
//but please do not modify the App.css stylesheet


export default class ExampleGame extends Component {
    render() {
        // Modify the two following variables to make sure the correct info is presented about the game
        const about = 'A quick description of your game must be passed to GameInfo as a prop'
        const contributors = 'A string of the contributors for this page'

        return (
            <div>
                {/* have fun and make something you enjoy! Try and work with some peers to practice that as well */}
                Here is the example Game

                {/* GameInfo must remain at the bottom of your root component */}
                <GameInfo about={about} contributors={contributors} />
            </div>
        )
    }
}
