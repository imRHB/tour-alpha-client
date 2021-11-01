import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Dashboard</h2>
            <hr />

            <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-3">
                <Col className="col-12 col-md-12 col-lg-4 col-xl-4">
                    <Nav className="flex-column dash-nav">
                        <NavLink to="/manage-packages">Manage Packages</NavLink>
                        <NavLink to="/all-booking">All Booking</NavLink>
                        <NavLink to="/my-booking">My Booking</NavLink>
                        <NavLink to="/add-package">Add Package</NavLink>
                    </Nav>
                </Col>

                <Col className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="container bg-light">
                        {/* some space */}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
