import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navbarImg from '../assets/images/navbar.png'
import './NavbarItem.css'
import { Link } from 'react-router-dom';


const NavbarItem = () => {


const [showBabyDropDown1, setShowBabyDropDown1] = useState();
const [showBabyDropDown2, setShowBabyDropDown2] = useState();
const [showBabyDropDown3, setShowBabyDropDown3] = useState();
const [showBabyDropDown4, setShowBabyDropDown4] = useState();



  const mouseOverToggle1 = (e) => {

    setShowBabyDropDown1(true)

  }


  const mouseOutToggle1 = (e) => {
        
    setShowBabyDropDown1(false)
    

  }

  // -----

  const mouseOverToggle2 = (e) => {

    setShowBabyDropDown2(true)

  }


  const mouseOutToggle2 = (e) => {
        
    setShowBabyDropDown2(false)
    

  }

// -----------

  const mouseOverToggle3 = (e) => {

    setShowBabyDropDown3(true)

  }


  const mouseOutToggle3 = (e) => {
        
    setShowBabyDropDown3(false)
    

  }


  const mouseOverToggle4 = (e) => {

    setShowBabyDropDown4(true)

  }


  const mouseOutToggle4 = (e) => {
        
    setShowBabyDropDown4(false)
    

  }



  return (
    <>
      
      <div className='container p-2 justify-center ml-[20dvw]'>

     


      <Navbar expand="lg" className="bg-body-tertiar ">
      <Container className="bg-white">
        <Navbar.Brand href="#home">
          <img src={navbarImg} className='mr-[5dvw] mb-1' alt="Alhekma" width="35" height="35"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            

{/* first drop down : ABOUT US  */}



        
            <NavDropdown  
                onMouseOver={mouseOverToggle1} 
                onMouseOut={mouseOutToggle1}
                className='mr-[50px] custom-dropdown' title="About Us" 
                id="basic-nav-dropdown"
                show={showBabyDropDown1}
                onMouseLeave={()=> setShowBabyDropDown1(false)}
                >
       

              <NavDropdown.Item  className='p-3  text-center' href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item  className='p-3 text-center' href="#action/3.2">
                Scope
              </NavDropdown.Item>
              <NavDropdown.Item  className='p-3 text-center' href="#action/3.3">Our Team</NavDropdown.Item>
              
              <NavDropdown.Item  className='p-3 text-center' href="#action/3.4">
                Accreditations
              </NavDropdown.Item>
              <NavDropdown.Item  className='p-3 text-center' href="#action/3.4">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>

           
{/* second dropdown  : DEPARTMENTS */}
            <NavDropdown
                className='mr-[50px] custom-dropdown' title="Departments" 
                onMouseOver={mouseOverToggle2} 
                onMouseOut={mouseOutToggle2}
                id="basic-nav-dropdown"
                show={showBabyDropDown2}
                onMouseLeave={()=> setShowBabyDropDown2(false)}
                > 
                <NavDropdown.Item className='p-3  text-center' href="#action/3.1">Surgery</NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.2">
                Stroke Unit
              </NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.3">Radiology Centre</NavDropdown.Item>
              
              <NavDropdown.Item className='p-3  text-center' href="#action/3.4">
                Lab
              </NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.4">
                Clinics
              </NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.4">
              Physiotherapy
              </NavDropdown.Item>
              
            </NavDropdown>

{/* third dropdown : FACILITIES  */}
            <NavDropdown 
              className='mr-[50px] custom-dropdown' 
              title="Facilities" 
              id="basic-nav-dropdown"
              onMouseOver={mouseOverToggle3} 
              onMouseOut={mouseOutToggle3}
              show={showBabyDropDown3}
              onMouseLeave={()=> setShowBabyDropDown3(false)}
                >
              <NavDropdown.Item className='p-3  text-center' href="#action/3.1">Intensive Care Unit</NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.2">
              Intermediate Care
              </NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.3">Emergency</NavDropdown.Item>
              
              <NavDropdown.Item className='p-3  text-center' href="#action/3.4">
              Pharmacy
              </NavDropdown.Item>
            </NavDropdown>

            {/* fourth dropdown  : PATIENT CARE */}
            <NavDropdown 
              className='mr-[50px] custom-dropdown'
              title="Patient Care"
              onMouseOver={mouseOverToggle4} 
              onMouseOut={mouseOutToggle4}
              show={showBabyDropDown4}
              onMouseLeave={()=> setShowBabyDropDown4(false)}
                >
              <NavDropdown.Item className='p-3  text-center' href="#action/3.1">Admission Guide</NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.2">
              Hospitality 
              </NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.3">Patient Safety</NavDropdown.Item>
              
              <NavDropdown.Item className='p-3  text-center' href="#action/3.4">
              Partnerships 
              </NavDropdown.Item>
              <NavDropdown.Item className='p-3  text-center' href="#action/3.4">
              Insurance 
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Contact Us</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>



    </>
  )
}

export default NavbarItem
