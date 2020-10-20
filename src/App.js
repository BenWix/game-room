import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import About from "./components/About";
import Contributors from "./components/Contributors";

import TicTacToe from "./games/ticTacToe/TicTacToe";
import BlackJack from "./games/blackJack/BlackJack";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="body">
          <Route exact path="/" component={About} />

          <Route path="/contributors" component={Contributors} />
        </div>
      </Router>
    </div>
  );
}

export default App;
