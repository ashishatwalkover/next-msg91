      
import Link from "next/link";
import Image from "next/image";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header =()=> {
  return (
    <>

<Navbar className="container" expand="lg">
          <img className=" d-lg-none d-block" src="/img/logo.svg"/>
        
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=" col-4" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="c-fs-4 c-fw-r" href="#products">Products</Nav.Link>
            <Nav.Link className="c-fs-4 c-fw-r" href="#products">Learning Center</Nav.Link>
            <Nav.Link className="c-fs-4 c-fw-r" href="#products">Pricing</Nav.Link>
          </Nav>

          <img className=" d-lg-block d-none" src="/img/logo.svg"/>

          <Nav className="ms-auto">
            <Nav.Link className="c-fs-4 c-fw-r" href="#products">API Documentations</Nav.Link>
            <Nav.Link className="c-fs-4 c-fw-r d-lg-none d-block" href="#products">Sign In </Nav.Link>
            <button type="button" className="btn btn-primary d-lg-block d-none">SIGN UP</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    </>


  )
};
export default Header;