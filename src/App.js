import React from "react";
import "./App.css";
import Data from "./Data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">SQL Commands Cheat Sheet</h1>
      <div className="cards">
        {Data.map((item) => {
          return <Card key={item.id} name={item.name} desc={item.desc} />;
        })}
      </div>
    </div>
  );
}

export default App;
