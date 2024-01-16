import React from 'react'
import './Header.css'
import { images } from '../../constraints'
import SubHeading from '../../components/SubHeading/SubHeading'

export default function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
       <SubHeading title="Discover The Unique Palette" />
       <h1 className='app__header-h1'>the Art of fine Dining</h1>
       <p className='p__opensans' style={{margin:"2rem 0"}}>Indulge in a Symphony of Flavors Crafted with Precision, Redefining the Art of Culinary Excellence at Our Restaurant - Where Flavor Meets Elegance.</p>
       <a href='#menu'><button className='custom__button' type='button'>Explore Menu</button></a>
      </div>

      <div className='app__wrapper_img'>
      <img src={images.welcome1} alt='welcome' />
      </div>

    </div>
  )
}
