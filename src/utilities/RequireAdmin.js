import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
import Loading from '../shared/Loading';
import auth from './firebase.init';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const[role, setRole] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/userRole?email=${user.email}`,{
        }).then(res => res.json())
        .then(data => setRole(data));
    },[user])
    
    if(loading){
        return <Loading></Loading>
    }
    if(!loading && !user){
        signOut(auth);
        navigate('/login');
    }
 
    if(role){
        if(role.role === "admin"){
            console.log(role.role);
            return children;
        }
        else{
            navigate('/');
        }
    }
};

export default RequireAdmin;