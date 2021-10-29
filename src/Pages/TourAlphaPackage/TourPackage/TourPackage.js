import React from 'react';
import { useHistory } from 'react-router';

const TourPackage = () => {
    const history = useHistory();

    const handlePackageDetails = () => {
        history.push('/package-details');
    }

    return (
        <div className="container my-5">
            <h3>this is tour package</h3>
            <button className="btn btn-outline-primary" onClickCapture={handlePackageDetails}>Details</button>
            <button className="btn btn-outline-primary" onClickCapture={handlePackageDetails}>Details</button>
            <button className="btn btn-outline-primary" onClickCapture={handlePackageDetails}>Details</button>
            <button className="btn btn-outline-primary" onClickCapture={handlePackageDetails}>Details</button>
            <button className="btn btn-outline-primary" onClickCapture={handlePackageDetails}>Details</button>
            <button className="btn btn-outline-primary" onClickCapture={handlePackageDetails}>Details</button>
            <button className="btn btn-outline-primary" onClickCapture={handlePackageDetails}>Details</button>
        </div>
    );
};

export default TourPackage;