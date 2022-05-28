import React from 'react';
import mercedes from "../../images/mercedes-benz-car-logo-png-brand-image-1.png";
import bmw from "../../images/bmw-car-logo-png-brand-image-2.png";
import toyota from "../../images/car-logo-brands-png-transparent-image-7.png";

import company1 from "../../images/company/company1.jpg";
import company2 from "../../images/company/company2.jpg";
import company3 from "../../images/company/company3.jpg";
import company4 from "../../images/company/company4.jpg";
import company5 from "../../images/company/company5.jpg";
import company6 from "../../images/company/company6.jpg";

const CompanyView = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-primary pt-10 pb-16">
            <h2 className='text-5xl font-bold'>Company strength</h2>
            <div className='py-4 flex justify-center flex-wrap'>
                <img className="lg:w-56 w-32 m-4" src={company1} alt="Burger" />
                <img className="lg:w-56 w-32 m-4" src={company2} alt="Burger" />
                <img className="lg:w-56 w-32 m-4" src={company3} alt="Burger" />
                <img className="lg:w-56 w-32 m-4" src={company4} alt="Burger" />
                <img className="lg:w-56 w-32 m-4" src={company5} alt="Burger" />
                <img className="lg:w-56 w-32 m-4" src={company6} alt="Burger" />

            </div>
            <h2 className='text-4xl font-bold mt-8'>Our partners</h2>
            <div className='flex flex-wrap justify-around mt-8'>
                <div className=''>
                    <img className='mx-auto w-40' src={mercedes} alt="" />
                    <p>VOLKSWAGEN</p>
                </div>
                <div className=''>
                    <img className='mx-auto w-40' src={bmw} alt="" />
                    <p>BMW</p>
                </div>
                <div className=''>
                    <img className='mx-auto w-40' src={toyota} alt="" />
                    <p>SKODA</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyView;