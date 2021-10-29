import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container my-5 text-center">
            <h1>Error 404</h1>
            <p>Page not found</p>
            <NavLink to="/home">Home</NavLink>
        </div>
    );
};

export default NotFound;