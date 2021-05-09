import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='NavBarDiv'>
            <NavLink to='/' className='NavBarLink'> Home </NavLink>
            <NavLink to='/cards' className='NavBarLink'> Cards </NavLink>
            <NavLink to='/empty' className='NavBarLink'> M </NavLink>
            <NavLink to='/empty' className='NavBarLink'> W </NavLink>
        </div>
    );
};

export default NavBar;