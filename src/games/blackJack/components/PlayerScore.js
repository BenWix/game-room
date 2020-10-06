import React, { Component } from 'react'

export default class PlayerScore extends Component {
    getScore() {
        
        let aces = 0
        let base_score = 0

        this.props.hand.forEach(card => {
            if (card[0] === 'K' || card[0] === 'Q' || card[0] === 'J' || card[0] === '1') {
                base_score += 10
            } else if (card[0] ==='A') {
                base_score += 10
                aces += 1
            } else {
                base_score += parseInt(card[0])
            }
        })

        const scores = []
        for(var i=0; i < aces + 1; i++){
            scores.push(base_score)
            base_score += 10
        }

        const viable_scores = scores.filter(points => point <= 21)
        return Math.max(...viable_scores)
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Score: {}</h3>
            </React.Fragment>
        )
    }
}