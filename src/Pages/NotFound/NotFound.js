import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center error-container">
                    <h1 className="fs-1 fw-bold text-danger">Error 404</h1>
                    <p className="text-muted">The requested URL was not found on the server</p>
                    <p>Visit <span className="error-url"><Link to="/home" >Home</Link></span> until the problem is resolved</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;