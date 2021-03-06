import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from "../../images/google.png";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../utilities/firebase.init";
import Loading from '../../shared/Loading';


const Login = () => {


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

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
    
    if (loading || googleLoading) {
        return (<Loading></Loading>)
    }
    let commonError = '';
    if (error || googleError) {
        commonError = error || googleError;
    }

    if (googleUser || user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='bg-base-500 my-5 pb-5'>

            <h2 className='text-center mt-9 mb-4 text-3xl font-bold'>Please login</h2>
            <div className='mx-auto bg-slate-300 border-4 mb-2 p-2 w-72'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Your email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here"  required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your password</span>
                        </label>
                        <input type="password" name="password" placeholder="Type here" required />
                    </div>

                    <label className="label">
                        <span className="label-text text-red-500">{commonError? commonError.message.split(':')[1] : ''}</span>
                    </label>

                    <input type="submit" className='text-center btn btn-primary w-28 mt-6'  value="Login" />
                </form>
            </div>

            <p>New to the side? <Link className='text-blue-500' to="/register">please register</Link></p>

            <div className="divider my-8">OR</div>

            <button onClick={handleGoogleSignIn} className='btn text-white pr-7 my-4'>continue with
                <img className='w-12 inline' src={googleImg} alt="google" />
                <span className='fw-bold'> Google</span>
            </button>


        </div>
    );
};

export default Login;