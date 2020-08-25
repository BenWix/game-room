import React, { Component } from 'react'
import {Card, CardTitle, CardText, Row, Col} from 'reactstrap'

export default class Contributors extends Component {
    render() {
        return (
            <Row>
                <Col sm='5'>
                <Card body className='text-left'>
                    <CardTitle><strong>Ben Wichser</strong></CardTitle>
                    <CardText>Ben is a mechanical engineer turned software developer. He 
                    is based in Louisville, KY and has a passion for difficult coding challenges, 
                    learning, teaching, and making a positive impact through technology. When he is 
                    not working on one of his projects, he is probably somewhere in the woods rock 
                    climbing, hiking, or mountain biking. He also performs and teaches partner acrobatics 
                    with his partner Meghan. To learn more about him check out his
                     <a href='https://github.com/BenWix'> GitHub</a> or his personal website, 
                    <a href='https://bwichser.com/'> bwichser.com</a></CardText>
                </Card>
                </Col>
            </Row>
        )
    }
}