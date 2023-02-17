import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const productMenu = document.getElementById("product-menu");
    const learningCenter = document.getElementById("learning-center");
    const menuBackdrop = document.getElementById("menu-backdrop");
    const linkProducts = document.getElementById("link-products");
    const linkLearning = document.getElementById("link-learning");
    const body = document.getElementsByTagName("body")[0];
    
    const showNav = (e) => {
      productMenu.classList.add("active");
      learningCenter.classList.remove("active");
      menuBackdrop.classList.add("active");      
      body.classList.add("oh");      
    }
    linkProducts.addEventListener('mouseover', showNav);
    
    const showLearningCenter = (e) => {
      learningCenter.classList.add("active");
      menuBackdrop.classList.add("active");      
      body.classList.add("oh");      
    }
    linkLearning.addEventListener('mouseover', showLearningCenter);
    
    const hideMenu = (e) => {
      productMenu.classList.remove("active");
      menuBackdrop.classList.remove("active");
      learningCenter.classList.remove("active");
      body.classList.remove("oh");
    }
    menuBackdrop.addEventListener('mouseover', hideMenu);

  }, []);

  return (
    <div className="px-0 px-md-5">
      <Navbar className="px-3 px-md-5" expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=" col-4" id="basic-navbar-nav">
          <Nav className="me-auto product-navbar">
            <Nav.Link className="c-fs-4 c-fw-r" href="#products" id="link-products">Products</Nav.Link>
            <Nav.Link className="c-fs-4 c-fw-r" href="#products" id="link-learning">Learning Center</Nav.Link>
            <Nav.Link className="c-fs-4 c-fw-r" href="#products">Pricing</Nav.Link>
          </Nav>

          <img className=" d-lg-block d-none" src="/img/logo.svg" />

          <Nav className="ms-auto">
            <Nav.Link className="c-fs-4 c-fw-r" href="#products">API Documentations</Nav.Link>
            <Nav.Link className="c-fs-4 c-fw-r d-lg-none d-block" href="#products">Sign In </Nav.Link>
            <button type="button" className="btn btn-primary c-fs-4 d-lg-block d-none">Sign UP</button>
          </Nav>
        </Navbar.Collapse>
        <img className=" d-lg-none d-block nav-logo" src="/img/logo.svg" />
        <button type="button" className="btn c-fs-5 btn-outline-primary d-lg-none d-block">Log In</button>
      </Navbar>
      <div id="menu-backdrop"></div>
    </div>
  )
};
export default Header;