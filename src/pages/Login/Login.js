import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from "../../images/google.png";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../utilities/firebase.init";


const Login = () => {


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])

    // sign in with email password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }

    // signin with google 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if (googleUser || user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='bg-base-500 my-5 pb-5'>

            <h2 className='text-center mt-9 mb-4 text-3xl font-bold'>Please login</h2>
            <div className='mx-auto border-4 mb-2 p-2 w-72'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                    <div class="form-control ">
                        <label class="label">
                            <span class="label-text">Your email</span>
                        </label>
                        <input type="email" placeholder="Type here" class=" " required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your password</span>
                        </label>
                        <input type="password" name="password" placeholder="Type here" class="" required />
                    </div>
                    <input className='text-center btn btn-primary w-28 mt-6' type="sumbit" value="Login" />
                </form>
            </div>

            <p>New to the side? <Link className='text-blue-500' to="/register">please register</Link></p>

            <div class="divider my-8">OR</div>

            <button onClick={handleGoogleSignIn} className='btn text-white pr-7 my-4'>continue with
                <img className='w-12 inline' src={googleImg} alt="google" />
                <span className='fw-bold'> Google</span>
            </button>


        </div>
    );
};

export default Login;