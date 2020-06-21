import React,{Component} from 'react';
import classes from './Toolbar.module.css';
import '../../assets/fonts/styles.css';
import navbarLogo from '../../assets/images/navbar--logo.png';
import {NavLink} from 'react-router-dom';
import ToolbarItems from './ToolbarItems/ToolbarItems'


class Toolbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayMenu : false,
        }
    }

    render(){
        let renderData = null;
        console.log(renderData);
        return(
            <div className={classes.Toolbar}>
                <NavLink to='/'>
                    <div className={classes.Logo}>
                        <img src={navbarLogo} alt='Logo'></img> 
                    </div>
                </NavLink>   
                <button className="icon-arrows-down" onClick={()=>{
                    const q = this.state.displayMenu;
                    this.setState({displayMenu : !q});
                }}></button>
                <div>
                    {this.state.displayMenu===true?
                        renderData = (
                            <ToolbarItems />
                        )
                    :renderData=null}
                </div>
                     
                
            </div>    
        );
    }
}


export default Toolbar;