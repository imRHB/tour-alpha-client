import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DiscountPackage = (props) => {
    const { _id, title, img, location, description, price, offerPrice } = props.discPack;

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
                            <p className="text-info">${offerPrice}<span className="fs-6 fw-normal"><small>/per person</small></span></p>
                            <p className="text-danger"><strike>${price}</strike></p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <Link to={`/discount-package/${_id}`}>
                                <button className="btn btn-outline-secondary">Check Now</button>
                            </Link>
                            {/* <Link to={`/packages/booking/${_id}`}>
                                <button className="btn btn-outline-success">Book Now</button>
                            </Link> */}
                            <button className="btn btn-outline-success">Book Now</button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DiscountPackage;