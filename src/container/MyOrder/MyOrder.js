import React, { useEffect, useState } from 'react'
import Footer from '../../container/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { SubHeading } from '../../components';


export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            setorderData(response)
        })
        // await res.map((data)=>{
        //    console.log(data)
        // })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div className='app__bg'>
            <Navbar />
            <div className='container'>
                <div className='row section__padding'>
                    {orderData != {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div >
                                                    {arrayData.Order_date ?
                                                        <SubHeading title={data = arrayData.Order_date} />
                                                        :
                                                        <div className='app__row row'>
                                                            <div className='col-12 col-md-6 col-lg-3' >
                                                                <div className="card mt-3 " style={{ width: "16rem", maxHeight: "360px", background:"var(--color-black)",
                                                                 color:"var(--color-golden)", padding:"1rem", textAlign:"center" }}>
                                                                    {/*<img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />*/}
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">{arrayData.name}</h5>
                                                                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                            <span className='m-1'>{arrayData.qty}</span>
                                                                            <span className='m-1'>{arrayData.size}</span>
                                                                            <span className='m-1'>{data}</span>
                                                                            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                                ₹{arrayData.price}/-
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>
            </div>
            <Footer />
        </div>
    )
}
