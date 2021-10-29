import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container className="">
                <Nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/tour-package">Tour Package</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;