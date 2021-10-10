import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Attendance</Navbar.Brand>

          <Nav.Link eventKey={2}>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}
