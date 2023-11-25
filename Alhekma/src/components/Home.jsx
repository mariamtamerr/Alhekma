import React from 'react'
import s1 from '../assets/images/s1.jpg'
import s2 from '../assets/images/s2.jpg'
import s3 from '../assets/images/s3.jpg'
import s4 from '../assets/images/s4.jpg'
import backgroundImg from '../assets/images/reserve.png'
import { Button } from 'react-bootstrap'
 
const Home = () => {
  return (
    <>


    <img src={backgroundImg} alt='backgroundImg' 
        className='opacity-[70%] h-[600px] mt-2 relative'
    />

    <div className='content'>
        <h1 className='absolute text-8xl font-serif text-[#073F22]  font-extrabold top-[30%] left-[20%]'>Advanced CTScan</h1>
        <a className=' absolute top-[50%] left-[30%] bg-[#073F22] py-6 px-8  text-white rounded-2xl font-mono font-bold text-2xl hover:bg-white hover:text-[#073F22] ' href=''>Schedule Appointment</a>
      
    </div>
  

 
    </>
  )
}

export default Home
