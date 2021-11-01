import React, { useEffect, useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://shrieking-goosebumps-58774.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [packages]);

    // Delete Package
    const handleDeletePackage = packgId => {
        const deleteConfirmation = window.confirm('Do you really want to delete the package? It can\'t be undone.');

        if (deleteConfirmation) {
            const packgUrl = `https://shrieking-goosebumps-58774.herokuapp.com/packages/${packgId}`;
            fetch(packgUrl, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Package deleted successfully.');
                })
        }
    };

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
                        <h3 className="text-center fs-3 fw-bold text-info py-4">Available Packages</h3>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Package Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    packages.map((packg, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{packg.title}</td>
                                            <td>{packg.location}</td>
                                            <td>${packg.price}</td>
                                            <td><button onClick={() => handleDeletePackage(packg._id)} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ManagePackages;