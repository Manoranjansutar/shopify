import React from 'react'
import seller from './../assets/seller.png';
import { Link } from 'react-router-dom';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaWallet } from 'react-icons/fa';
import { PiPhoneCallFill } from 'react-icons/pi';

const BecomeSeller = () => {
  return (
    <div className='container' style={{marginTop:'100px'}}>
      <div className="row">
        <h1 className='text-center mb-4'>Sell Online with Shopify</h1>
        <div className='col-lg-12 d-flex justify-content-center align-items-center gap-4'>
          <div className='d-flex flex-column justify-content-center align-items-center bg-secondary-subtle p-3'>
          <FaPeopleGroup className='fs-1'/>
          <p>10Cr+ Shopify Customers</p>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center bg-secondary-subtle p-3'>
          <FaWallet className='fs-1'/>
          <p>7* days secure & regular payments</p>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center bg-secondary-subtle p-3'>
          <PiPhoneCallFill className='fs-1'/>
          <p>One click Seller Support</p>
          </div>
        </div>
        <div className="col-lg-6">
        <img src={seller} alt="" className='img-fluid'/>
        </div>
        <div className="col-lg-6 d-flex justify-content-center flex-column">
            <h1 className='fw-bold' >Create an Shopify seller account</h1>
            <p>You know what it’s like to shop in the Shopify store—why not try selling with us? Start by creating an Shopify seller account. Then access tools and programs that can help you launch, manage, and grow your ecommerce business.</p>
            <Link to='/vendor-registration'><button className='btn btn-dark btn-lg w-100 my-3'>Sign Up</button></Link>
        </div>
      </div>
    </div>
  )
}

export default BecomeSeller
