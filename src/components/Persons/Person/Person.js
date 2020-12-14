import React, {Component} from 'react';
import classes from './Person.module.css';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return (
            <div className = {classes.Person}>
                <p onClick = {this.props.click}>Hello {this.props.name} of {this.props.age} age. </p>
                <p>{this.props.children}</p>
                <input type = "text" onChange = {this.props.changed} value = {this.props.name}></input>
            </div>
        );    

    }
};

export default Person;