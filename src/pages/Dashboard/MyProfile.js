import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Profile details</h2>
            <div className="divider"></div>
            <h2 className='text-2xl text-primary'>User name</h2>
            <div className="py-6 flex flex-col items-start">
                <p><span className='text-blue-500'>Name : </span> Yourname</p>
                <p><span className='text-blue-500'>Email : </span> Yourname</p>
                <p><span className='text-blue-500'>Role : </span> Yourname</p>
            </div>

        </div>
    );
};

export default MyProfile;