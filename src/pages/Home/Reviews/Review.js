import React from 'react';
import ReviewCards from './ReviewCards';

const Review = () => {
    return (
        <div className='py-10'>
            <h1 className='text-3xl font-bold text-accent mb-6'>Reviews </h1>
            <div className='grid gap-y-10 grid-cols-1 lg:grid-cols-2 '>
                <ReviewCards></ReviewCards>
                <ReviewCards></ReviewCards>
                <ReviewCards></ReviewCards>
            </div>

        </div>
    );
};

export default Review;