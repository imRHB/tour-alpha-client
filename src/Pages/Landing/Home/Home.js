import React from 'react';
import TourPackage from '../../TourAlphaPackage/TourPackage/TourPackage';
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
        </div>
    );
};

export default Home;