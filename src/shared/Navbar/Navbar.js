import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-orange-300">
            <div className=" navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Alex Tools</Link>

            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/purchase">Purchase</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/protfolio">Protfolio</Link></li>
                </ul>
            </div>



            <div className="lg:hidden dropdown navbar-end ">
                <label tabindex="0" className="btn btn-ghost ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/purchase">Purchase</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/protfolio">Protfolio</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;