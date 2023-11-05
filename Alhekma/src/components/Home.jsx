import React from 'react'
import Coming from '../assets/images/Coming.png'

const Home = () => {
  return (
    <>
      
    
    <div className='parent w-full h-full '>
        <img className='lg:w-full w-[400px] lg:h-full h-[400px] absolute object-cover' src={Coming} alt='Coming Soon'/>
        <div className='w-full h-full  bg-black/80 absolute top-0 '></div>
        <h1 className='z-10 md:text-[5rem] text-3xl text-gray-300 absolute top-[34.9%] left-[30%]'>Coming Soon</h1>
    </div>
    

    </>
  )
}

export default Home
