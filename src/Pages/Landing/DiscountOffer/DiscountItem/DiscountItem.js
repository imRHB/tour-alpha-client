import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DiscountItem = (props) => {
    const { _id, title, img, location, description, price, offerPrice } = props.discItem;

    return (
        <Col>
            <Card className="h-100 rounded-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p className="fs-4 fw-bold">{location}</p>
                        <p>{description.slice(0, 100)} . . .</p>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between fs-3 fw-bold">
                            <p className="text-info">${offerPrice}</p>
                            <p className="text-danger"><strike>${price}</strike></p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <Link to={`/packages/details/${_id}`}>
                                <button className="btn btn-outline-secondary">Check Now</button>
                            </Link>
                            <Link to={`/packages/booking/${_id}`}>
                                <button className="btn btn-outline-success">Book Now</button>
                            </Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DiscountItem;