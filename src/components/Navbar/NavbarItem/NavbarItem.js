import React from 'react';
import classes from './NavbarItem.module.css';

const navbarItem = (props) =>(
    <div className={classes.NavbarItem}>
        {props.name}
    </div>
);



export default navbarItem;