import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Package = (props) => {
    const { name, imgReg, experience } = props.packg;

    return (
        <Col>
            <Card className="h-100 rounded-3">
                <Card.Img variant="top" src={imgReg} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>total person {experience}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;