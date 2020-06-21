import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import classes from './Navbar.module.css';
import navbarLogo from '../../assets/images/navbar--logo.png';
import {NavLink} from 'react-router-dom';

const navbar = (props)=>{
    return (
        <div className={classes.Navbar}>
            <nav>
                <NavLink to='/' exact><NavbarItem name="Home"/></NavLink>
                <NavLink to='/subjects' exact><NavbarItem name="Subjects"/></NavLink>          
            </nav>
            <NavLink to='/' exact >
                <div className={classes.Logo}>
                    <img src={navbarLogo} alt='Logo'></img> 
                </div>
            </NavLink>
           
            
        </div>                           
    );

}

export default navbar;