import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "../NavBar/navBar.css"




function MainNavbar(props) {
  return (
  <Navbar  className = "color-nav" variant ='dark' expand="lg">
  <Container>
    <Navbar.Brand href="#home">HR-Trak</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/employee/home">Home</Nav.Link>
        <Nav.Link href="/employee/all">View All Employees</Nav.Link>
        <Nav.Link href="/employee/create">Create Employee</Nav.Link>
        <Nav.Link href="/department/all">View All Departments</Nav.Link>
  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default MainNavbar;