import React, {Component} from 'react';
import myclass from'./App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }


  state = {
    persons: [
      {id: '1', name: 'Hari', age: 21},
      {id: '2', name: 'Mani', age: 19},
      {id: '3', name: 'Ram', age: 25}
    ],
    otherState: 'something else',
    showPersons: false
  };
  
  static getDerivedStateFromProps(state, props){
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[App.js] shouldComponentUpdate');
  // }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  changehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglehandler = () => {
    const flag = this.state.showPersons;
    this.setState({showPersons: !flag});
  }
  render(){
    console.log('[App.js] Render');

    let persons = null;
    if(this.state.showPersons){
      persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.changehandler}/> ; 
    }
    
    return ( 
      <div className={myclass.App}>
        <h1>Hello, Samiatrix</h1>
        <Cockpit 
          showPersons = {this.state.showPersons} 
          personsLength = {this.state.persons.length} 
          clicked = {this.togglehandler}/>
        {persons}
      </div>
    );
  }
}


export default App;
