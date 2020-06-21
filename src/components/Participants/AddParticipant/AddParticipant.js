import React, {Component} from 'react';
import classes from './AddParticipant.module.css';

export default class AddParticipant extends Component{
    constructor(props){
        super(props);
        this.state= {
            index: props.index,
            name: '',
            roll:'',
            hidden: !props.hidden,
            error: null
        }
        
    }
    checkFormName = (q)=>{
        const a = q.split('');
        let letters = /^[A-Za-z]+$/;
        let valid = true;
        if(a.length===0){return null;}
        a.forEach(char=>{
            if(!char.match(letters) && char!==' '){
                valid = false;
            }
        })
        return valid;
    }
    checkFormNumber = (q)=>{
        const b = q.split('');
        let numbers = /^[0-9]+$/;
        let valid = true;
        if(b.length===0){return null;}
        b.forEach(char=>{
            if(!char.match(numbers)){
                valid = false;
            }
        })
        return valid;
    }

    onSubmit =(e)=>{
        console.log(this.state);
        e.preventDefault();
        // console.log(e);
        const q = this.state.hidden;
        let error = null;
        if(this.checkFormName(this.state.name)==null && this.checkFormNumber(this.state.roll)==null){
            error = 'Please type something!';
            this.setState({error: error})
        }
        else if(this.checkFormName(this.state.name)==null){
            error = 'Please add a name'
            this.setState({error: error});
        }
        else if(this.checkFormNumber(this.state.roll)==null){
            error = 'Please add a Roll Number';
            this.setState({error: error})
        }
        
        else if(!this.checkFormName(this.state.name) && !this.checkFormNumber(this.state.roll)){
            error = 'Please enter a valid Name and a valid Roll Number';
            this.setState({error: error});
        }
        else if(!this.checkFormNumber(this.state.roll)){
            error = "Please enter a valid Roll Number";
            this.setState({error: error});
        }
        else if(!this.checkFormName(this.state.name)){
            error = 'Please enter a valid name';
            this.setState({error: error});
        }
        else{
            this.setState({
                hidden : !q
            });
            this.props.add(this.state.name,this.state.roll);
            }   
    }
    render(){
        let final = (<div></div>);
        console.log('In Render Method of AddParticipants.js');
        const myStyle ={
            top: Math.max(180,this.props.myHeightValue - 400) + 'px'
        }
        console.log(myStyle);
        if(!this.state.hidden){
            final = (                
                <form>
                    <p>Full Name</p>
                    <input 
                        value={this.state.name} 
                        onChange={e=>this.setState({name: e.target.value})}
                        required={true}></input>
                    <p>Roll Number</p>
                    <input 
                        value={this.state.roll}
                        onChange={e=>this.setState({roll: e.target.value})}
                        required={true}></input>
                    <p><span className={classes.Red}>{this.state.error}</span></p>
                    <button type='button' onClick={(e)=>this.onSubmit(e)}>Submit</button>
                </form>
            )
        }
        return(
            <div  style={myStyle} className={classes.Form} onClick={()=>{}}>
                <h1>Add New Participant</h1>
                {final}
            </div>
        );
    }
}
