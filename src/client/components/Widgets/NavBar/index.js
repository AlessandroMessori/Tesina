import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import './index.scss'

const NavBar = (props) => {

  const className = props.black ? 'black' : ''

  console.log(className)

  return (
    <Navbar className='navbar-section' id={className} inverse fluid collapseOnSelect
            fixedTop>
      <Navbar.Header>
        <Link to='/' className='navbar-logo'><p>Tesina</p></Link>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight className="navbar-links">
          <NavItem eventKey={1}>
            <Link to='/origine'>Origine</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to='/origine'>Letteratura</Link>
          </NavItem>
          <NavItem eventKey={3}>
            <Link to='/origine'>Cinema</Link>
          </NavItem>
          <NavItem eventKey={4}>
            <Link to='/origine'>Black Mirror</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
}

export default NavBar
