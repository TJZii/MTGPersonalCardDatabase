import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='NavBarDiv'>
            <NavLink to='/' className='NavBarLink'> Home </NavLink>
            <NavLink to='/cards' className='NavBarLink'>/ Cards </NavLink>
            <NavLink to='/yourCards' className='NavBarLink'>/ Add Cards </NavLink>
        </div>
    );
};

export default NavBar;