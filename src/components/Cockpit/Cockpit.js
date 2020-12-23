import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.autheticated);
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      
      toggleButtonRef.current.click();

      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []);
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    });
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass=classes.Red;
    }
    if(props.personsLength <=2 ){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <=1 ){
      assignedClasses.push(classes.bold);
    }
    return (
      <div className = {classes.Cockpit}>
        <p className = {assignedClasses.join(' ')}> Welcome to the Samiatrix Channel</p>
        <button 
          ref = {toggleButtonRef}
          className = {btnClass} 
          onClick = {props.clicked}>
            Switch
        </button>
        <button onClick = {authContext.login}>Log In</button>  
        </div>
        
            
    );
};
export default React.memo(Cockpit);