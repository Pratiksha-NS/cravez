import React from 'react'
import './Gallery.css'
import { images } from '../../constraints'
import { SubHeading } from '../../components'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

const galleryimages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

export default function Gallery() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center' >
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: "#AAA", marginTop: "2rem" }}>Explore our restaurant's enticing photo gallery, capturing the culinary artistry and inviting ambiance that await your senses.</p>
       
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef }>
         { galleryimages.map((image, index) => (
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
            <img src={image} alt='galleryimage' />
            <BsInstagram className='gallery__image-icon' />
          </div>
         ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>

        </div>
      </div>

    </div>
  )
}
