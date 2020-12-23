import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.autheticated);
    }
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                    {this.context.autheticated ? <p>Authenticated</p> : <p>Please Login</p>}
                
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