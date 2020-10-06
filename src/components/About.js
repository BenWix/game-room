import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <h1>Welcome to the Game Room!</h1>
                <p>The game room is a project designed to allow a individuals to practice and 
                    apply newly acquired programming skills in the setting of a larger project. 
                    There are an ever growing number of games or other neat coding accomplishments
                    scattered across the site. Each page will have a list of contributors at the bottom
                    so that budding developers can display their creativity and coding prowess.
                </p>

                <p>This site is also supposed to let fresh developers practice working as a team on 
                    a larger project. They will need to work with version control, pair programming, and 
                    customer requirements. It is supposed to be a fun and approachable way for individuals
                    to prepare for the factors in the workplace that may not have been taught in a bootcamp.
                </p>

                <p>Please feel free to look around and have fun. If any of the pages impress you, do 
                    not hesitate to look at the contributors and check out some of their other work. And
                    if you are interested in contributing to the site, head over to our github page and check 
                    out the ReadMe, or reach out to the site moderators.
                </p>

                
            </div>
        )
    }
}
