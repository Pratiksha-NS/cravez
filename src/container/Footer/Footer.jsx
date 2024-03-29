import React from 'react'
import './Footer.css'
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { images } from '../../constraints'

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>123 Serene Street, Tranquilville, Blissful County, Harmony State, 98765</p>
          <p className='p__opensans'>+91 666 556 5654</p>
          <p className='p__opensans'>+91 258 753 1598</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.cravez} alt='logo' />
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>08:00 am -12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00am -11:00 pm</p>
        </div>

      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>{year} cravez. All Rights reserved.</p>
      </div>
    </div>
  )
}
