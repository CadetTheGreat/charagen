import React from 'react';
import './App.css';
import lists from './lists.json';

class App extends React.Component {
   state = {
      vals: []
   };

   doSomething = () => {
      let vals = []
      for (let k in lists) {
         vals.push({name: k, val: lists[k][Math.floor(lists[k].length * Math.random())]})
      }

      this.setState({
         vals
      });
   }

  render() {
     let rows = this.state.vals.map((x) => <p> <b> {x.name}: </b> {x.val} </p>)
   return <>
    <h1>charagen</h1>
    <div className="App">
      <button onClick={this.doSomething}>
        Create Character
      </button>
         {rows}
    </div>
       </>;
  }


}

export default App;
