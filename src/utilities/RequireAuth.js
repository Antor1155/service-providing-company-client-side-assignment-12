import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
import Loading from '../shared/Loading';
import auth from './firebase.init';

const RequireAuth = ({ children}) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    
    if(loading){
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;