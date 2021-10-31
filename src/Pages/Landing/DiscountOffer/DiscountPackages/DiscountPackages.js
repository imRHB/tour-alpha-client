import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DiscountPackage from '../DiscountPackage/DiscountPackage';

const DiscountPackages = () => {
    const [discountPacks, setDiscountPacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/discount-package')
            .then(res => res.json())
            .then(data => setDiscountPacks(data));
    }, []);

    return (
        <div className="container my-5">
            <h3 className="text-center fs-1 fw-bold text-secondary my-5">Special Offer and Discount</h3>
            <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                {
                    discountPacks.map(discPack => <DiscountPackage
                        key={discPack._id}
                        discPack={discPack}
                    ></DiscountPackage>)
                }
            </Row>
        </div>
    );
};

export default DiscountPackages;