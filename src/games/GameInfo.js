import React, {useState} from 'react'
import {Button, Fade} from 'reactstrap'

const GameInfo = (props) => {
    const [fadeIn, setFadeIn] = useState(false)

    const toggle = () => setFadeIn(!fadeIn)
    return(
        <React.Fragment>
            <div className='game-info'>
                <Button color='primary' onClick={toggle}>About</Button>
                <h5 className='contributors-quick'>Page Contributors: {props.contributors}</h5>
            </div>
            <div className='about'>
                <Fade in={fadeIn} tag='h5' className='about'>{props.about}</Fade>
            </div>
        </React.Fragment>
    )
}

export default GameInfo