import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';

const MyProfile = () => {
    const [user]=useAuthState(auth);

    return (
        <div>
            <h2 className='text-2xl font-bold'>Profile details</h2>
            <div className="divider"></div>
            <h2 className='text-2xl text-primary'>{user.displayName}</h2>
            <div className="py-6 flex flex-col items-start">
                <p><span className='text-blue-500'>Name : </span>{user.displayName}</p>
                <p><span className='text-blue-500'>Email : </span> {user.email}</p>
            </div>

        </div>
    );
};

export default MyProfile;