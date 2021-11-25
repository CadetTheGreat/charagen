import React from 'react';
import './App.css';

var VERSION = "1.2"
var ALL_TYPES = ["fantasy", "scifi", "modern"]

function flrrnd(num) {
   return Math.floor(num * Math.random())
}

var calctraitval = (oldtraitval, traits_by_type, ...types) => {
   let available_types = [];
   if (types.length === 0) {
      // If a type is not specified, assume all types are valid.
      available_types = Object.keys(traits_by_type)
   } else {
       // Only use types that exist and have at least 2 items, to avoid rerolling giving the same value as before.
      available_types = types.filter(traittype => Array.isArray(traits_by_type[traittype]) && traits_by_type[traittype].length > 1)
   }

   let possibleVals = new Set()

   for (let x of available_types) {
      for (let y of traits_by_type[x]) {
         if (y !== oldtraitval) {
            possibleVals.add(y)
         }
      }
   }

   let possibleValsArray = Array.from(possibleVals)
   return possibleValsArray[flrrnd(possibleValsArray.length)]
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
         trait_val: calctraitval(oldval.trait_val, this.state.traits[oldval.trait])
      }

      this.setState({
         vals
      });
   }

   generateCharacter = (type) => {
      let vals = []
      for (let trait in this.state.traits) {
         vals.push({
            trait: trait,
            trait_val: calctraitval("", this.state.traits[trait], type)
         })
      }

      this.setState({
         vals
      });
   }

   componentDidMount() {
        fetch("https://raw.githubusercontent.com/CadetTheGreat/charagen/main/frontend/src/traits.json", {
            headers: { Accept: "text/plain" },
            "method": "GET"
        })
        .then(response => response.json())
        .then(traits => {
            this.setState({traits})
            this.generateCharacter(ALL_TYPES[0])
        })
    }

    render() {
        let buttons = ALL_TYPES.map((key) =>
            <button key={key} onClick={() => this.generateCharacter(key)}>
                Generate {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
        )

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
                <p>{VERSION}</p>
            </header>
            <div className="App">
                <div className="char-button-row">
                    {buttons}
                    <hr />
                </div>
                {rows}
            </div>
        </>;
    }
}

export default App;
