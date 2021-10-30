import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, title, location, img, description, price, people, day, night } = props.packg;

    return (
        <Col>
            <Card className="h-100 rounded-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{location}</p>
                        <p>{description?.slice(0, 100)} . . .</p>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <Link to={`/packages/details/${_id}`}>
                                <button className="btn btn-outline-secondary">Details</button>
                            </Link>
                            <button className="btn btn-outline-success">Book Now</button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;