import React from 'react';
import { useCart, useDispatchCart } from '../../components/ContextReducer/ContextReducer';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Cart() {

    let data = useCart();
    let dispatch = useDispatchCart();

    if (data.length === 0){
        return (<div>
            <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
        </div>)
    }

    const handleCheckOut = async () =>{
        let userEmail = localStorage.getItem("userEmail");  //replce 5000 url by backend url onrender
        let response = await fetch ("http://localhost:5000/api/orderData",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        })
        console.log("Order Response:", response);
        if (response.status === 200){
            dispatch({type: "DROP"});
        }
    }

    let totalPrice = data.reduce((total,food) => total + food.price, 0);

    return (
        <div className="table-responsive m-5 mt-5 table-responsive-sm table-responsive-md " >
            <table className="table  table-dark table-hover p__opensans"  >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Option</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((food, index) =>(
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{food.name}</td>
                        <td>{food.qty}</td>
                        <td>{food.size}</td>
                        <td>{food.price}</td>
                        <td><button type='button' className='btn p-0'><DeleteIcon style={{color:'#fff' }} onClick={()=>{dispatch({type: "REMOVE", index: index})}}/></button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div><h1 className='fs-2' >Total Price: {totalPrice}/-</h1></div>
            <div><button className='btn mt-5 custom__button'  onClick={handleCheckOut} > Check Out</button> </div>
        </div>
    )
}