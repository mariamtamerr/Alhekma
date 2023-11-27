
import React from 'react'
import { Route, Routes } from 'react-router-dom'
const MainHome = React.lazy( ()=> import('../pages/MainHome') )
const Departments = React.lazy( ()=> import('../pages/Departments') )
const Facilities = React.lazy( ()=> import('../pages/Facilities') )
const PCare = React.lazy( ()=> import('../pages/PCare') )
const About = React.lazy( ()=> import('../pages/About') )



const Router = () => {
  return (
    <>
      
   
     <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/patient-care" element={<PCare />} />
    </Routes>



    </>
  )
}

export default Router
