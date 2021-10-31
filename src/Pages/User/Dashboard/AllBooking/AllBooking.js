import React, { useEffect, useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const AllBooking = () => {
    const [bookedPacks, setBookedPacks] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/booked-packages')
            .then(res => res.json())
            .then(data => setBookedPacks(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Dashboard</h2>
            <hr />

            <Row xs={12} sm={12} md={8} lg={8}>

                <Col className="col-md-12 col-lg-4 col-xl-4">
                    <Nav className="flex-column dash-nav">
                        <NavLink to="/dashboard">Manage Packages</NavLink>
                        <NavLink to="/all-booking">All Booking</NavLink>
                        <NavLink to="/my-Booking">My Booking</NavLink>
                        <NavLink to="/add-package">Add Package</NavLink>
                    </Nav>
                </Col>

                <Col className="col-md-12 col-lg-8 col-xl-8">
                    <div className="bg-light">
                        <h3 className="text-center fs-3 fw-bold text-info py-4">All Booking</h3>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookedPacks.map((bookedPack, index) => <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{bookedPack.title}</td>
                                        <td>{user?.email}</td>
                                        <td>{bookedPack.location}</td>
                                        <td>Pending</td>
                                        <td><button className="btn btn-success">Approve</button></td>
                                        <td><button className="btn btn-danger">Remove</button></td>
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

export default AllBooking;