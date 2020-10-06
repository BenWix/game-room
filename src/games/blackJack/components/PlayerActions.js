import React, { Component } from 'react'

export default class PlayerActions extends Component {
    render() {
        return (
            <React.Fragment>
                
                {/* A button to Draw a card */}
                <button>Draw card</button>

                {/* A button to reset the hand */}
                <button>Reset Hand</button>
                
            </React.Fragment>
        )
    }
}
