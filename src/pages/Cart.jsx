import React, {  useContext, useEffect } from 'react'
import { ApiContext } from '../context/ApiContext'
import EmptyCart from '../components/EmptyCart';
import CartDetails from '../components/CartDetails';
import loader from './../assets/preloader.gif';



const Cart = () => {

  const {cart , isLoading ,reloadCart} = useContext(ApiContext)
  useEffect(()=>{
    reloadCart();
  },[])

  return (
     <div style={{marginTop:"20px"}}>
      {isLoading ? (<div className='text-center'><img src={loader} alt="" className='img-fluid' width={300} height={300} /></div>
        
      ) : cart.length === 0 ? (
        <EmptyCart /> 
      ) : (
        <CartDetails /> 
      )}
     </div>
  )
}

export default Cart
