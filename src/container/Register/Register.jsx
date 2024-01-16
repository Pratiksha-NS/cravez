import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import { Footer } from '../../container';

export default function Signup() {
    const [credentials, setcredentials] = useState({
        name: "",
        email: "",
        password: "",
        geolocation: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            })
        });
        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials");
        } else {
            alert("Registration completed now login.");
            setcredentials({
                name: "",
                email: "",
                password: "",
                geolocation: ""
            });
        }
    }

    const handleChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Navbar />
            <div className='app__register app__bg section__padding' style={{ color: "#fff" }}  >
                <div className='container'  >
                    <form onSubmit={handleSubmit} >
                    <h1 className='headtext__cormorant'>Please Register</h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputname1" placeholder='Your Name' name='name' value={credentials.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' name='email' value={credentials.email} onChange={handleChange} />
                            <div id="emailHelp" className="form-text" style={{ color: "#fff" }} >We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder='Your Password' value={credentials.password} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                            <input type="text" className="form-control" id="exampleInputaddress1" placeholder='Your Address' name='geolocation' value={credentials.geolocation} onChange={handleChange} />
                        </div>
                        <button type="submit" className="custom__button " >Submit</button>
                        <Link to="/login" className='custom__button' style={{ marginLeft: "2rem", padding: "0.70rem 1rem" }} >Already a user</Link>
                    </form>
                </div>
            </div>
            <div style={{ background: "var(--color-black)", padding: "2rem" }} />
            <Footer />
        </div>
    )
}