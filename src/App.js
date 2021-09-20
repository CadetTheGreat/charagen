import React from 'react';
import './App.css';
import traits from './traits.json';

var version = "1.2"

function flrrnd(num) {
   return Math.floor(num * Math.random())
}

var calctraitval = (oldtraitval, traits_by_type, ...types) => {
   // Only use types that exist and have at least 2 items, to avoid rerolling giving the same value as before.
   let available_types = types.filter(traittype => Array.isArray(traits_by_type[traittype]))
   let possibleVals = new Set()

   for (let x of available_types) {
      for (let y of traits_by_type[x]) {
         possibleVals.add(y)
      }
   }

   let possibleValsArray = Array.from(possibleVals)
   if (possibleVals.has(oldtraitval)) {
      let oldidx = possibleValsArray.findIndex(x => x === oldtraitval)
      let rndidx = flrrnd(possibleVals.size-1)
      return possibleValsArray[rndidx >= oldidx ? rndidx + 1 : rndidx]
   } else {
      return possibleValsArray[flrrnd(possibleVals.size)]
   }
}

class App extends React.Component {
   state = {
      vals: []
   };

   rerollVal = (index) => {
      let vals = [...this.state.vals]
      let oldval = vals[index]

      vals[index] = {
         trait: oldval.trait,
         trait_val: calctraitval(oldval.trait_val, traits[oldval.trait], "fantasy", "scifi")
      }

      this.setState({
         vals
      });
   }

   generateCharacter = () => {
      let vals = []
      for (let trait in traits) {
         vals.push({
            trait: trait,
            trait_val: calctraitval("", traits[trait], "fantasy")
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
              <button className="char-button" onClick={() => this.rerollVal(index)}>Re-roll</button>
              <h2 className="char-key"><b>{key.trait}:</b></h2>
              <span> {key.trait_val} </span>
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
