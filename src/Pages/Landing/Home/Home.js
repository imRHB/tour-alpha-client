import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import DiscountPackages from '../DiscountOffer/DiscountPackages/DiscountPackages';
import LandingTourPack from '../LandingTourPack/LandingTourPack';
import TeamMember from '../Team/TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LandingTourPack></LandingTourPack>
            <DiscountPackages></DiscountPackages>
            <TeamMember></TeamMember>
            <Activity></Activity>
        </div>
    );
};

export default Home;