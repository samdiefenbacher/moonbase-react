import React, { Component }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {CoinbasePro} from 'coinbase-pro-node';
const client = new CoinbasePro();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Header()}
      </header>
      <div>
        {ContentPane()}
      </div>
    </div>
  );
}

function Header() {
  return(
    <div class="row display-bounds">
      <div class="col col-sm display-bounds">

      </div>
      <div class="col col-sm display-bounds">
        moonbase
      </div>
      <div class="col col-sm display-bounds">

      </div>
    </div>
  );
}

/// We'll store most of our content here for now, including coins etc.
function ContentPane() {
  return (
    <div class="row display-bounds">
      <div class="col-3 display-bounds">
        {DisplayCoins()}
      </div>
      <div class="col-9 display-bounds">
        yo
      </div>
    </div>
  );
}

// Displays coins from coinbase in side bar
function DisplayCoins() {
  const elements = ["1","2","3"]
  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(DisplayCoinInfo(index, value))
  }

  // Returns entire list of coins
  return (
    items
  );
}

// Displays coin info in content pane when coin is selected
function DisplayCoinInfo(index, value) {
  return (
          <div class="row">
            <div class="col display-bounds"> 
              {index}
            </div>
            <div class="col display-bounds">
              {value}
            </div>
          </div>);
}



export default App;
