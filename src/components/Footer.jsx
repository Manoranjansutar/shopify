import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { SiShopify } from 'react-icons/si'
import footeranime from './../assets/footer-anime.svg';


const Footer = () => {
  return (
    <div className='bg-black' >
      <div className="container">
        <div className="row footer p-5">
            <div className="col-lg-3 d-flex flex-column">
              <p className='text-white fs-2 d-flex align-items-center gap-2  '><SiShopify /> Shopify</p>
              <li><a href="" className=''>About Us</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Corporate Information</a></li>
            </div>
            <div className="col-lg-3">
                <h6>Help</h6>
                <li><a href="">Payments</a></li>
              <li><a href="">Shipping</a></li>
              <li><a href="">Cancellation & Returns</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Report Infringement</a></li>
            </div>
            <div className="col-lg-3">
                <h6>Consumer Policy</h6>
                <li><a href="">Cancellation & Returns</a></li>
              <li><a href="">Terms & use</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Security</a></li>
              <li><a href="">Grievance Redresasl</a></li>
            </div>
            <div className="col-lg-3 social-links">
                <h6>Follow Us</h6>
                <div className='d-flex'>
                    <span><FaFacebook /></span>
                    <span><FaInstagramSquare /></span>
                    <span><FaTwitterSquare /></span>
                </div>
                <div>
                <p className='text-white mt-5 '>Become a Seller<a href='/vendor-registration' className=' text-underline mx-3' style={{color:"#ff014f"}}>Click here</a> </p>
               
                </div>
            </div>
        </div>
        <div className='text-white text-center  position-relative'>
            <p className='p-5'>© Copyright 2024<span className='footer-logoname'> Shopify </span>. All rights reserved.  </p>
            <img src={footeranime} alt="" width={140} height={140} className='footer-anime'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
