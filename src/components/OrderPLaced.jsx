import React from 'react'
import success from './../assets/check.gif';
import { Link } from 'react-router-dom';


const OrderPLaced = () => {

  return (
    <div className='d-flex justify-content-center  align-items-center flex-column' style={{width:"100vw",height:"100vh" }}>
      <img src={success} alt="" className='img-fluid ' width={200}/> 
      <h3>Order Confirmed!!!</h3>
      <p>Your Order has been placed successfully .Your <span className='fw-bold'>order Id {localStorage.getItem('orderid')}</span></p>
      <p>Get Delivery by <span className='fw-bold text-success'>7th May 2024</span></p>
      <a href="/orders" className='text-decoration-none m-3 fs-5 text-success fw-bold'>Track Order</a>
      <Link to='/product'><button className='btn btn-dark' >Continue Shopping</button></Link>
    </div>
  )
}

export default OrderPLaced
