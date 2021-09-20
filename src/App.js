import React from 'react';
import './App.css';
import lists from './lists.json';

var version = "1.1"

class App extends React.Component {
   state = {
      vals: []
   };

   rerollVal = (key,index) => {
       let vals = [...this.state.vals]
       let local_lists = lists[key]
       let keys = Object.keys(local_lists)
       let num = Math.floor(keys.length * Math.random())

       vals[index] = {
           name: key,
           val: keys[num]
       }

       console.log(vals)

       this.setState({
           vals
       });
   }

   generateCharacter = () => {
      let vals = []
      for (let k in lists) {
         let keys = Object.keys(lists[k])
         let num = Math.floor(keys.length * Math.random())
         vals.push({
            name: k,
            val: keys[num]
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
           Create Character
         </button>
         <hr />
      </div>
         {rows}
    </div>
       </>;
  }


}

export default App;
