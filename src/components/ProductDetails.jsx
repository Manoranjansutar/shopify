import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cloth2 from './../assets/cloth2.jpg';
import cloth3 from './../assets/cloth3.jpg';
import cloth4 from './../assets/cloth4.jpg';
import mobile3 from './../assets/phone2.jpg';
import mobile2 from './../assets/phone3.jpg';
import mobile4 from './../assets/phone4.jpg';
import laptop2 from './../assets/laptop2.jpg';
import laptop3 from './../assets/laptop3.jpg';
import laptop4 from './../assets/laptop4.jpg';
import table2 from './../assets/table2.jpg';
import table3 from './../assets/table3.jpg';
import table4 from './../assets/table4.jpg';
import electronics2 from './../assets/electronics2.webp';
import electronics3 from './../assets/electronics3.webp';
import electronics4 from './../assets/electronics4.webp';
import kitchen2 from './../assets/kitchen2.webp';
import kitchen3 from './../assets/kitchen3.webp';
import kitchen4 from './../assets/kitchen4.webp';
import security2 from './../assets/security2.webp';
import security3 from './../assets/security3.webp';
import security4 from './../assets/security4.webp';
import beauty2 from './../assets/beauty2.webp';
import beauty3 from './../assets/beauty3.webp';
import beauty4 from './../assets/beauty4.webp';
import shoe2 from './../assets/shoe2.webp';
import shoe3 from './../assets/shoe3.webp';
import shoe4 from './../assets/shoe4.webp';
import keyboard2 from './../assets/keyboard2.jpg';
import keyboard4 from './../assets/keyboard3.jpg';
import keyboard3 from './../assets/keyboard4.jpg';
import tools2 from './../assets/tools2.jpg';
import tools3 from './../assets/tools3.jpg';
import tools4 from './../assets/tools4.jpg';
import earphone2 from './../assets/earphone2.webp';
import earphone3 from './../assets/earphone3.webp';
import earphone4 from './../assets/earphone4.webp';
import watch2 from './../assets/watch2.jpg';
import watch3 from './../assets/watch3.jpg';
import watch4 from './../assets/watch4.jpg';
import tv2 from './../assets/tv2.webp';
import tv3 from './../assets/tv3.webp';
import tv4 from './../assets/tv4.webp';
import Badge from 'react-bootstrap/Badge';
import { FaStar } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { ApiContext } from '../context/ApiContext';



const ProductDetails = () => {
    const [productList, setProductList] = useState({});
    const { purl } = useParams();
    const {isLoading} = useContext(ApiContext)

    const searchedProduct = async () => {
      let url = "https://cybotrix.com/webapi/product/searchproductbyurl";
      let searchData = { url: purl, type: "pdetails" };
      let postData = {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(searchData),
      };
      await fetch(url, postData)
        .then((response) => response.json())
        .then((resultArr) => {
          setProductList(resultArr);
        })
        .catch((err) => console.log("Error in getting product", err));
    }
    useEffect(() => {
        searchedProduct();
      }, []);

      const changeImage = (src) =>{
        document.getElementById('mainimg').src = src;
      }

      let imgSrc2,imgSrc3,imgSrc4 ;
      if(productList.categoryid === '28'){
        imgSrc2 = shoe2 , imgSrc3 = shoe3 , imgSrc4 = shoe4
      } else if(productList.categoryname === 'mobile'){
        imgSrc2 = mobile2 ,imgSrc3 = mobile3 ,imgSrc4 = mobile4
      } else if(productList.categoryname === 'Laptop'){
        imgSrc2 = laptop2 ,imgSrc3 = laptop3 ,imgSrc4 = laptop4
      } else if(productList.categoryname === 'Furniture'){
        imgSrc2 = table2 ,imgSrc3 = table3 ,imgSrc4 = table4
      } else if(productList.categoryid === '7') {
        imgSrc2 = electronics2 ,imgSrc3 = electronics3 ,imgSrc4 = electronics4
      } else if(productList.categoryid === '19') {
        imgSrc2 = kitchen2 ,imgSrc3 = kitchen3 ,imgSrc4 = kitchen4
      } else if(productList.categoryid === '20') {
        imgSrc2 = security2 ,imgSrc3 = security3 ,imgSrc4 = security4
      } else if(productList.categoryid === '21') {
        imgSrc2 = beauty2 ,imgSrc3 = beauty3 ,imgSrc4 = beauty4
      } else if(productList.categoryid === '25') {
        imgSrc2 = keyboard2 ,imgSrc3 = keyboard3 ,imgSrc4 = keyboard4
      } else if(productList.categoryid === '26') {
        imgSrc2 = tools2 ,imgSrc3 = tools3 ,imgSrc4 = tools4
      } else if(productList.categoryid === '24') {
        imgSrc2 = earphone2 ,imgSrc3 = earphone3 ,imgSrc4 = earphone4
      } else if(productList.categoryid === '14') {
        imgSrc2 = watch2 ,imgSrc3 = watch3 ,imgSrc4 = watch4
      } else if(productList.categoryid === '16') {
        imgSrc2 = cloth2 ,imgSrc3 = cloth3 ,imgSrc4 = cloth4
      } else if(productList.categoryid === '15') {
        imgSrc2 = tv2 ,imgSrc3 = tv3 ,imgSrc4 = tv4
      }  




 
      const addtocart = (id,price) =>{
        const newCart = {
          productid: id,
          orderid: localStorage.getItem("orderid"),
          qty: "1",
          price: price,
        };
        let postData = {
          headers: {"content-type": "application/json"},
          method: "POST",
          body: JSON.stringify(newCart)
        };
        fetch("https://cybotrix.com/webapi/cart/addtocart", postData)
          .then((res) => res.text())
          .then((data) =>  {
          toast.success(
             <div className='d-flex gap-2'>
              <img src={productList.photo} alt="" width={40} height={40}/>
               <p>Added to the Cart</p>
             </div>
          )
       } )
          
      }
    
  return (
    
      
    
    <div className='container' style={{marginTop:"100px"}}>
        <div className="row">
          <div className="col-lg-6 d-flex gap-4 product-page-details">
            <div className='d-flex flex-column gap-4'>
              <img src={`${productList.photo}`} alt=""  onClick={() =>{changeImage(`${productList.photo}`)}} className='small-img' width={120} height={120}/>
              <img src={imgSrc2} alt="" className='small-img' onClick={() =>{changeImage(imgSrc2)}} width={120} height={120}/>
              <img src={imgSrc3} alt="" className='small-img' onClick={() =>{changeImage(imgSrc3)}} width={120} height={120}/>
              <img src={imgSrc4} alt="" className='small-img' onClick={() =>{changeImage(imgSrc4)}} width={120} height={120}/>
            </div>
            <img src={`${productList.photo}`} alt=""  id='mainimg' className='img-fluid back-img  object-fit-contain main-img' height={500} width={400} />
          </div>
          <div className="col-lg-6">
            <div className='d-flex gap-4 align-items-center'>
              <h3>{productList.brandname}-{productList.productname}</h3>
              <h6 className='badge'>
                <Badge bg="success" className='p-2'>{productList.categoryname}</Badge>
              </h6>
            </div>
            <div>
              <div className='d-flex mt-2 mb-2 gap-3'>
               <Badge bg="success" className='p-2 rounded'>4.8 <FaStar /></Badge>
               5999 rating & 1200 reviews
              </div>
              <div className='mt-2 mb-2'>
                <h3>₹{productList.price} <span className='text-muted text-decoration-line-through fs-4'>₹{productList.price * 1.25}</span> <span className='text-danger fs-5'>(25% OFF)</span></h3>
              </div>
            </div>
            <div>
              <h5 className='mt-3'>Available Offers</h5>
              <div>
                <MdLocalOffer /> <span className='fw-semibold'>Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card <span className='text-primary fw-bold'>T&C</span>
              </div>
              <div>
                <MdLocalOffer /> <span className='fw-semibold'>Special Price</span> Get extra ₹5000 off (price inclusive of cashback/coupon)<span className='text-primary fw-bold'>T&C</span>
              </div>
              <div>
                <MdLocalOffer /> <span className='fw-semibold'>Bank Offer</span> 10% Cashback on Sbi Debit Card <span className='text-primary fw-bold'>T&C</span>
              </div>
              <div>
                <MdLocalOffer /> <span className='fw-semibold'>Bank Offer</span> Rs 1000 Cashback on HDFC Credit Bank Card <span className='text-primary fw-bold'>T&C</span>
              </div>
            </div>
            <div className='d-flex gap-2 mt-4 mb-4'>
              {/* <button className='btn btn-outline-dark w-100'>Wishlist</button> */}
              <button className='btn btn-dark' onClick={()=>addtocart(productList.productid, productList.price)}>Add to Cart</button>
              <ToastContainer/>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default ProductDetails;
