import React, { useState } from 'react'
import "./Newsletter.css"
import SubHeading from '../SubHeading/SubHeading'
import { Link } from 'react-router-dom'

export default function Newsletter() {

  const [email, setEmail] = useState({email: ""})

  const handleSubmit = () => {
    setEmail({email: ""})
  }

  return (
    <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant' >Subscribe to Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your Email' value={email.email} onChange={(e) => setEmail({ email:e.target.value})}/>
      <Link to="/" ><button className='custom__button' onClick={handleSubmit} >Subscribe</button></Link>
    </div>
    </div>
  )
}
