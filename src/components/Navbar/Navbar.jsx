import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constraints/images'

import {  useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../../Modal';
import Cart from '../../container/Cart/Cart';
import { useCart } from '../ContextReducer/ContextReducer';

import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.cravez} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='/'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
       
        <li className='p__opensans'><a href='#contact'>Contact</a></li>

        {(localStorage.getItem("authToken"))
          ? <li className='p__opensans'><a href='/myOrder'>My Orders</a></li>
          : ""
        }

      </ul>


      {(!localStorage.getItem("authToken"))
        ?
        <div className='app__navbar-login'>
          <a href='/login' className='p__opensans'>LogIn</a>
          <div />
          <a href='/createuser' className='p__opensans' >SignUp</a>
        </div>
        :
        <div className='app__navbar-login'>
          <a href='#' className='p__opensans' onClick={() => { setCartView(true) }} ><ShoppingCartSharpIcon /> My Cart {" "}
            <Badge pill bg='secondary' >{data.length}</Badge></a>        
          <div />
          {cartView ? <Modal onClose={() => setCartView(false)} ><Cart /></Modal> : null}
          <a href='/' className='p__opensans' onClick={handleLogout} >LogOut</a>
        </div>
      }

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='/'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
              <li className='p__opensans'><a href='/login'>LogIn</a></li>
              <li className='p__opensans'><a href='/' onClick={handleLogout}>LogOut</a></li>
            </ul>
          </div>
        )}



      </div>

    </nav>
  )
}
