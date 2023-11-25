import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import brain from '../assets/images/brain.jpeg';


function Cardies() {
  return (
    <>

    <div className=' mt-16 mb-16' style={{boxShadow:"0 0 5px"}}>

        <div className='container p-16'>

        
        <div className='flex gap-7 mb-5'>
            <Card style={{ width: '18rem', height:'18rem' }}>
            <Card.Body>
                <Card.Title className='text-center'>Brain Surgery</Card.Title>
                <img src={brain}/>
                
                {/* <FontAwesomeIcon className='w-16 h-16 align-middle' icon={faBrain}  style={{ color: "#073f22" }} /> */}
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Alzheimer's</Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Amyotrophic Lateral Sclerosis</Card.Title>

            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Amyotrophic Lateral Sclerosis</Card.Title>

            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Amyotrophic Lateral Sclerosis</Card.Title>

            </Card.Body>
        </Card>
        </div>
        
{/* ---------    SECOND LINE ------------------ */}
    <div className='flex gap-7'>
        <Card style={{ width: '18rem', height:'18rem' }}>
            <Card.Body>
                <Card.Title>SPINE SURGERY</Card.Title>

            </Card.Body>
        </Card>


        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Amyotrophic Lateral Sclerosis</Card.Title>

            </Card.Body>
        </Card>


        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Amyotrophic Lateral Sclerosis</Card.Title>

            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Amyotrophic Lateral Sclerosis</Card.Title>

            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Amyotrophic Lateral Sclerosis</Card.Title>

            </Card.Body>
        </Card>

    </div>
        
</div>
    </div>
    
    </>
  );
}

export default Cardies;