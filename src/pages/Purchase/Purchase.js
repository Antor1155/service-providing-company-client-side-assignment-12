import React from 'react';

const Purchase = () => {
    return (
        <div className="card lg:w-96 bg-base-100 my-6 mx-auto shadow-xl">
        <figure>
            <img className='w-56' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p >Price: <strong className='text-accent'>$ 5 /</strong> pieces</p>
            <p className='text-primary'>available : 5000 pieces</p>
            <label class="label">
                <span class="label-text-alt text-red-500">min order 500 pieces</span>
            </label>

                <form className='bg-orange-100 w-80 px-4 pb-5'>
    
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">The amount you want Name:</span>
                        </label>
                        <input type="number" min={500} max={5000} name="amount" placeholder="min amount 500"  />
                    </div>
                    <div class="form-control my-2">
                        <label class="label">
                            <span class="label-text">Your Name:</span>
                        </label>
                        <input type="text" name="name" placeholder="Type here" disabled />
                    </div>
                    <div class="form-control  ">
                        <label class="label">
                            <span class="label-text">Your Email:</span>
                        </label>
                        <input type="Email" name="Email" placeholder="Type here" disabled />
                    </div>
                    <div class="form-control my-2">
                        <label class="label">
                            <span class="label-text">Your Phone Number:</span>
                        </label>
                        <input type="text" name="phone" placeholder="Type here" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your Address:</span>
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