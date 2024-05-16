import React from 'react'
import error from './../assets/error2.gif';
import { Link } from 'react-router-dom';

const OrderNotPlaced = () => {
  return (
    <div className='d-flex justify-content-center  align-items-center flex-column' style={{width:"100vw",height:"100vh" }}>
      <img src={error} alt="" className='img-fluid ' width={400}/> 
      <h3>Error during transaction!!!</h3>
      <p>Your Order has not been placed .Your <span className='fw-bold'>order Id {localStorage.getItem('orderid')}</span> for future refernce</p>
      <a href="/cart" className='text-decoration-none mb-2 fs-5 text-success fw-bold'>Try Again</a>
      <Link to='/product'><button className='btn btn-dark' >Continue Shopping</button></Link>
    </div>
  )
}

export default OrderNotPlaced
