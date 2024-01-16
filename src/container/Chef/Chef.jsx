import React from 'react'
import './Chef.css'
import { images } from '../../constraints'
import { SubHeading } from '../../components'

export default function Chef() {
  return (
    <div className='app__wrapper section__padding' style={{background: "var(--color-black)"}} id='chef' >
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef1} alt='chef' />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef’s Word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote' />
            <p className='p__opensans'>we believe that cooking is not just about creating a meal; it's an art form that engages all the senses.</p>
          </div>
          <p className='p__opensans'> Our chefs craft each dish as a masterpiece, transforming ordinary ingredients into extraordinary moments. Every plate is a canvas, inviting you to savor the poetry of each bite. Join us in experiencing the culinary journey where passion meets precision.</p>
        </div>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign' />
        </div>
      </div>

    </div>
  )
}
