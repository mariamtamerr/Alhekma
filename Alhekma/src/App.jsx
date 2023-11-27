
import './App.css'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import 'font-awesome/css/font-awesome.min.css';
import Cards from './components/Cards'
// import Coming from './components/Coming'
import Home from './components/Home'
import Navbar from './components/NavbarItem'
import CarouselItem from './components/CarouselItem'
import  Welcome from './components/Welcome'
import { useEffect } from 'react'
import Cardies from './components/Cardies'
import Footer from './components/Footer';
import NavbarItem from './components/NavbarItem';
import Partners from './components/Partners';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []); 



  return (
    <>
      {/* <Coming/> */}
     {/* <NavbarItem/>
      <CarouselItem/>
      <Welcome/>  
      <Partners/> */}
 
 
      <NavbarItem/>
      <BrowserRouter basename="/Alhekma">
        <Router /> 
      </BrowserRouter>
      <Footer/>



    
    </>
  )
}

export default App
