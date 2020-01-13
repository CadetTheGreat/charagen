import React from 'react';
import './App.css';
import lists from './lists.json';

var version = "1.1"

class App extends React.Component {
   state = {
      vals: []
   };

   doSomething = () => {
      let vals = []
      for (let k in lists) {
         let keys = Object.keys(lists[k])
         let num = Math.floor(keys.length * Math.random())
         vals.push({
            name: k,
            val: keys[num],
            img: lists[k][keys[num]]
         })
      }

      this.setState({
         vals
      });
   }

  render() {
     let rows = this.state.vals.map((x) =>
        <div className="char-row">
           <div className="char-desc">
              <h2 className="char-key"><b>{x.name}:</b></h2>
              <span> {x.val} </span>
           </div>
              {
               x.img != null ?
              <img src={process.env.PUBLIC_URL + x.img} alt="logo" />
                 : <></>
              }
        </div>
           )
   return <>
     <header>
       <h1>Charagen</h1>
       <p>{version}</p>
     </header>
    <div className="App">
      <div className="char-button-row">
         <button onClick={this.doSomething}>
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
