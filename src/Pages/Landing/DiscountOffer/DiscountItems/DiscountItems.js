import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DiscountItem from '../DiscountItem/DiscountItem';

const DiscountItems = () => {
    const [discountItems, setDiscountItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/discount-offers')
            .then(res => res.json())
            .then(data => setDiscountItems(data));
    }, []);

    return (
        <div className="container my-5">
            <h3 className="text-center fs-1 fw-bold text-secondary my-5">Special Offer and Discount</h3>
            <Row>
                {
                    discountItems.map(discItem => <DiscountItem
                        key={discItem._id}
                        discItem={discItem}
                    ></DiscountItem>)
                }
            </Row>
        </div>
    );
};

export default DiscountItems;