import React from 'react'
import img from '../assets/images/s2.jpg'

const About = () => {
  return (
    <div>

      <h1 className='text-4xl mb-4 text-center mt-10' >History</h1>
      <div className='container d-flex justify-center gap-12  p-5' style={{boxShadow:"0 0 3px"}}>
        <div className='content '>
          Officia nisi ut officia ipsum consectetur nulla commodo cillum nulla est ea fugiat. Lorem consequat exercitation sit amet ea aliqua ea et nostrud ea cillum nisi dolor. Mollit laborum aliquip esse sunt mollit dolor magna dolore culpa. Ex qui mollit exercitation deserunt culpa duis Lorem quis mollit adipisicing nostrud amet. Voluptate cupidatat anim adipisicing nulla adipisicing laborum minim incididunt dolore fugiat Lorem id. Ea sit occaecat consequat officia amet do mollit ad consequat eu velit qui anim cupidatat. Enim veniam do exercitation velit pariatur veniam laborum nulla voluptate.
        </div>


        <div className='img'>
          <img src={img} alt='media'/>
        </div>
      
      </div>

{/* --------- */}

      <div className='container mt-8'>
         <h1 className='text-4xl'>Scope</h1>
          Ipsum reprehenderit voluptate non consequat sit velit nisi deserunt Lorem pariatur amet sunt. Ex aliquip eiusmod consectetur veniam amet non ad incididunt sint adipisicing Lorem et. Nisi duis ut ex occaecat. Labore nulla pariatur consequat anim fugiat. Consectetur ut esse cillum nostrud id culpa nostrud. Consequat consequat eu exercitation qui. Sint consequat laborum id sit ad pariatur magna excepteur velit in commodo aute.
      </div>


      <div className='container mt-8'>
         <h1 className='text-4xl'>Out Team</h1>
          Ipsum reprehenderit voluptate non consequat sit velit nisi deserunt Lorem pariatur amet sunt. Ex aliquip eiusmod consectetur veniam amet non ad incididunt sint adipisicing Lorem et. Nisi duis ut ex occaecat. Labore nulla pariatur consequat anim fugiat. Consectetur ut esse cillum nostrud id culpa nostrud. Consequat consequat eu exercitation qui. Sint consequat laborum id sit ad pariatur magna excepteur velit in commodo aute.
      </div>



      <div className='container mt-8'>
         <h1 className='text-4xl'>Accreditations</h1>
          Ipsum reprehenderit voluptate non consequat sit velit nisi deserunt Lorem pariatur amet sunt. Ex aliquip eiusmod consectetur veniam amet non ad incididunt sint adipisicing Lorem et. Nisi duis ut ex occaecat. Labore nulla pariatur consequat anim fugiat. Consectetur ut esse cillum nostrud id culpa nostrud. Consequat consequat eu exercitation qui. Sint consequat laborum id sit ad pariatur magna excepteur velit in commodo aute.
      </div>


      <div className='container mt-8'>
         <h1 className='text-4xl mb-4'>Contact Us</h1>
         <form>
          <input type='email' className='form-control mb-4' placeholder='Enter your email address'/>
          <input type='text' className='form-control mb-4 ' placeholder='Enter your name'/>
          <button className='btn btn-success py-2 px-4 '>Send</button>
         </form>
      </div>

    </div>
  )
}

export default About
