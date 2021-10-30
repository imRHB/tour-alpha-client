import React from 'react';
import TourPackage from '../../TourAlphaPackage/TourPackage/TourPackage';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import TeamMember from '../Team/TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackage></TourPackage>
            <DiscountOffer></DiscountOffer>
            <TeamMember></TeamMember>
            <Activity></Activity>
        </div>
    );
};

export default Home;