import React from 'react';
import { useNavigate } from 'react-router-dom';

const card = ({tool}) => {




    return (
        <div className="card lg:w-56 bg-base-100 mx-auto shadow-xl">
            <figure>
                <img className='h-40' src={tool.image} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <p >Price: <strong className='text-accent'>${tool.price} /</strong> pieces</p>
                <p className='text-primary'>available : {tool.available} pieces</p>
               
                <label className="label">
                    <span className="label-text-alt text-red-500">min order {tool.minimum} pieces</span>
                </label>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default card;