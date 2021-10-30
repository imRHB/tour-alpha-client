import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const TourPackage = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    return (
        <div className="container my-5">
            <h2>Featured Packages</h2>
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