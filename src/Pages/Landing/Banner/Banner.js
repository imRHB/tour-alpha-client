import React from 'react';
import banner from '../../../images/banner/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="cover-img" style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', height: '90vh' }}>
                {/* background image goes here */}
                <div className="container text-center">
                    <p className="text-dark fs-1 fw-bold pt-5">To Enjoy Your Vacation Travel with <span className="text-danger">Tour Alpha</span></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;