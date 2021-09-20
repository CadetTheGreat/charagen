import React from 'react';
import './App.css';
import traits from './traits.json';

var version = "1.2"

class App extends React.Component {
   state = {
      vals: []
   };

   rerollVal = (trait, index) => {
      let vals = [...this.state.vals]
      let trait_idx = Math.floor((traits[trait].fantasy.length-1) * Math.random())
      let oldnum = vals[index].trait_idx
      trait_idx = trait_idx >= oldnum ? trait_idx+1 : trait_idx

      vals[index] = {
         trait_type: "fantasy",
         trait: trait,
         trait_idx: trait_idx
      }

      this.setState({
         vals
      });
   }

   generateCharacter = () => {
      let vals = []
      for (let trait in traits) {
         let trait_idx = Math.floor(traits[trait].fantasy.length * Math.random())
         vals.push({
            trait: trait,
            trait_type: "fantasy",
            trait_idx: trait_idx
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
        <div key={key.trait} className="char-row">
           <div className="char-desc">
              <button className="char-button" onClick={() => this.rerollVal(key.trait, index)}>Re-roll</button>
              <h2 className="char-key"><b>{key.trait}:</b></h2>
              <span> {traits[key.trait][key.trait_type][key.trait_idx]} </span>
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
