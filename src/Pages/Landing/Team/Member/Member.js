import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Member = (props) => {
    const { name, img, role } = props.member;
    return (
        <Col>
            <Card className="h-100 rounded-3 shadow border-0 text-center">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {role}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Member;