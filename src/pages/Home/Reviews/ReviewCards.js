import React from 'react';
import star from "../../../images/star-svgrepo-com.svg"

const ReviewCards = () => {
    return (
        <div className="card lg:w-96 bg-base-200 mx-auto shadow-xl">
            <div className="avatar mx-auto pt-3">
                <div className="w-48 rounded-xl">
                    <img src="https://api.lorem.space/image/face?hash=64318" alt='user'/>
                </div>
            </div>
            <div className="card-body items-center text-center">
                <div className='flex'>
                    <img className='w-4' src={star} alt="" />
                    <img className='w-4' src={star} alt="" />
                </div>
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
        </div>
    );
};

export default ReviewCards;