import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "../NavBar/navBar.css"




function MainNavbar(props) {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">HR-Trak</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="employee/all">View All Employees</Nav.Link>
        <Nav.Link href="department/all">View All Departments</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default MainNavbar;