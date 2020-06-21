import React from 'react';
import classes from './ToolbarItems.module.css';
import {NavLink} from 'react-router-dom';


const toolbarItems = (props) =>{
    return(
        <div className={classes.ToolbarItems}>
            <NavLink to='/'><div>Home</div></NavLink>
            <NavLink to='/subjects'><div>Subjects</div></NavLink>
        </div>
    );
}

export default toolbarItems;