import React from 'react'
import dr from '../assets/images/dr.jpg'

const Cards = () => {
  return (
    <>
      <div className='container m-16 flex justify-around w-full  '>
        <div className='left'>
            <img className='h-[500px] w-[500px]' src={dr} alt=''/>
        </div>
        <div className='right ml-10 w-[600px] mt-10'>
            <h1 className='text-4xl text-[#073F22] font-medium'>NEUROSURGEON MELBOURNE</h1>
            <hr className='text-[#073F22] text-2xl font-extrabold h-1'/>
            <h5 className='text-lg mt-10 text-gray-700 whitespace-break-spaces' style={{lineHeight:"2"}}>
            Dr. Ahmed Halaka is an Egyptian trained neurosurgeon who manages all general neurosurgical conditions.
            He has subspecialty expertise in both cerebrovascular and skull base neurosurgery.
            Dr. Halaka uses the latest in imaging techniques, including Stealth Neuronavigation, functional MRI and cerebrovascular reactivity testing in formulating decisions for treating patient conditions and planning their surgeries.
            </h5>
            <p>
            
            </p>          
        </div>
        
        

    </div>
    </>
  )
}

export default Cards
