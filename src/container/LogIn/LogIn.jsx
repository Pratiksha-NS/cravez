import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import Footer from '../Footer/Footer';

export default function LogIn() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  })

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        email: credentials.email,
        password: credentials.password,

      })
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    } else {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  }

  const handleChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className='app__bg'>
      <Navbar />
      <div className='container section__padding' style={{ color: "#fff" }} >
        <form onSubmit={handleSubmit} >
          <h1 className='headtext__cormorant'>Please Login</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control " id="exampleInputEmail1" placeholder='Your Email' aria-describedby="emailHelp" name='email' value={credentials.email} onChange={handleChange} />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Your Password' name='password' value={credentials.password} onChange={handleChange} />
          </div>

          <button type="submit" className="custom__button" >Submit</button>
          <Link to="/createuser" className='custom__button' style={{ marginLeft: "2rem", padding: "0.70rem 1rem" }} >New user</Link>
        </form>
      </div>
      <div style={{ background: "var(--color-black)", padding: "2rem" }} />
      <Footer />
    </div>
  )
}