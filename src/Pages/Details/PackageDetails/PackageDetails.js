import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PackageDetails = () => {
    const { packgId } = useParams();

    const [packg, setPackage] = useState({});
    const { title, location, img, description, price, people, day, night } = packg;

    useEffect(() => {
        fetch(`http://localhost:5000/packages/details/${packgId}`)
            .then(res => res.json())
            .then(data => setPackage(data));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/discount-offers/${packgId}`)
            .then(res => res.json())
            .then(data => setPackage(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Package Details</h2>
            <div className="row">
                <h1 className="fs-2 fw-bold text-info text-uppercase">{title}</h1>
                <div className="col-8 my-3 rounded-3">
                    <img className="img-fluid rounded-3" src={img} alt="" />
                    <div className="my-4">
                        <p>{description}</p>
                        <p>{description}</p>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="col-4 my-3">
                    <div className="bg-dark text-light p-4 rounded-3">
                        <p className="fs-4 fw-bold">{location}</p>
                        <h2>${price} <span className="fs-6">/per person</span></h2>
                        <p>{day} DAYS / {night} NIGHT</p>
                        <p>{people} People</p>
                        <Link to={`/packages/booking/${packgId}`}>
                            <button className="btn btn-outline-light">Book Now</button>
                        </Link>
                    </div>
                    <div className="bg-light my-3 px-2 py-4 rounded-3">
                        <p className="text-center fs-4 fw-bold text-danger">Travel Safety Tips</p>
                        <ul className="text-secondary">
                            <li>Do your research</li>
                            <li>Don't draw attention</li>
                            <li>Make copies of important documents</li>
                            <li>Keep your friends and family updated</li>
                            <li>Be wary of public Wi-Fi</li>
                            <li>Safeguard your hotel room</li>
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
                            <li className="list-group-item"><span className="fw-bold me-2">D6</span>Visit the main museums and lunch included</li>
                            <li className="list-group-item"><span className="fw-bold me-2">D7</span>Departure at the airport and arrival at the hotel</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default PackageDetails;