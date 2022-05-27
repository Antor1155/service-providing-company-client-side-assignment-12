import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: "url(https://api.lorem.space/image/car?w=1000&h=800)"}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-accent font-bold">Dear customer</h1>
                    <p className="mb-5 text-white">we are tenacious, expressive, dedicated highly specialized in the tools space across various applications. we want to sustainably develop with our international partners by offering them tools that win every single time. </p>
                    <Link to="/order" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;