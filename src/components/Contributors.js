import React, { Component } from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

export default class Contributors extends Component {
  render() {
    return (
      <Row>
        <Col sm="5">
          <Card body className="text-left">
            <CardTitle>
              <strong>Your Name Here!</strong>
            </CardTitle>
            <CardText>
              Put your Bio Here!
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}
