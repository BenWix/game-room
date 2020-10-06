import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, NavItem, Nav} from 'reactstrap'

const NavBar = () => {
    return (
      <Navbar color='info' light expand='md'>
        <Nav className='mr-auto' navbar>
            <NavItem>
                <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/tictactoe">TicTacToe</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/contributors">Contributors</NavLink>
            </NavItem>
        </Nav>

      </Navbar>
    );
  }
  
  export default NavBar;