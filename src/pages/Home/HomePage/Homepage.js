import React from 'react';
import Banner from '../Banner';
import BusinessSum from '../BusinessSum';
import Review from '../Reviews/Review';
import Tools from '../Tools/Tools';


const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSum></BusinessSum>
            <Review></Review>
        </div>
    );
};

export default Homepage;