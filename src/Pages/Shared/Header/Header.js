import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logout } = useFirebase();
    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    }

    const handleRegister = () => {
        history.push('/register');
    }

    return (
        <Navbar bg="light" variant="light">
            <Container className="flex-column flex-sm-row">
                <img src={logo} alt="logo" style={{ width: '48px', height: '48px', padding: '4px' }} className="my-3 my-md-3 my-lg-0" />
                <Nav className="flex-column flex-lg-row my-3 my-md-3 my-lg-0">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/packages">Tour Packages</NavLink>
                    <NavLink to="/discount-package">Offers</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    {
                        user?.email ? <>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </>
                            : ''
                    }
                </Nav>

                {user?.email ? <div className="d-flex align-items-center my-2 my-md-0">
                    <h5 className="mx-2 text-primary fw-bold m-0">{user.displayName}</h5>
                    <img className="mx-2 user-icon" src={user.photoURL} alt="" />
                    <button className="btn btn-outline-dark" onClick={logout}>Logout</button>
                </div>
                    : <div className="my-3 my-md-3 my-lg-0">
                        <button className="btn btn-outline-secondary me-2" onClick={handleLogin}>Login</button>
                        <button className="btn btn-secondary" onClick={handleRegister}>Register</button>
                    </div>}
            </Container>
        </Navbar>
    );
};

export default Header;