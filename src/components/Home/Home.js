import React from 'react';
import classes from './Home.module.css';
import Text from './Text/Text';

const home = (props) =>(
    <div className={classes.Home}>
        <div className={classes.Img}>
            <Text />
        </div>
    </div>
);


export default home;