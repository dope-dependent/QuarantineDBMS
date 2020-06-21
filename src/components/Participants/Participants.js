import React, { Component } from 'react';
import classes from './Participants.module.css';
import Participant from './Participant/Participant';
import AddParticipant from './AddParticipant/AddParticipant';

class Participants extends Component{
    state = {
        addParticipants: true
    }
    shouldComponentUpdate(){
        this.state.addParticipants = true;
        return true;
    }
    render(){
        // console.log('In [Participants.js]');
        let final=null;
        const divStyle = {
            height: 150 + (this.props.participants[this.props.index].length)*60 +'px',
            numValue: 150 + (this.props.participants[this.props.index].length)*60
        };
        console.log(divStyle);
        return(
        <div className={classes.Center}>
            <div className={classes.Header}>
                <h1>Roll No</h1>
                <p>Name</p>
                <h2>Remove</h2>
            </div>
            <div className={classes.Participants}>        
            {this.props.participants[this.props.index].map((something,index)=>(
                    <div key={something.roll}>
                        <Participant 
                            name = {something.name}
                            roll = {something.roll}
                            delete = {()=>{
                                alert("WARNING!! Deleting the partitipant cannot be undone!!"+
                                "\n==============================================\nParticipant Details \nROLL NO - "+
                                this.props.participants[this.props.index][index].roll +"\nNAME - "+
                                this.props.participants[this.props.index][index].name);
                                this.props.delete(this.props.index, index)
                                }}
                        />
                    </div> 
                    ))}
            </div>
            <button className={classes.Button} onClick={()=>{
                const q=this.state.addParticipants;
                this.setState({addParticipants: !q})}}>Add New Participant</button>
            <button className={classes.Button} onClick={()=>{
                alert('The participants for the course have been successfully registered');
            }}>Add All Current Participants</button>  
            <div>
                {this.state.addParticipants===false?
                final = (
                <div>
                <div style={divStyle} className={classes.Backdrop} onClick={()=>{
                    const q=this.state.addParticipants;
                    this.setState({addParticipants: !q})
                }}></div>
                <AddParticipant 
                    hidden={!this.state.addParticipants} 
                    index={this.props.index} 
                    add={(name,roll)=>this.props.add(this.props.index,name,roll)}
                    myHeightValue={divStyle.numValue}/>
                </div>                
                ):
                final= null}
            </div>            
        </div> 
        );    
    }
   
}

export default Participants;