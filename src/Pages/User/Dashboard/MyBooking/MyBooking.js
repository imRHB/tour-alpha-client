import React, { useEffect, useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const MyBooking = () => {
    const [bookedPacks, setBookedPacks] = useState([]);

    const [status, setStatus] = useState('Pending');

    const { user } = useAuth();

    useEffect(() => {
        fetch('https://shrieking-goosebumps-58774.herokuapp.com/booked-packages')
            .then(res => res.json())
            .then(data => setBookedPacks(data));
    }, [bookedPacks]);

    const handleBookedPack = packgId => {
        const removeConfirmation = window.confirm('Do you really want to removed the package from queue?');

        if (removeConfirmation) {
            const bookedPackUrl = `https://shrieking-goosebumps-58774.herokuapp.com/booked-packages/${packgId}`;
            fetch(bookedPackUrl, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Package removed from queue.');
                })
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Dashboard</h2>
            <hr />

            <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-3">
                <Col className="col-12 col-md-12 col-lg-4 col-xl-4">
                    <Nav className="flex-column dash-nav">
                        <NavLink to="/dashboard">Manage Packages</NavLink>
                        <NavLink to="/all-booking">All Booking</NavLink>
                        <NavLink to="/my-booking">My Booking</NavLink>
                        <NavLink to="/add-package">Add Package</NavLink>
                    </Nav>
                </Col>

                <Col className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="container bg-light">
                        <h3 className="text-center fs-3 fw-bold text-info py-4">My Booking</h3>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    {/* <th scope="col">Email</th> */}
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookedPacks.map((bookedPack, index) => <tr
                                        key={bookedPack._id}
                                    >
                                        <th scope="row">{index + 1}</th>
                                        <td>{bookedPack.title}</td>
                                        {/* <td>{user?.email}</td> */}
                                        <td>{status}</td>
                                        <td><button onClick={() => setStatus('Approved')} className="btn btn-success">Approve</button></td>
                                        <td><button onClick={() => handleBookedPack(bookedPack._id)} className="btn btn-danger">Remove</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MyBooking;