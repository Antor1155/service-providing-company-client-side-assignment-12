import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center h-screen'>
            <div className='mt-40'>
                <h2 className='text-primary text-5xl'>Loading...</h2>
                <progress class="progress text-primary bg-secondary w-72"></progress>
            </div>
        </div>
    );
};

export default Loading;