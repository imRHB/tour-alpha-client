import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DiscountItem = (props) => {
    const { title, img, location, description, price, offerPrice, people, day, night } = props.discItem;

    return (
        <Col>
            <Card className="h-100 rounded-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{location}</p>
                        <p>{description.slice(0, 100)} . . .</p>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between fs-3 fw-bold">
                            <p className="text-success">${offerPrice}</p>
                            <p className="text-danger"><strike>${price}</strike></p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <Link to="/details">
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

export default DiscountItem;