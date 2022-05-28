import React, { useEffect, useState } from 'react';
import auth from '../../utilities/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from "../../images/google.png";
import Loading from "../../shared/Loading";



const Register = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [updateProfile, updating, uerror] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    // register with email and password  
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const displayName = event.target.name.value;


        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName });
        event.target.reset();

    }

    // registering with google 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if (updating || loading || googleLoading) {
        return (<Loading></Loading>)
    }
    let commonError = '';
    if (error || googleError) {
        commonError = error || googleError;
    }
    if (user || googleUser) {
        if(user){
            fetch('http://localhost:5000/addUser',{
                method: 'POST',
                headers: {"content-type": "application/json"},
                body: JSON.stringify({email:user.user.email})
            }).then(res => res.json())
            .then(data => console.log(data));
        }
        else{
            fetch('http://localhost:5000/addUser',{
                method: 'POST',
                headers: {"content-type": "application/json"},
                body: JSON.stringify({email:googleUser.user.email})
            }).then(res => res.json())
            .then(data => console.log(data));
        }

        navigate(from, { replace: true });
    }


    return (
        <div className='bg-base-500 my-5 pb-5'>

            <h2 className='text-center mt-9 mb-4 text-3xl font-bold text-primary'>Please Register</h2>
            <div className='mx-auto border-4 mb-2 p-2 w-72'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" className=" " required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Your email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" className=" " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your password</span>
                        </label>
                        <input type="password" name="password" placeholder="Type here" className="" required />
                    </div>

                    <label className="label">
                        <span className="label-text text-red-500">{commonError? commonError.message.split(':')[1] : ''}</span>
                    </label>

                    <input className='text-center btn btn-primary w-28 mt-3' type="submit" value="Register" />
                </form>
            </div>

            <p>Already have an account? <Link className='text-blue-500' to="/login">please Login</Link></p>

            <div className="divider my-8">OR</div>

            <button onClick={handleGoogleSignIn} className='btn text-white pr-7 my-4'>continue with
                <img className='w-12 inline' src={googleImg} alt="google" />
                <span className='fw-bold'> Google</span>
            </button>


        </div>
    );
};

export default Register;