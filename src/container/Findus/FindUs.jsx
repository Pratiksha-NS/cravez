import React from 'react'
import { images} from '../../constraints'
import { SubHeading } from '../../components'

export default function FindUs() {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}} >Visit Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>123 Serene Street, Tranquilville, Blissful County, Harmony State, 98765</p>
        <p className='p__opensans'>+91 666 556 5654</p>
        <p className='p__opensans'>+91 258 753 1598</p>
        <p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem 0"}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 2:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
    </div>
  )
}
