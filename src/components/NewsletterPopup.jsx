import React, { useState, useEffect } from 'react';
// import newsletter from './../assets/Shoppingbag3.jpg';
// import newsletter from './../assets/Shoppingbag1.svg';
import newsletter from './../assets/Shoppingbag2.svg';

import logo from './../assets/shopify_black_logo_icon_147085 (1).png';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email,setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Show the pop-up after 3 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setShowPopup(true);
      localStorage.setItem('hasSeenPopup' , "true");
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

 


  

  const handleClosePopup = (e) => {
    // Close the pop-up if the user clicks outside of it
    if (e.target.classList.contains('popup-overlay')){
      setShowPopup(false);
    }
  };

  
  const subscribeHandler = () =>{
     if(email != null){
        setTimeout(()=>{
          toast.success("Subscribed !!!")
          setShowPopup(false)
        },2000)
     } 
     else {
       toast.error("Enter valid email adress")
     }
  }

  return (
    <div
      className={`popup-overlay ${showPopup ? 'show' : ''}`}
      onClick={handleClosePopup}
    >
      <div className="popup-content">
        <div className='container'>
         <div className="row">
          <div className="col-lg-6">
            <img src={newsletter} alt="" className='img-fluid ' />
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
            <span> <img src={logo} alt="" className='img-fluid w-25'/></span>
          <h2>Subscribe to our Newsletter</h2>
            <p>Enter your email address to receive updates and special offers.</p>
            <span>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button onClick={subscribeHandler}>Subscribe</button>
                <ToastContainer/>
            </span>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;