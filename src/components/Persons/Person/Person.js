import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick = {this.props.click}>Hello {this.props.name} of {this.props.age} age. </p>
                <p>{this.props.children}</p>
                <input 
                    ref = {this.inputElementRef}
                    type = "text" 
                    onChange = {this.props.changed}
                    value = {this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);