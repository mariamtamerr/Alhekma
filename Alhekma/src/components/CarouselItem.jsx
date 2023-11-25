import './CarouselItem.css'
import Carousel from 'react-bootstrap/Carousel';
import s1 from '../assets/images/s1.jpg'
import s2 from '../assets/images/s2.jpg'
import s3 from '../assets/images/s3.jpg'
import s4 from '../assets/images/s4.jpg'
import { faHandshakeAngle, faHouseMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselItem() {
  return (

    <>
    <Carousel slide={false} className='mt-1'>
      <Carousel.Item interval={1000}>
        <img src={s1} className='h-[600px] w-full ' text="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img src={s2} className='h-[600px] w-full' text="Second slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img src={s3} className='h-[600px] w-full' text="Third slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img src={s4} className='h-[600px] w-full' text="Second slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>


{/* ----------- CARDS -------------------------- */}

<div className='d-flex justify-center gap-10 p-5' style={{backgroundColor:"#073F22", color:"white" }}>
  <div className='text-center p-4 box' style={{boxShadow:"0 0 3px 3px",  height:"280px", width:"382px"}}>
    <h1 className='text-5xl mb-3 '>
    <FontAwesomeIcon icon={faUserDoctor}  />
    </h1>
    <h1 className='text-3xl mb-3  '>Find A Doctor </h1>
    <p className='mb-3 '>Search our wide index of professional doctors.</p>
    {/* <a className='bg-white rounded-lg p-2 text-[#073F22] hover:bg-[#073F22]' href="">Find A Doctor</a> */}
    <a className='btn btn-dark py-3 px-4' href="">Find A Doctor</a>
  </div>

  <div className='text-center p-4 box' style={{boxShadow:"0 0 3px 3px", height:"280px", width:"382px"}}>
    <h1 className='text-5xl mb-3 '>
    <FontAwesomeIcon icon={faHouseMedical} />
    </h1>
    <h1 className='text-3xl mb-3 '>Facilities </h1>
    <p className='mb-3 '>Search our facilities</p> <br/>
    <a className='btn btn-dark py-3 px-4' href="">View Facilities</a>
  </div>

  <div className='text-center p-4 box' style={{boxShadow:"0 0 3px 3px", height:"280px", width:"382px"}}>
    <h1 className='text-5xl mb-3 '>
    <FontAwesomeIcon icon={faHandshakeAngle} />
    </h1>
    <h1 className='text-3xl mb-3 '>Services </h1>
    <p className='mb-3 '>Discover Alhekma's unique services.</p> 
    <a className='btn btn-dark py-3 px-4' href="">View Services</a>
  </div>
</div>

</>
  );
}

export default CarouselItem;