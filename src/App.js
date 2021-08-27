import React from 'react';

import "./Styles/Global.css";
import "./Styles/App.css";

import HelloWorld from "./Components/HelloWorld.jsx"

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <p> PS: Look at your console. </ p>
    </div>
  );
}

export default App;
