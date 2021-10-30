import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { itemTitle, itemImg } = props.service;
    return (
        <Col>
            <Card className="h-100 rounded-3">
                <Card.Img variant="top" src={itemImg} />
                <Card.Body>
                    <Card.Title>{itemTitle}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;