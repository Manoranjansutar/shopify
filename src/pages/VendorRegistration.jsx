import React, { useState } from 'react'

const VendorRegistration = () => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [pincode,setPincode] = useState('');
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [city,setCity] = useState('');

   
   const  register = () =>{
    let url = "https://cybotrix.com/webapi/login/createaccount";
    let newbrand = {
      name: name,
      email: email,
      password: password,
      mobile: phone,
      city: city,
      address: address,
      pincode: pincode,
    };
    let postdata = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newbrand),
    };
    fetch(url, postdata)
      .then((response) => response.text())
      .then((userinfo) => {
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setCity("");
        setAddress("");
        setPincode("");
      });
   }




  return (
    <div className='container' style={{marginTop:"80px",height:"100vh"}}>
       <div className='row d-flex middle'>
        <div className='col-lg-12  border rounded-4 p-3 border-dark shadow-lg'>
         <h2 className='text-center bg-dark text-white mt-4'>Vendor Registration</h2>
         <div className='mt-2'>
             <label htmlFor="">Company Name</label>
             <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
         </div>
         <div className='mt-2'>
             <label htmlFor="">Email ID</label>
             <input type="email" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
         </div>
         <div className='mt-2'>
             <label htmlFor="">Phone Number</label>
             <input type="number" className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
         </div>
         <div className='mt-2'>
             <label htmlFor="">Password</label>
             <input type="text" className='form-control'value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </div>
         <div className='mt-2 d-flex gap-3 '>
             <div className='w-100'>
                 <label htmlFor="">City</label>
                 <input type="text" className='form-control' value={city} onChange={(e)=>setCity(e.target.value)}/>
             </div>
             <div className='w-100'>
                 <label htmlFor="">Pincode</label>
                 <input type="number" className='form-control w-100' value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
             </div>
         </div>
         <div className='mt-2 mb-3'>
             <label htmlFor="">Address</label>
             <textarea name="" id="" className='form-control'  value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
         </div>
         <div className='d-flex justify-content-center align-items-center mb-4'>
            <button className='btn btn-dark' onClick={register}>Register</button>
         </div>
        </div>
       </div>
    </div>
  )
}

export default VendorRegistration
