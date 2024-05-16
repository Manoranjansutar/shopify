import React from 'react'
import emptyCart from './../assets/emptycart.gif';
import { Link } from 'react-router-dom';


const EmptyCart = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100vw',height:'100vh', marginTop:"-80px"}}>
      <img src={emptyCart} alt="" className='img-fluid w-25' />
      <p>Your Cart needs some love</p>
      <p>Fill your cart with the best of <span className='fw-bold'>Shopify</span></p>
      <Link to='/product'><button  className='btn btn-dark'>Start shopping</button></Link>
    </div>
  )
}

export default EmptyCart
