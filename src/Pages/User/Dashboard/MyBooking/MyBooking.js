import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyBooking = () => {

    return (
        <div className="container my-5">
            <h3 className="text-center fs-3 fw-bold text-info py-4">My Booking</h3>
            <Nav className="my-3">
                <NavLink to="/dashboard">Manage Packages</NavLink>
                <NavLink to="/all-booking">All Booking</NavLink>
                <NavLink to="/my-Booking">My Booking</NavLink>
                <NavLink to="/add-package">Add Package</NavLink>
            </Nav>
        </div>
    );
};

export default MyBooking;