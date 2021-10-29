import React from 'react';
import TourPackage from '../../TourAlphaPackage/TourPackage/TourPackage';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="container">
            <h1 className="text-center fs-1 fw-bold text-secondary">Welcome to Tour Alpha</h1>
            <p>This project will be made with React JS, React Bootstrap, React Hook Form, React Router Dom, FontAwesome, Node JS, MongoDB</p>
            <p>Firebase hosting completed!</p>
            <hr />
            <Banner></Banner>
            <TourPackage></TourPackage>
        </div>
    );
};

export default Home;