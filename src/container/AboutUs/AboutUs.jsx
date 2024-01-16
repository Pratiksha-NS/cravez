import React from 'react'
import './AboutUs.css'
import { images } from '../../constraints'


export default function AboutUs() {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about' >
      <div className='app__aboutus-overlay flex__center'>
          <img src={images.G1} alt='c'/>
      </div>

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='spoon' className='spoon__img'/>
          <p className='p__opensans'>At our restaurant, we take pride in curating an unparalleled dining experience that transcends the ordinary. With a commitment to culinary excellence, we blend artistry and innovation to bring you a menu that reflects our passion for exceptional flavors. From the warm ambiance to the carefully crafted dishes, our commitment to your satisfaction is evident in every aspect of your dining journey.</p>
          <a href='#chef'><button type='button' className='custom__button'>Know More</button></a>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='knife'/>
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='spoon' className='spoon__img'/>
          <p className='p__opensans'> our restaurant has a rich history rooted in a love for culinary artistry. From our humble beginnings as a cozy eatery to evolving into a renowned dining destination, our journey has been shaped by a dedication to quality and a pursuit of culinary perfection. Over the years, we've delighted patrons with a fusion of traditional and contemporary flavors, creating a culinary legacy that continues to unfold with every dish served.</p>
          <a href='#chef'><button type='button' className='custom__button'>Know More</button></a>
        </div>

      </div>
    </div>
  )
}
