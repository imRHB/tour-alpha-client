import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import DiscountItems from '../DiscountOffer/DiscountItems/DiscountItems';
import LandingTourPack from '../LandingTourPack/LandingTourPack';
import TeamMember from '../Team/TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LandingTourPack></LandingTourPack>
            <DiscountItems></DiscountItems>
            <TeamMember></TeamMember>
            <Activity></Activity>
        </div>
    );
};

export default Home;