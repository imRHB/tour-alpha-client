import React from 'react';
import AddPackage from '../AddPackage/AddPackage';
import AllBooking from '../AllBooking/AllBooking';
import MyBooking from '../MyBooking/MyBooking';

const Dashboard = () => {
    return (
        <div className="container my-5">
            <h3>this is dashboard</h3>
            <MyBooking></MyBooking>
            <AllBooking></AllBooking>
            <AddPackage></AddPackage>
        </div>
    );
};

export default Dashboard;