import React from 'react';
import './App.css';
import traits from './traits.json';

var version = "1.1"

class App extends React.Component {
   state = {
      vals: []
   };

   rerollVal = (trait, index) => {
      let vals = [...this.state.vals]
      let num = Math.floor((traits[trait].length-1) * Math.random())
      let oldnum = vals[index].num
      num = num >= oldnum ? num+1 : num

      vals[index] = {
         name: trait,
         num: num,
         val: traits[trait][num]
      }

      this.setState({
         vals
      });
   }

   generateCharacter = () => {
      let vals = []
      for (let trait in traits) {
         let num = Math.floor(traits[trait].length * Math.random())
         vals.push({
            name: trait,
            num: num,
            val: traits[trait][num]
         })
      }

      this.setState({
         vals
      });
   }

   componentDidMount() {
      this.generateCharacter()
   }

  render() {
     let rows = this.state.vals.map((key, index) =>
        <div key={key.name} className="char-row">
           <div className="char-desc">
              <button className="char-button" onClick={() => this.rerollVal(key.name, index)}>Re-roll</button>
              <h2 className="char-key"><b>{key.name}:</b></h2>
              <span> {key.val} </span>
           </div>
        </div>
           )

   return <>
     <header>
       <h1>Charagen</h1>
       <p>{version}</p>
     </header>
    <div className="App">
      <div className="char-button-row">
         <button onClick={this.generateCharacter}>
           Generate
         </button>
         <hr />
      </div>
         {rows}
    </div>
       </>;
  }


}

export default App;
