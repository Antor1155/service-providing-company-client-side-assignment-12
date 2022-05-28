import React from 'react';

const AddReview = () => {
    return (
        <div className='mt-10 bg-blue-300 rounded-md p-4'>
            <h2 className='text-xl font-semibold my-5'>Add a review please</h2>
            <form>
                <textarea name="review" className="textarea textarea-info mb-5 block" placeholder="review" required></textarea>
                <label htmlFor="">Rating</label>
                <input type="number" min='0' max='5' name='Rating' palceholder="5" className='block mb-5 w-full'></input>
                <input className='text-center font-bold  rounded-lg bg w-28 mt-6 p-3 bg-gradient-to-r from-green-400 to-blue-400 hover:from-pink-500 hover:to-yellow-500'
                    type="submit" value="Add review" />
            </form>
        </div>
    );
};

export default AddReview;