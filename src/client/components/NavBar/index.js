import React from 'react'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import './index.scss'

const NavBar = (props) => (  <Navbar className='navbar-section' inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand className='navbar-logo'>
      <a href="#">Distopia E Tecnologia</a>
    </Navbar.Brand>
    <Navbar.Toggle/>
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight className="navbar-links">
      <NavItem eventKey={1} href="#">Origine</NavItem>
      <NavItem eventKey={2} href="#">Letteratura</NavItem>
      <NavItem eventKey={3} href="#">Cinema</NavItem>
      <NavItem eventKey={4} href="#">Black Mirror</NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>)

export default NavBar
