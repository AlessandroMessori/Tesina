import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import './index.scss'

const NavBar = (props) => {

  const className = props.black ? 'black' : ''

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
            <Link to='/utopia'>Utopia</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to='/distopia'>Distopia</Link>
          </NavItem>
          <NavItem eventKey={3}>
            <Link to='/progresso'>Progresso</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
}

export default NavBar
