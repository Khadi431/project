import React, { useContext } from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


const Header = () => {
  const {logout, user} = useContext(UserContext);

  const handleLogout = () =>{
    logout();
  };
  return (
    <header>
    <Navbar>
      <Container>
        <NavbarBrand></NavbarBrand>
        <Nav.Item>

          <Link to="/" className="nav-link text-white">HOME</Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/addpatient" className="nav-link text-white">
            DOCTORS APPOINTMENT
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/login" className="nav-link text-white">
            SIGNIN
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/signup" className="nav-link text-white">
            SIGNUP
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/signup" className="nav-link text-white">
            CONTACT US
          </Link>
        </Nav.Item>
      </Container>
    </Navbar>
    </header>
  );
};

export default Header;
