import React from 'react';

const ReviewCards = () => {
    return (
        <div className="card lg:w-96 bg-base-200 mx-auto shadow-xl">
            <figure className="px-10 pt-6">
                <div className="avatar">
                    <div className="w-48 rounded-xl">
                        <img src="https://api.lorem.space/image/face?hash=64318" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
            </div>
        </div>
    );
};

export default ReviewCards;