import React from 'react';
import logo from './logo.svg';
import './App.css';
import { physical_traits, classes, races } from './Lists';

class App extends React.Component {
   state = {text: ""};

   doSomething = () => {
    this.setState({
      text: "HAHAHA"
    });
   }

  render() {
   return <>
    <h1>charagen</h1>
    <div className="App">
      <button onClick={this.doSomething}>
        Create Character
      </button>
         <p>
            {this.state.text}
            </p>
    </div>
       </>;
  }


}

export default App;
