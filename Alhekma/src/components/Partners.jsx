import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import g1 from '../assets/images/g1.jpg'
import g2 from '../assets/images/g2.jpg'
import g3 from '../assets/images/g3.jpg'
import i1 from '../assets/images/i1.jpg'
import i2 from '../assets/images/i2.jpg'
import i3 from '../assets/images/i3.jpg'
import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import p3 from '../assets/images/p3.jpg'


const Partners = () => {
  return (
    <>
      
  

<br/>
<br/>
<br/>
<br/>
<br/>
<div className='container'>

 {/* -------- Government Partners -------- */}
 <h1 className='text-5xl text-center'>Government Partners</h1> <br/>
   <CardGroup >
      <Card className='mr-5' >
        <Card.Img variant="top" src={g1} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3'>SCP</Card.Title>
        </Card.Body>  
      </Card>


      <Card  className='mr-5' >
        <Card.Img variant="top" src={g2} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3'>Engineers Syndicate</Card.Title>
        </Card.Body>
      </Card>

      <Card  className='' >
        <Card.Img variant="top" src={g3} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3 '>HIMU</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>

    <br/>
    <br/>
    <br/>
<br/>


 {/* -------- Insurance Partners -------- */}
 <h1 className='text-5xl text-center '>Insurance Partners</h1> <br/>
   <CardGroup>
      <Card className='mr-5' style={{boxShadow:"0 0 3px 1px"}}>
        <Card.Img variant="top" src={i1} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3'>Next Care</Card.Title>
        </Card.Body>  
      </Card>


      <Card  className='mr-5' style={{boxShadow:"0 0 3px 1px"}}>
        <Card.Img variant="top" src={i2} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3'>Smart</Card.Title>
        </Card.Body>
      </Card>

      <Card  className='' style={{boxShadow:"0 0 3px 1px"}}>
        <Card.Img variant="top" src={i3} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3'>Unicare</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>

<br/>
<br/>
<br/>
<br/>

 {/* -------- Petroleum Partners -------- */}
 <h1 className='text-5xl text-center'>Petroleum Partners</h1> <br/>
   <CardGroup>
      <Card className='mr-5' style={{boxShadow:"0 0 3px 1px"}}>
        <Card.Img variant="top" src={p1} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3'>Gasco</Card.Title>
        </Card.Body>  
      </Card>


      <Card  className='mr-5' style={{boxShadow:"0 0 3px 1px"}}>
        <Card.Img variant="top" src={p2} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3'>Gupco </Card.Title>
        </Card.Body>
      </Card>

      <Card  className='' style={{boxShadow:"0 0 3px 1px"}}>
        <Card.Img variant="top" src={p3} />
        <Card.Body>
          <Card.Title className='text-center btn btn-dark w-full h-full text-white p-3'>MTP</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
</div>
    </>
  )
}

export default Partners
