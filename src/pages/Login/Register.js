import React, { useEffect } from 'react';
import auth from '../../utilities/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import googleImg from "../../images/google.png";



const Register = () => {

    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    // register with email and password  
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;


        await createUserWithEmailAndPassword(email, password);

        // adding the user to database 
        // fetch('https://gentle-gorge-38352.herokuapp.com/addUser',{
        //     method: 'POST',
        //     headers: {"content-type": "application/json"},
        //     body: JSON.stringify({name, catagory: "officials"})
        // }).then(res => res.json())
        // .then(data => console.log(data));

        event.target.reset();

    }

    // registering with google 


    return (
        <div className='bg-base-500 my-5 pb-5'>

            <h2 className='text-center mt-9 mb-4 text-3xl font-bold text-primary'>Please Register</h2>
            <div className='mx-auto border-4 mb-2 p-2 w-72'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                <div class="form-control ">
                        <label class="label">
                            <span class="label-text">Your name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" class=" " required />
                    </div>
                    <div class="form-control ">
                        <label class="label">
                            <span class="label-text">Your email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" class=" " required />
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

            <p>Already have an account? <Link className='text-blue-500' to="/login">please Login</Link></p>

            <div class="divider my-8">OR</div>

            <button onClick={handleGoogleSignIn} className='btn text-white pr-7 my-4'>continue with
                <img className='w-12 inline' src={googleImg} alt="google" />
                <span className='fw-bold'> Google</span>
            </button>


        </div>
    );
};

export default Register;