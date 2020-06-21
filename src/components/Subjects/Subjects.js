import React ,{Component} from 'react';
import classes from './Subjects.module.css';
import Subject from './Subject/Subject';


class Subjects extends Component{
    state = {
        subjects: [
            {code: 'CS19001', name:'PDS Laboratory', year:1, semester:1, credits: 3},
            {code: 'CS21003', name:'Algorithms Laboratory', year:2, semester:1, credits: 2},
            {code: 'CS21007', name:'Electronics Laboratory', year:2, semester:1, credits: 2},
            {code: 'CS29006', name:'Software Laboratory', year:2, semester:2, credits: 2},
            {code: 'CS39003', name:'Compilers Laboratory', year:3, semester:1, credits: 3},
        ],
    };

    yearStringHandler = (index)=>{
        let output = '';
        switch(this.state.subjects[index].year){
            case 1:output= '1st year'
                    break;
            case 2:output = '2nd year'
                    break;
            case 3:output = '3rd year'
                    break;
            default: output = this.state.subjects[index].year + 'th year'
        }
        return output;
    }
   
    render(){
        // console.log('In [RENDER] method of Subjects.js')
        // console.log(this.deleteParticipantsHandler);
        const subs =  this.state.subjects.map((something,index)=>{
            return(
                <Subject 
                    code={something.code}
                    name={something.name}
                    year = {this.yearStringHandler(index)}
                    sem = {something.semester%2?'Autumn':'Spring'}
                    credits = {something.credits}
                    key = {index}
                    index = {index} 
                />
            );
        });   
       
        return(
                    <div className={classes.Subjects}>
                        <nav>
                            {subs}
                        </nav>
                    </div>
            
        );        
    }
}

export default Subjects;