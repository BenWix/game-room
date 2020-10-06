import React, { Component } from 'react'

export default class PlayerHand extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Player's Hand</h2>
                <h3>{this.props.hand}</h3>
            </React.Fragment>
        )
    }
}
