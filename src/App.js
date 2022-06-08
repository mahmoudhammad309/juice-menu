import React from "react";
import JuiceCards from "../src/Components/JuiceCards/JuiceCards";
import "./Components/JuiceCards/JuiceCards.css";
import JuiceForm from "./Components/JuiceForm/JuiceForm.js";
// import './App.css';

function App() {
  return (
    <div className="App">
      <JuiceForm />
      <JuiceCards />
    </div>
  );
}

export default App;
