      
import Link from "next/link";
import Image from "next/image";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header =()=> {
  return (
    <>
    <nav class=" conatainer navbar navbar-expand-lg  justify-content-sm-between ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   <header className=" container c-fs-4 d-flex flex-wrap align-items-center justify-content-sm-between mb-4 header-c" tabindex="-1" >
      <ul className="nav my-2 justify-content-start mb-md-0 nav-c ">
        <li><Link className="nav-link px-2 " href="#" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Products</Link></li>
        <li><Link className="nav-link px-2 " data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas-Learning">Learning Center</Link></li>
        <li><Link href="#" className="nav-link px-2 ">Pricing</Link></li>
      </ul>

      <Link href="/" >
        <Image  src="/img/logo.svg" width={124} height={40}/>                      
      </Link>

      <div className="nav justify-content-end nav-c">
        <li><Link href="#" className="nav-link px-2 link-dark">API Documentations</Link></li>
        <button type="button" className="btn btn-primary ">SIGN UP</button>
      </div> 

    </header>
    
  </div>
</nav>
<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    </>


  )
};
export default Header;