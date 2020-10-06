import React from 'react'

const PlayerScore = (props) => {
    
    const getScore = () => {
        
        let aces = 0
        let base_score = 0
        console.log('function called')
        props.hand.forEach(card => {
            console.log('card counted')
            if (card[0] === 'K' || card[0] === 'Q' || card[0] === 'J' || card[0] === '1') {
                base_score += 10
            } else if (card[0] ==='A') {
                base_score += 1
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
        
        // viable_scores = []
        const viable_scores = scores.filter(point => point <= 21)
        let current_score
        if (viable_scores.length > 0) {
            current_score = Math.max(...viable_scores) 
        } else {
            current_score = 'Bust'
        }
        console.log(current_score)
        return current_score
    }

    return (
        <React.Fragment>
            <h3>Score: {getScore()}</h3>
        </React.Fragment>
    )

}

export default PlayerScore