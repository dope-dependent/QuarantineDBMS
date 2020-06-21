import React from 'react';
import logoURL from '../../../../assets/images/logo--yellow.png';
import classes from './Logo.module.css';


const logo = (props)=>{
    return(
        <div className={classes.Logo}>
            <img src={logoURL} alt='LOGO'></img>
        </div>
    );
}

export default logo;