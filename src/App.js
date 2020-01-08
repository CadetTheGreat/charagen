import React from 'react';
import './App.css';
import { physical_traits, classes, races } from './Lists';

class App extends React.Component {
   state = {
      race: "",
      rank: "",
      trait: ""
   };

   doSomething = () => {
      let race = races[Math.floor(races.length * Math.random())]
      let rank = classes[Math.floor(classes.length * Math.random())]
      let trait = physical_traits[Math.floor(physical_traits.length * Math.random())]
    this.setState({
       race,
       rank,
       trait
    });
   }

  render() {
   return <>
    <h1>charagen</h1>
    <div className="App">
      <button onClick={this.doSomething}>
        Create Character
      </button>
         <p> <b> Race: </b> {this.state.race} </p>
         <p> <b> Class: </b> {this.state.rank} </p>
         <p> <b> Trait: </b> {this.state.trait} </p>
    </div>
       </>;
  }


}

export default App;
