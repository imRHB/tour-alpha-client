import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const DiscountPackDetails = () => {
    const { packgId } = useParams();

    const [diskPack, setDiskPack] = useState({});
    const { title, location, img, description, price, offerPrice, people, day, night } = diskPack;

    useEffect(() => {
        fetch(`https://shrieking-goosebumps-58774.herokuapp.com/discount-package/${packgId}`)
            .then(res => res.json())
            .then(data => setDiskPack(data));
    }, []);

    const handlePackageBooking = diskPack => {
        fetch(`https://shrieking-goosebumps-58774.herokuapp.com/booked-packages`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(diskPack)
        })
            .then(res => res.json())
            .then(result => console.log(result));
        alert('You\'ve booked the package successfully. Check in all booking page.');
    };

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Package Details</h2>

            <Row xs={1} md={1} xl={2} className="g-4">
                <h1 className="fs-2 fw-bold text-info text-uppercase">{title}</h1>

                <Col className="col-md-12 col-lg-8 col-xl-8">
                    <div className="rounded-3">
                        <img className="img-fluid rounded-3" src={img} alt="" />
                        <div className="my-4">
                            <p>{description}</p>
                            <p>{description}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </Col>

                <Col className="col-md-12 col-lg-4 col-xl-4">
                    <div className="bg-dark text-light p-4 rounded-3">
                        <p className="fs-4 fw-bold">{location}</p>
                        <h2 className="text-danger"><small>Previously</small> <strike>${price}</strike></h2>
                        <h2>${offerPrice}<span className="fs-6">/per person</span></h2>
                        <p>{day} DAYS / {night} NIGHT</p>
                        <p>{people} People</p>
                        <button onClick={() => handlePackageBooking(diskPack)} className="btn btn-outline-light">Book Now</button>
                    </div>
                    <div className="bg-light my-3 px-2 py-4 rounded-3">
                        <p className="text-center fs-4 fw-bold text-danger">Travel Safety Tips</p>
                        <ul className="text-secondary">
                            <li>Do your research</li>
                            <li>Don't draw attention</li>
                            <li>Make copies of important documents</li>
                            <li>Keep your friends and family updated</li>
                            <li>Be aware of your surroundings</li>
                        </ul>
                    </div>
                    <div className="bg-info rounded-3">
                        <p className="text-center fs-4 fw-bold text-light">Program</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className="fw-bold me-2">D1</span>Departure at the airport and arrival at the hotel</li>
                            <li className="list-group-item"><span className="fw-bold me-2">D2</span>Visit the main museums and lunch included</li>
                            <li className="list-group-item"><span className="fw-bold me-2">D3</span>Excursion in the natural oasis and picnic</li>
                            <li className="list-group-item"><span className="fw-bold me-2">D4</span>Transfer to the airport and return to the agency</li>
                            <li className="list-group-item"><span className="fw-bold me-2">D5</span>Excursion in the natural oasis and picnic</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default DiscountPackDetails;