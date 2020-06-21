import React from 'react';
import Logo from './Logo/Logo';
import classes from './Text.module.css';

const text = (props)=>{
    return(
        <div className={classes.Text}>
            <Logo />
            <p className={classes.Header}>QUARANTINE</p>
            {/* <p className={classes.Data}>Stay home and manage data</p> */}
        </div>        
    );
}

export default text;