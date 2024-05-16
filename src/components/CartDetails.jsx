import React, { act, useContext, useEffect, useState } from 'react'
import { ApiContext } from '../context/ApiContext'
import Table from 'react-bootstrap/Table';
import { SiShopify } from 'react-icons/si';
import { TiDelete } from 'react-icons/ti';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaSackDollar } from 'react-icons/fa6';
import bank from './../assets/mobile-banking.png';
import atm from './../assets/atm-card.png';
import wallet from './../assets/wallet.png';
import paypal from './../assets/paypal.png';
import card from './../assets/logo.png';
import LoginModal from './LoginModal';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import noimage from './../assets/No_Image_Available.jpg';



const CartDetails = () => {
  const { cart,deleteCartItem,updateCart} = useContext(ApiContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [mode, setMode] = useState('');
  const navigate = useNavigate();

//Calculate the total cost in the cart
  const total = () => {
    let totalcost = 0
    cart.map((item) => {
      totalcost = totalcost + Number(item.total);
    })
    return totalcost;
  }

//opens payment page
  const checkout = async () => {
    if (localStorage.getItem('token')) {
      handleShow();
    } else {
      handleShow1();
    }
  }

//handles payment
  const payNow = async () => {
    const url = "https://cybotrix.com/webapi/cart/paynow";
    const orderData = {
      mode: mode,
      orderid:  localStorage.getItem("orderid"),
      userid: localStorage.getItem("token"),
      total: total(),
    };
    const postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(orderData),
    };
    try {
      const response = await fetch(url, postData);
      const msg = await response.text();
      if(msg === 'Order Placed'){
        navigate('/orderplaced')
      } else {
         navigate('/ordernotplaced')
      }
    } catch (err) {
      console.log("Error", err);
    }
  }

  return (
    <div>
      <div className='container cart-table' style={{ marginTop: "80px" }}>
        <div className="row">
          <h2 className=' text-black d-flex justify-content-center align-items-center m-4 gap-2 align-items-sm-start'><SiShopify />My Cart ({cart.length} items)</h2>
          <div className="col-lg-8 col col-md-12">
            <div className='table-responsive-sm table-responsive-lg table-responsive-md table-responsive-md'>
              <a href="/product" className=' text-decoration-none' >Continue Shopping<span className='arrow' > <FaLongArrowAltRight className='fs-5' /></span></a>
              <Table striped bordered hover className='mt-3' >
                <thead>
                  <tr>
                    <th>#</th>
                    <th className='text-center'>Product</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Quantity</th>
                    <th className='text-center'>Total</th>
                    <th className='text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((item, index) => {
                      return (
                        <tr key={index} className='text-center'>
                          <td className='align-middle'>{index + 1}</td>
                          <td className='text-center'>
                            <span className='d-flex flex-center gap-2'>
                              <img src={noimage} alt="" width={70} height={70} />
                              <p className='text-truncate align-middle'>{item.productname}</p>
                            </span>
                          </td>
                          <td className='align-middle'>{item.priceperunit}</td>
                          <td className='align-middle'>
                            <div className='qty-btn d-flex justify-content-center align-items-center'>
                              <button className="inc-btn" type='button' aria-label="Increase" onClick={()=>{updateCart(item.productid,item.priceperunit,item.orderid,item.id,item.quantity,'add')}}>+</button>
                             
                              <span className='qty-input'>{item.quantity}</span>
                              <button type='button' className="dec-btn" aria-label="Decrease"     onClick={()=>{updateCart(item.productid,item.priceperunit,item.orderid,item.id,item.quantity,'sub')}}>-</button>
                            </div>
                          </td>
                          <td className='align-middle'>{item.total}</td>
                           <td className='align-middle fs-2' onClick={()=>{deleteCartItem(item.orderid,item.id,item.quantity)}}><TiDelete className='del-btn' /></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </div>
          </div>
          <div className='col-lg-4 col-12'>
            <div className='border border-dark col p-2'>
              <h5 className='text-center bg-black text-white p-2 m-1'>Cart Summary {cart.length} items</h5>
              <div className='flex-between'>
                <h6 className='fs-5 m-2 '>Total MRP: </h6>
                <span className='fw-semibold fs-4'>₹{total() + 1000}</span>
              </div>
              <div className='flex-between'>
                <h6 className='fs-5 m-2'>Total Discount: </h6>
                <span className='fw-semibold fs-4'>-₹1000</span>
              </div>
              <div className='flex-between '>
                <h6 className='fs-5 m-2'>Total Amount :</h6>
                <span className='fw-semibold fs-4'>₹{total()}</span>
              </div>
              <div className='flex-between '>
                <h6 className='fs-5 m-2'>Delivery charge:</h6>
                <span className='fw-semibold fs-4'>₹0</span>
              </div>
              <div className='flex-between text-center bg-body-secondary text-black p-1 m-1'>
                <h5 className=''>Sub Total: </h5>
                <span className='fw-semibold fs-4'>{total()}</span>
              </div>
              <button className='btn btn-outline-dark w-100 fw-bold mt-3 mb-3 fs-4' onClick={checkout}>Checkout</button>
              <LoginModal show={show1} onHide={handleClose1} />
              <Modal size="lg" show={show} onHide={handleClose}>
                <div className=''>
                  <h2 className='text-center bg-body-secondary p-2 text-black'>Payment</h2>
                  <div className='border border-secondary'>
                    <div className='flex-between m-3'>
                      <p className=''>You are paying {cart.length} Order Request</p>
                      <p className=''>₹{total()}</p>
                    </div>
                    <div className='flex-between m-3 p-1 bg-body-secondary border border-secondary-subtle'>
                      <p className='fw-bold'>TOTAL AMOUNT TO BE PAID</p>
                      <p className='text-success fw-bold fs-3  '>₹{total()}</p>
                    </div>
                    <div className='m-3'>
                      <p className='fw-bold text-uppercase'>pay via my balance</p>
                      <hr />
                      <p className='d-flex align-items-center gap-2 '><FaSackDollar /> My Balance : ₹ 200</p>
                      <hr />
                      <p className='fw-bold text-uppercase'>Payment Method</p>
                      <hr />
                      <div className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
                        <div className={`flex-center flex-column ${mode === 'Net Banking' ? 'mode-active' : ''}`} >
                          <img src={bank} alt="" width={60} height={60} className='text-center' onClick={() => setMode('Net Banking')} />
                          <p>Net Banking</p>
                        </div>
                        <div className={`flex-center flex-column ${mode === 'PayPal' ? 'mode-active' : ''}`} >
                          <img src={paypal} alt="" width={60} height={60} onClick={() => setMode('PayPal')} />
                          <p>UPI</p>
                        </div>
                        <div className={`flex-center flex-column ${mode === 'Debit Card' ? 'mode-active' : ''}`} >
                          <img src={atm} alt="" width={60} height={60} onClick={() => setMode('Debit Card')} />
                          <p>Debit Card</p>
                        </div>
                        <div className={`flex-center flex-column ${mode === 'Credit card' ? 'mode-active' : ''}`} >
                          <img src={card} alt="" width={60} height={60} onClick={() => setMode('Credit card')} />
                          <p>Credit Card</p>
                        </div>
                        <div className={`flex-center flex-column ${mode === 'Wallet' ? 'mode-active' : ''}`} >
                          <img src={wallet} alt="" width={60} height={60} onClick={() => setMode('Wallet')} />
                          <p className=''>Wallet</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center align-items-center m-4 gap-1'>
                        <button className='btn btn-dark mx-3' onClick={payNow}>Make Payment</button>
                        <button className='btn btn-outline-dark' onClick={handleClose}>Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDetails
