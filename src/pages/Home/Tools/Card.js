import React from 'react';

const card = () => {
    return (
        <div className="card lg:w-56 bg-base-100 mx-auto shadow-xl">
            <figure>
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>"If a dog chews shoes whose shoes does he choose?"</p>
                <p >Price: <strong className='text-accent'>$ 5 /</strong> pieces</p>
                <p className='text-primary'>available : 5000 pieces</p>
               
                <label className="label">
                    <span className="label-text-alt text-red-500">min order 500 pieces</span>
                </label>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default card;