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
                <li><Link to="/iques"> Q/A </Link></li>
                <li><Link to="/fetch"> Quotes </Link></li>
            </ul>
        </div>
    )
}

export default Navbar;

