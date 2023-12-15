import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/index">Index</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Navbar;