import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <Navbar></Navbar>
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
                </ul>
            </nav>
        </>
    )
};

export default Navbar;