import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                        <li><Link to='myProfile'>My profile</Link></li>

                        <li><Link to='myOrder'>My order</Link></li>
                        <li><Link to='addReview'>Add a review</Link></li>

                        <li><Link to='manageAllOrders'>Manage All orders</Link></li>
                        <li><Link to='addProduct'>Add products</Link></li>
                        <li><Link to='makeAdmin'>Make admin</Link></li>
                        <li><Link to='manageProduct'>Manage products</Link></li>
                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default Dashboard; <h3>this is dashboard</h3>