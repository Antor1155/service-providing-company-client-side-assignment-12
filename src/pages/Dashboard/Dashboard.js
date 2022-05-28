import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading';
import auth from '../../utilities/firebase.init';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [role, setRole] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/userRole?email=${user.email}`).then(res => res.json())
            .then(data => setRole(data));
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center mt-5">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to=''>My profile</Link></li>


                        {role?.role === 'user' && <>
                            <li><Link to='myOrder'>My order</Link></li>
                            <li><Link to='addReview'>Add a review</Link></li>
                        </>}


                        {role?.role === 'admin' && <>
                            <li><Link to='makeAdmin'>Make admin</Link></li>
                            <li><Link to='addProduct'>Add products</Link></li>
                            <li><Link to='manageProduct'>Manage products</Link></li>
                            <li><Link to='manageAllOrders'>Manage All orders</Link></li>
                        </>}

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard; <h3>this is dashboard</h3>