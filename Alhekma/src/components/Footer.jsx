import React from 'react'
import footer from '../assets/images/footer.png'
import navbarImg from '../assets/images/navbar.png'
import GoogleMaps from './GoogleMaps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <>
     {/* <img src={footer} alt='footer' className='h-[70px] w-full'/>  */}

<br/>
<br/>
<br/>
<br/>
<br/>

     <div className='d-flex justify-center w-full gap-48 bg-black text-white p-8 '>


     {/* ------------ first column ------------------ */}
      <div>
        <div className='content d-flex justify-between gap-6 '>
           <img src={navbarImg} alt='logo' width='50' className='rounded-[80%]' /> 
           <h1 className='text-3xl mt-2'>Alhekma</h1>
        </div> <br/>
        <div className='social d-flex justify-between mt-4'>
          <a href='' >
            <FontAwesomeIcon icon={faFacebook} size="2xl" className='hover:text-white text-[#073f22]' />
          </a>
          <a href=''>
            <FontAwesomeIcon icon={faTwitter} size="2xl" className='hover:text-white text-[#073f22]'  />
          </a>
          <a href='' >
            <FontAwesomeIcon icon={faInstagram} size="2xl" className='hover:text-white text-[#073f22]' />
          </a>
        </div>
      </div>

{/* -------------- second column ----------------- */}

      <div>
        <h1 className='text-3xl'>Departments & Facilities </h1>
        <div className='content d-flex flex-column mt-4'>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Surgery</a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Stroke Unit</a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Radiology Centre</a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Lab</a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Physiotherapy </a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Intensive Care Unit </a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'> Intermediate Care</a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'> Emergency</a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'> Pharmacy</a>
        </div>
      </div>

{/* ----------------- third column -------------------- */}
      <div>
        <h1 className='text-3xl'>Patient Care</h1>
        <div className='content d-flex flex-column mt-4'>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Admission Guide </a> 
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Hospitality </a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Patient Safety </a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Partnerships </a>
          <a href='' className='text-gray-500 cursor-pointer mb-2 hover:text-white'>Insurance </a>
        </div>
      </div>

{/* ----------------- fourth column ------------------------- */}

      <div>
        <h1 className='text-3xl'>How To Reach Us</h1>
        <h5 className='text-gray-500 mt-3'>
        Ali Mubarak Sq. |
          Mansoura
            <br/>
            <br/>
            (050) 2332691-99
            <br/>
            <br/>
            

        </h5>
        
        
        <a href='' className='  hover:text-[#073f22]'>www.alhekmahospital.org</a>
          <br/>
          <br/>
        <p>
          <GoogleMaps/> 
        </p>
      </div>




     </div>
    </>
  )
}

export default Footer
