import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Contributors from './components/Contributors'

import TicTacToe from './games/ticTacToe/TicTacToe' 

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={About} />
        <Route path='/tictactoe' component={TicTacToe} />
        <Route path='/contributors' component={Contributors} />    
      </Router>
    </div>
  );
}

export default App;
