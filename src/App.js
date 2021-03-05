import "./App.css";
import React from "react";
import { BarLoader } from "react-spinners";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarLoader className="spinner" loading width="200" height="10px" color="yellow" />
        <div className="headline">
          <h2>🚧 Porfolio under reconstruction! 🚧</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
