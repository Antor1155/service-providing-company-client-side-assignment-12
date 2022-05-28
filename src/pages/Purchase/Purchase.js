import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    const [product, setProduct] =useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data.product));
    },[])
    console.log(product);
    return (
        <div className="card lg:w-96 bg-base-100 my-6 mx-auto shadow-xl">
        <figure>
            <img className='' src={product.image} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{product.name}</h2>
            <p >Price: <strong className='text-accent'>$ {product.price}/</strong> pieces</p>
            <p className='text-primary'>available : {product.available} pieces</p>
            <label className="label">
                <span className="label-text-alt text-red-500">min order {product.minimum} pieces</span>
            </label>

                <form className='bg-orange-100 w-80 px-4 pb-5'>
    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">The amount you want Name:</span>
                        </label>
                        <input type="number" min={500} max={5000} name="amount" placeholder="min amount 500"  />
                    </div>
                    <div className="form-control my-2">
                        <label className="label">
                            <span className="label-text">Your Name:</span>
                        </label>
                        <input type="text" name="name" placeholder="Type here" disabled />
                    </div>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Your Email:</span>
                        </label>
                        <input type="Email" name="Email" placeholder="Type here" disabled />
                    </div>
                    <div className="form-control my-2">
                        <label className="label">
                            <span className="label-text">Your Phone Number:</span>
                        </label>
                        <input type="text" name="phone" placeholder="Type here" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Address:</span>
                        </label>
                        <input type="text" name="address" placeholder="Type here" required />
                    </div>

                    <input className='text-center font-bold  rounded-lg bg w-28 mt-6 p-3 bg-gradient-to-r from-green-400 to-blue-400 hover:from-pink-500 hover:to-yellow-500'
                     type="submit" value="Purchase" />

                </form>
            </div>
        </div>
    );
};

export default Purchase;