import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const TourPackage = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://shrieking-goosebumps-58774.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Featured Packages</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {
                    packages.map(packg => <Package
                        key={packg._id}
                        packg={packg}
                    ></Package>)
                }
            </Row>
        </div>
    );
};

export default TourPackage;