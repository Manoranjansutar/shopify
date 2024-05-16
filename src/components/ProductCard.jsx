import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { FaStar } from 'react-icons/fa';
import { ApiContext } from '../context/ApiContext';
  import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';



const ProductCard = (props) => {


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
          <img src={props.photo} alt="" width={40} height={40}/>
           <p>Added to the Cart</p>
         </div>
      )
   } )
      
  }


  const [productList, setProductList] = useState({});
  
  const searchedProduct = async (purl) => {
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


    
   
  return (
    
    <div className='product'>
      <div>
      <Link to={"/product/details/" + props.url} onClick={() =>{searchedProduct(props.url)}}>
          <div className='product-img'>
             <img src={props.photo} className='main-img'/>
              {/* <img src={imgSrc} alt="" className='hover-img'/> */}
          </div>
      </Link>
        <div className='product-details'>
           <h6 className='text-truncate'>{props.productname}</h6>
           <p className=' text-truncate'>{props.details}</p>
           <div className='product-rating'>
             <p>4.8 <FaStar  /> | 1.5k</p>
           </div>
           <div className='discount'>
             <p>₹{props.price} <span>(25% OFF)</span></p>
           </div>
           <div className='product-btn' onClick={()=>addtocart(props.productid, props.price)}><button className='add-btn'>Add to Cart</button></div>
           <ToastContainer/>
        </div>
      </div>
    </div>
 
  )
}

export default ProductCard
