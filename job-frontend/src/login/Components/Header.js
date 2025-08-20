import React from "react";
import { Navbar, Container } from "react-bootstrap";
// import { BsSearch } from "react-icons/bs";
import dadhi from "../Components/images/logo.png";

function Header() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className=" text-primary font-italic " href="/login">
            {/* <i className="bi bi-search"></i> */}
            {/* <span className="d-flex">
              <i
                className="bi bi-search"
                style={{ fontSize: "1.75rem", margin: "0px 6px" }}
              ></i>
              <h1>JOBHUNT </h1>
            </span> */}
           
            {/* <i className="bi bi-search"></i> */}
            {/* <img src={dadhi}/> */}
         
          {/* <span className="d-inline-block align-top mr-2 mb-2 pr-1">
            <img src={dadhi} alt="Logo" width="45" height="45"  className="logo-image"  style={{ borderRadius: '5px' }} />
          </span>
          
          WorkMU */}

<span className="d-flex align-items-center">
  <span className="d-inline-block align-top mr-2 pr-3">
    <img src={dadhi} alt="Logo" width="45" height="45" className="logo-image" style={{ borderRadius: '5px' }} />
  </span>
  <span className="align-middle">WorkMU</span>
</span>


          </Navbar.Brand>
          <Navbar.Toggle
          // aria-controls="responsive-navbar-nav"
          />
          {/* <Navbar.Collapse
          //  id="responsive-navbar-nav"
          >
            <Nav
              // style={{ marginLeft: "1000px" }}
              className="me-auto"
            >
              <Nav.Link href="#home">
                <Button variant="primary">Home</Button>
              </Nav.Link>

              <Nav.Link href="Login">
                <Link to="Login">
                  <Button variant="primary">LOGIN</Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="Register">
                <Link to="Register">
                  <Button variant="primary">Register</Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
      {/* <h3 className="m-5 font-italic"> Find the Job that fits for you</h3> */}
    </div>
  );
}

export default Header;
