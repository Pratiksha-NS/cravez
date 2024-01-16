import React from 'react';

import { images } from '../../constraints'

export default function SubHeading({title}) {
  return (
    <div style={{marginBottom:'1rem'}} >
      <p className='p__cormorant' id='title'>{title}</p>
      <img src={images.spoon} alt='spoon' className='spoon__img' />
    </div>
  )
}
