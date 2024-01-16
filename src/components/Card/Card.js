import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from '../ContextReducer/ContextReducer';
import './Card.css';
import useGetUserEmail from '../../Hooks/useGetuserEmail';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
    let options = props.options;
    let priceOptions = Object.keys(options);
    let dispatch = useDispatchCart();
    let data = useCart();
    const userToken = useGetUserEmail();

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const priceRef = useRef();

    let navigate = useNavigate();


    const handleAddCart = async () => {

        const authToken = userToken;
        if (!authToken) {
            alert("Please log in to add items to the cart");
            navigate("/createuser")
            return;
        }

        let food = [];
        for (const item of data){
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        if (food !=[]) {
            if (food.size === size){
                await dispatch({ type:"UPDATE", id: props.foodItem._id, price:finalPrice, qty:qty});
                return
            } else {
                await dispatch({
                    type: "ADD", id: props.foodItem._id, name: props.foodItem.name,
                    price: finalPrice, qty: qty, size: size
                });
               
            }
            alert('Added to Cart');
        }
      
       // console.log(data);
    }

    let finalPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value)
    }, []);


    return (
        <div className='app__card '>
            <div className="card m-3 g-2"  id="card" style={{ width: "18rem", maxHeight: "380px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="food " style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title m-2">{props.foodItem.name}</h5>

                    <div className='container w-100'>
                        <select className='custom__quantity' onChange={(e) => setQty(e.target.value)} >
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='custom__quantity'  ref={priceRef}  onChange={(e) => setSize(e.target.value)} >
                            {priceOptions.map((data) => {
                                return (<option key={data} value={data}>{data}</option>)
                            })}
                        </select>
                        <div className='d-inline fs-5 h-100'>₹{finalPrice}/-</div>
                    </div>
                    <hr id='breakline' />
                    <button className='custom__button' style={{marginLeft:"8px"}}  onClick={handleAddCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}