// src/Slider.js
import React from 'react';
import dr from '../assets/images/dr.jpg'


function Slider() {
  return (
    <div className="slider-container flex ">
      <div className="slider w-[50%]" data-aos="fade-left">
      <div className='left ml-[200px] mt-10'>
            <img className='h-[500px] w-[500px]' src={dr} alt=''/>
        </div>
      </div>

      <div className="slider" data-aos="fade-right">
      <div className='right ml-10 w-[600px] mt-10'>
            <h1 className='text-4xl text-[#073F22] font-medium'>NEUROSURGEON MELBOURNE</h1>
            <hr className='text-[#073F22] text-2xl font-extrabold h-1'/>
            <h5 className='text-lg mt-4 text-gray-700 whitespace-break-spaces' style={{lineHeight:"2"}}>
            Ahmed Halka is a fellow of the Royal College of Surgeons, in Edinburgh and a professor of Neuroscience at The University of Leeds in England. He is a consultant in Neurosurgery and Backstroke at Leeds University Hospitals. He was awarded by the Ministry of Health in England and Wales. A neurologist is a medical doctor who is trained to combat disorders of the nervous system. The nervous system comprises two spheres: The brain and spinal cord. Neurologists diagnose the diseases that afflict the brain, spinal cord, and nerves, such as: Cerebrovascular disease, strokes, Alzheimer's disease, amyotrophic lateral sclerosis, concussion, epilepsy, migraine, multiple sclerosis, Parkinson's disease, and other Demyelinating diseases of the central nervous system, such as multiple sclerosis. People typically need to see a neurologist when they witness symptoms, including, but not restricted to, uncontrolled headaches, memory loss, imbalance, numbness, dizziness, chronic pain, movement complications, and confusion.
            </h5>
            <p>
            
            </p>          
        </div>
        
      </div>
    </div>
  );
}

export default Slider;
