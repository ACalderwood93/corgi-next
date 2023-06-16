"use client";

import Image from "next/image";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary font-bold text-black">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/logo.svg" width={150} height={104} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Home & heating"
              id="basic-nav-dropdown"
              className="text-black"
            >
              <NavDropdown.Item>Boiler cover</NavDropdown.Item>
              <NavDropdown.Item>Boiler Service</NavDropdown.Item>
              <NavDropdown.Item>New Boiler</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
