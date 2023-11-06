import React from 'react'
import navbarImg from '../assets/images/navbar.png'

const Navbar = () => {
  return (
    <>
      
{/* 
    <div className=' text-[#073F22] font-extrabold text-lg font-mono p-4 ' style={{boxShadow: "0 0 10px"}}>
        <div className='container lg:flex lg:justify-between lg:gap-x-12 mx-auto hidden'>
            <a href=''>
            <img src={navbarImg} className=' w-10 absolute left-16 ml-16 top-1'/>
            </a>
            <a href=''>Home</a>
            <a href=''>Appointments</a>
            <a href=''>About Us</a>
            <a href=''>Contact Us</a>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="t font-semibold leading-6 ">Log in <span className='text-xl' aria-hidden="true">&rarr;</span></a>
      </div>
        </div>
        

    </div>
     */}

     <div className=" text-[#073F22] text-xl font-mono font-extrabold p-10" style={{boxShadow: "0 0 10px"}} >
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-10 ml-[250px] w-auto" src={navbarImg} alt=""/>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className=" font-semibold leading-6 hover:text-white hover:bg-[#073F22]/75 hover:p-2 hover:rounded">Home</a>
        <a href="#" className=" font-semibold leading-6  hover:text-white hover:bg-[#073F22]/75 hover:p-2 hover:rounded">Appointments</a>
        <a href="#" className=" font-semibold leading-6  hover:text-white hover:bg-[#073F22]/75 hover:p-2 hover:rounded">About Us</a>
        <a href="#" className=" font-semibold leading-6  hover:text-white hover:bg-[#073F22]/75 hover:p-2 hover:rounded">Contact Us</a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className=" font-semibold leading-6  hover:text-white hover:bg-[#073F22]/75 hover:p-2 hover:rounded">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>

</header>
   </div>
    </>
  )
}

export default Navbar
