import React from 'react';
import classes from './SubjectPic.module.css';

const subjectPic = (props) =>{
    const index = props.index%5;
    const image = require('../../../../assets/images/SubjectPic' + index + '.jpg');
    return(
        <div className={classes.SubjectPic}>
        <img src={image} alt='SUBJECT_LOGO'/>
        </div>
    );
}


export default subjectPic;