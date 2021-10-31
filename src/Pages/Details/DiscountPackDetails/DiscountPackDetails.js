import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DiscountPackDetails = () => {
    const { packgId } = useParams();

    const [diskPack, setDiskPack] = useState({});
    const { title, location, img, description, price, people, day, night } = diskPack;

    useEffect(() => {
        fetch(`http://localhost:5000/discount-package/${packgId}`)
            .then(res => res.json())
            .then(data => setDiskPack(data));
    }, []);

    return (
        <div>

        </div>
    );
};

export default DiscountPackDetails;