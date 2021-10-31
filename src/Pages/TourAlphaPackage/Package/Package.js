import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, title, location, img, description, price, day, night } = props.packg;

    const handlePackageBooking = (packgId) => {
        console.log(packgId);
        /* fetch(`http://localhost:5000/packages/${packgId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => console.log(data)); */
    };

    return (
        <Col>
            <Card className="h-100 rounded-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p className="fs-4 fw-bold">{location}</p>
                        <p>{description?.slice(0, 60)} . . .</p>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between fs-3 fw-bold">
                            <p className="text-info">${price}<span className="fs-6 fw-normal"><small>/per person</small></span></p>
                            <p className="fs-6 text-muted">{day}D / {night}N</p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <Link to={`/packages/${_id}`}>
                                <button className="btn btn-outline-secondary">Check Now</button>
                            </Link>
                            <button onClick={() => handlePackageBooking(_id)} className="btn btn-outline-success">Book Now</button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;