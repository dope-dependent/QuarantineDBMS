import React from 'react';
import classes from './Subject.module.css'
import SubjectPic from './SubjectPic/SubjectPic';
import {Link} from 'react-router-dom';

const subject = (props) =>{
    return(
            <div className={classes.Subject}>
                    <SubjectPic index={props.index}/>
                    <div className={classes.Participants}>
                        <Link to={{
                            pathname:'/participants',
                            state: {
                                index: props.index,
                            }}} exact>PARTICIPANTS</Link>
                    </div>
                    <div className={classes.SubjectText}>
                        <h1>{props.code}</h1>
                        <p>{props.name}</p>
                        <p>{props.year}</p>
                        <p>{props.sem} Semester</p>
                        <p>{props.credits} Credit Course </p>
                    </div>
            </div>  

    );

}


export default subject;