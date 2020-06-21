import React from 'react';
import classes from './Participant.module.css';
import '../../../assets/fonts/styles.css';

const participant = (props)=>{
    return(
        <div className={classes.Participant}>
            <h1>{props.roll}</h1>   
            <p>{props.name}</p>
                     
            <button className='icon-arrows-circle-remove' onClick={props.delete}>
            </button>
                          
        </div>
    );

}

export default participant;