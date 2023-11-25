import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navbarImg from '../assets/images/navbar.png'


const NavbarItem = () => {
  return (
    <>
      


      <Navbar expand="lg" className="bg-body-tertiar">
      <Container className="bg-white">
        <Navbar.Brand href="#home">
          <img src={navbarImg} alt="Alhekma" width="25" height="25"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            

{/* first drop down */}
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Scope
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Accreditations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
{/* second dropdown */}
            <NavDropdown title="Departments" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Surgery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Stroke Unit
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Radiology Centre</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Lab
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Clinics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Physiotherapy
              </NavDropdown.Item>
              
            </NavDropdown>

{/* third dropdown */}
            <NavDropdown title="Facilities" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Intensive Care Unit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Intermediate Care
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Emergency</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Pharmacy
              </NavDropdown.Item>
            </NavDropdown>

            {/* fourth dropdown */}
            <NavDropdown title="Patient Care" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Admission Guide</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Hospitality 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Patient Safety</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Partnerships 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Insurance 
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Contact Us</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>






    </>
  )
}

export default NavbarItem
