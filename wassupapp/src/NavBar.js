import React from 'react';
import {NavLink} from 'react-router-dom';

let NavBar = () =>
    <nav> 
        <NavLink to='/'> Home </NavLink>
        <br/>
        <NavLink to='/profile'> Profile </NavLink>
        <br/>
        <NavLink to='/about'> About</NavLink>
    </nav>

export default NavBar;