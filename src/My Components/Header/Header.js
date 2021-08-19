import React from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import SignupServiceUser from '../SignUp/ServiceUser';
import {NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


function Header() {
 return (
<header>
  <div style={{width:'100%'}}>
    <container fluid>
 
     <Navbar className="custom">
     <Navbar sticky="top" />
     <LinkContainer to="/">
     <Navbar.Brand href="#home">
      <img
        src={"/Images/logo.PNG"}
        width="200"
        height="150"
        className="d-inline-block align-top"
        alt="Right Bell logo"
        />
       </Navbar.Brand>
       </LinkContainer>
     <Form className="search ml-auto ">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-lg-2 form-control"
        aria-label="Search"
      />
</Form> 


<Navbar.Toggle />
     </Navbar>
         
          </container>
          </div>
   <Navbar collapseOnSelect expand="lg" className="custom" variant="dark">
   <Navbar sticky="top" />
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
       <LinkContainer to="/">
      <Nav.Link href="/" style={{marginLeft:'20px',marginRight:'20px'}}>Home</Nav.Link></LinkContainer>
      <Nav.Link href="About"style={{marginRight:'20px'}}>About Us</Nav.Link>
      <Nav.Link href="#Career"style={{marginRight:'20px'}}>Career</Nav.Link>
      <Nav.Link href="#Gallery" style={{marginRight:'20px'}}>Gallery</Nav.Link>
      <Nav.Link href="#ContactUs" style={{marginRight:'20px'}}>Contact Us</Nav.Link>
       </Nav>
    <Nav>
    <NavDropdown title="SignUp" id="collasible-nav-dropdown" style={{marginRight:'20px'}}>
      <LinkContainer to="/ServiceUser">
        <NavDropdown.Item href="/ServiceUser">ServiceUser</NavDropdown.Item></LinkContainer>
        <LinkContainer to="/ServiceProvider">
        <NavDropdown.Item href="/ServiceProvider">ServiProvider</NavDropdown.Item></LinkContainer>
       </NavDropdown>
      <Nav.Link eventKey={2} href="#memes" style={{marginRight:'20px'}}>
        SignIn
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
   </Navbar>
   </header>
    )
}

<SignupServiceUser/>

export default Header;


