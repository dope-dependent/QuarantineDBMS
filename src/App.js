import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Subjects from './components/Subjects/Subjects';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Participants from './components/Participants/Participants';
import Toolbar from './components/Toolbar/Toolbar';
class App extends Component{
    state = {
      participants: [
              [
                  {roll: '10019', name: 'Bob de Silva'},
                  {roll: '10021', name: 'Micheal Amundsen'},
                  {roll: '10022', name: 'Ostwald Kernighan'},
                  {roll: '10031', name: 'Rachel Sullivan'},
                  {roll: '10035', name: 'Sebastian Schultz'},
                  {roll: '10039', name: 'Xavier Thomas Jr.'}
              ],
              [
                  {roll: '21001', name: 'Archangel Reagen'},
                  {roll: '21007', name: 'Emanuel Muller'},
                  {roll: '21022', name: 'Jashanpreet Singh'},
                  {roll: '21027', name: 'Kritika Sharma'},
                  {roll: '21035', name: 'Roger Williams'},
                  {roll: '21041', name: 'Thomas Smith'}
              ],
              [
                  {roll: '23001', name: 'Danish Khan'},
                  {roll: '23007', name: 'Ertugul Ghazi'},
                  {roll: '23022', name: 'Iltija Mohammed'},
                  {roll: '23027', name: 'Mohammad Azram Khan'},
                  {roll: '23036', name: 'Mir Sohail'},
                  {roll: '23045', name: 'Sayyed Haroon'}
              ],
              [
                  {roll: '31001', name: 'Aditya Kumar'},
                  {roll: '31010', name: 'Deepti Chauhan'},
                  {roll: '31017', name: 'Lipika Desai'},
                  {roll: '31026', name: 'Manushi Singhal'},
                  {roll: '31029', name: 'Mihir Raj Meena'},
                  {roll: '31037', name: 'Saunak Biswas'}
              ],
              [
                  {roll: '33001', name: 'Bandita Reddy'},
                  {roll: '33007', name: 'Eshana Radhakrishnan'},
                  {roll: '33013', name: 'Hriday Kumar Das'},
                  {roll: '33017', name: 'Kapil Saxena'},
                  {roll: '33023', name: 'Jagmohan Pandey'},
                  {roll: '33029', name: 'Sai Santhosh Nayak'}
              ]
          ]
        }
  
  deletePersonsHandler = (index,subIndex) =>{
    console.log('In [deletePersonsHandler]');
    let person = this.state.participants;
    let personShort = this.state.participants[index];
    personShort.splice(subIndex,1);
    person[index] = personShort;
    this.setState({participants: person});
  }

  addParticipantHandler = (index,name,roll)=>{
    console.log('In [addParticipantHandler] ');
    let person = this.state.participants;
    let personShort = this.state.participants[index];
    const newPerson = {
      roll: roll,
      name: name,
    };
    personShort.push(newPerson);
    person[index] = personShort;
    this.setState({participants: person});
  }
  render(){
    return(
      // <BrowserRouter>
         <div className='App'>
          <Navbar/>
          <Toolbar/>
          <Route path='/' exact component={Home} />
          <Route path='/subjects' exact component={Subjects} />
          <Route path='/participants' exact render={(props)=>(
            <Participants 
              participants={this.state.participants} 
              index={props.location.state.index}
              delete={this.deletePersonsHandler}
              add={this.addParticipantHandler}/>
          )}/>
        </div>
      // </BrowserRouter>
    );
  }
}
export default App;
