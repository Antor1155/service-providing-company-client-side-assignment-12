import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: "url(https://api.lorem.space/image/car?w=1000&h=800)"}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl text-accent font-bold">Dear customer</h1>
                    <p class="mb-5 text-white">we are tenacious, expressive, dedicated highly specialized in the tools space across various applications. we want to sustainably develop with our international partners by offering them tools that win every single time. </p>
                    <Link to="/order" class="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;