import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
      <div className='navbar'>

        <NavLink 
            to='/'
        >
          Home
        </NavLink>
        <NavLink 
          to="/tictactoe"
        >
          TicTacToe
        </NavLink>
        <NavLink 
          to="/contributors"
        >
          Contributors
        </NavLink>

      </div>
    );
  }
  
  export default Navbar;