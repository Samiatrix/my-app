import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';
const Cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert('Saved automatically');
      }, 1000);
    }, []);

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass=classes.Red;
    }
    if(props.persons.length <=2 ){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1 ){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className = {classes.Cockpit}>
            <p className = {assignedClasses.join(' ')}> Welcome to the Samiatrix Channel</p>
                    <button 
                        className = {btnClass} 
                        onClick = {props.clicked}>Switch</button>
        </div>
        
            
    );
};
export default Cockpit;