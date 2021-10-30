import React from 'react';
import Services from '../../AlphaService/Services/Services';
import TourPackage from '../../TourAlphaPackage/TourPackage/TourPackage';
import Banner from '../Banner/Banner';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import TeamMember from '../Team/TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackage></TourPackage>
            <Services></Services>
            <DiscountOffer></DiscountOffer>
            <TeamMember></TeamMember>
        </div>
    );
};

export default Home;