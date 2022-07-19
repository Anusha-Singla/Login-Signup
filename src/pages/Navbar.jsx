import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register"> Register </Link></li>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/cart"> Cart </Link></li>
            </ul>
        </div>
    )
}

export default Navbar;

