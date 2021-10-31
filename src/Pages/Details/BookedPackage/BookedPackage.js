import React, { useEffect, useState } from 'react';

const BookedPackage = () => {
    const [bookedPacks, setBookedPacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/booked-packages')
            .then(res => res.json())
            .then(data => setBookedPacks(data));
    }, []);

    return (
        <div>
            <h2>booked package details {bookedPacks.length}</h2>
        </div>
    );
};

export default BookedPackage;