// src/Slider.js
import React from 'react';
import dr from '../assets/images/dr.jpg'


function Welcome() {
  return (

    <>
    <br/>
    <div className="slider-container flex justify-center gap-48 ">
      
      <div>
        <img src={dr} height='50' width='300'/>
      </div>

      <div className='right  text-center ml-10 w-[600px] mt-10'>
      {/* <div>
         <h1 className='text-xl' style={{borderBottom:"2px solid #073F22", width:"fit-content"}}>Welcome To Alhekma Hospital</h1>
  
      </div> <br/> */}
           
           <div className='text-center'>
            <h1 className='text-4xl text-[#073F22] font-medium'>Welcome To Alhekma Hospital</h1>
            <hr className='text-[#073F22] text-2xl font-extrabold h-1'/>
            <h5 className='text-lg mt-4 text-gray-700 whitespace-break-spaces' style={{lineHeight:"2"}}>
            Anim nisi anim labore dolor aliquip. Ad adipisicing minim irure commodo cupidatat. Officia sunt quis aliquip aute consequat tempor irure nisi do consequat cupidatat consectetur. Nisi ullamco et nulla culpa quis. Amet consectetur sint velit nulla mollit aliquip occaecat ut pariatur do sunt sint ea culpa. Ipsum commodo anim est sunt eu eu ea incididunt amet Lorem non consequat et nisi.
            
            </h5>
            <p>
            
            </p>
            </div>          
        </div>
    </div>


<br/>
<br/>

    <div className="slider-container flex  justify-center  text-center gap-48">
      
      <div>
        <img src={dr} height='50' width='300'/>
      </div>

      <div className='right ml-10 w-[600px] mt-10'>
            <h1 className='text-4xl text-[#073F22] font-medium'>News & Announcements</h1>
            <hr className='text-[#073F22] text-2xl font-extrabold h-1'/>
            <h5 className='text-lg mt-4 text-gray-700 whitespace-break-spaces' style={{lineHeight:"2"}}>
            Anim nisi anim labore dolor aliquip. Ad adipisicing minim irure commodo cupidatat. Officia sunt quis aliquip aute consequat tempor irure nisi do consequat cupidatat consectetur. Nisi ullamco et nulla culpa quis. Amet consectetur sint velit nulla mollit aliquip occaecat ut pariatur do sunt sint ea culpa. Ipsum commodo anim est sunt eu eu ea incididunt amet Lorem non consequat et nisi.
            Labore reprehenderit aliqua anim in.
            </h5>
            <p>
            
            </p>          
        </div>
    </div>


    </>
  );
}

export default Welcome;
