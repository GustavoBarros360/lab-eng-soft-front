import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Projeto Laboratório de Engenharia de Software - Loja 1,99</h1>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
