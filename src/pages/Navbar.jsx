import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/"> Register </Link></li>
                <li><Link to="/login"> Login </Link></li>
            </ul>
        </div>
    )
}

export default Navbar;

