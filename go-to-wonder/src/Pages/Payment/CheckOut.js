import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CheckOut.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';

function CheckOut() {
    const navto = useNavigate();
    const [paydata,setPayData] =useState({
        price:1,
        email:"",
        phone:"",
    });
    const location = useLocation();
    // console.log(location.state);
    function changeHandler(event)
    {
        const {name,value} = event.target;
        setPayData((oldData)=>{
            return{
                ...oldData,
                [name]:value
            }
        })
    }
    function orderHandler(e)
    {
        e.preventDefault();
        var options = {
            key: "rzp_test_QGe9x4PKlGFX8U",
            key_secret: "d4Nfr5YstgyKFnXwHimVFdpT",
            amount: parseInt(location.state.cost*paydata.price * 100),
            // currency: "USD",
            email:`${paydata.email}`,
            phone:`${paydata.phone}`,
            // name: "GoToWonder",
            // description: "for testing purpose",
            handler: function (response) {
                console.log(response)
                toast('Payment Successful');
                navto('/welcome');
            },
        
            theme: {
                color: "#3399cc"
            }
        };
        
        var pay = new window.Razorpay(options);
        pay.open();
        console.log(pay)
    }
  return (
    <Layout>
        <>
    {/* <!-- book section start --> */}
    <div className="contact" id="contact">
        <h1 className="order-heading">
            <span>{location.state.title}</span>
        </h1>
        <p id='cost'>Total Price:${location.state.cost*paydata.price}</p>
         <div className="row">
             <div className="row-image">
                 <img src={location.state.image} alt=""/>
             </div>
             <form onSubmit={orderHandler}>
                 <div className="feedback-box">
                     <input type="email" name='email' value={paydata.email} onChange={changeHandler} placeholder="email" className='form-input'/>
                     <input type="number" name='price' value={paydata.price} onChange={changeHandler} placeholder="number of visitors" className='form-input'/>
                 </div>
                 <div className="feedback-box">
                    <input type="number" name='phone' value={paydata.phone} onChange={changeHandler} placeholder="contact number" className='form-input'/>
                    <input type="text" placeholder="address" className='form-input'/>
                    <input type="text" placeholder="arrival" className='form-input'/>
                    <input type="text" placeholder="leaving" className='form-input'/>
                </div>
                {/* <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea> */}
                <input type="submit" className="feedback-btn" value="Buy now"/>
             </form>
         </div>
    </div>

{/* <!-- book section end --> */}
    </>
    </Layout>
  )
}

export default CheckOut
