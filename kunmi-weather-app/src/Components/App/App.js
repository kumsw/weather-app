import React from "react";
import "./App.css";
import DisplayForecast from "../DisplayForecast";
import SearchLocation from "../SearchLocation";

function App() {
  return (
    <div className="App">
      <SearchLocation />
      <DisplayForecast />
    </div>
  );
}

export default App;
