import React from "react";
import './../styles/navbar.scss'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink className={"custom-navlink-light"} to="/">
              Main
            </NavLink>
          </Nav>
          <Nav className="me-auto">
            <NavLink to="/categories" className={"custom-navlink-light"}>
              Categories
            </NavLink>
          </Nav>
          <Nav className="me-auto">
            <NavLink to="/currencies" className={"custom-navlink-light"}>
              Currencies
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu;