import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SiShopify } from 'react-icons/si';
import user from './../assets/user.png';
import { IoHomeSharp } from "react-icons/io5";
import { PiClockClockwise, PiShoppingBagFill } from "react-icons/pi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { ApiContext } from '../context/ApiContext';
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from 'react-router-dom';
import image1 from './../assets/Shopping bag.gif';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import image2 from './../assets/Sign up.gif';
import Login from './Login';
import MOdalsComponent from './LoginModal';
import LoginModal from './LoginModal';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { MdOutlineShowChart } from 'react-icons/md';
import { ImCart } from 'react-icons/im';
import { BsCartCheckFill } from 'react-icons/bs';
import { BiStoreAlt } from 'react-icons/bi';




const Navbars = () => {
  const { cart ,getCartLength,getCart } = useContext(ApiContext);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const [keyword, setKeyword] = useState("");
  const  [suggestedProduct, setSuggestedProduct] = useState([]);
  const  [showsuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();


  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login executed", formData);
    let url = 'https://cybotrix.com/webapi/login/auth';
    let newLogin = {
      email: formData.email,
      password: formData.password
    }
    let postdata = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newLogin)
    }
    fetch(url, postdata)
      .then(res => res.json())
      .then(userinfo => {
        setUserInfo(userinfo);
        handleClose1(true);
        setShow1(false)
        console.log(setUserInfo)
        console.log(userinfo);
        if (userinfo.status === 'SUCCESS') {
          navigate('/');
          localStorage.setItem('token', userinfo.tokenno)
          localStorage.setItem('username', userinfo.name)
          localStorage.setItem('status', userinfo.status)
        } else {
          alert("Invalid Email or Password")
        }
      })
  };

 
  const logoutHandler = () => {
    localStorage.clear();
    navigate('/')
  }

  useEffect(()=>{
    getCart()
  },[cart.length])



  


  const   searchSuggestion = async () => {
    if (keyword) {
      const url = "https://cybotrix.com/webapi/product/search";
      const searchData = { key: keyword };
      const postData = {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(searchData),
      };
      await fetch(url, postData)
        .then((response) => response.json())
        .then((suggestedData) => {
          setSuggestedProduct(suggestedData);
          setShowSuggestions(true);
        });
    } else {
      setShowSuggestions(false);
    }
  };


  const suggestionValue = (value) => {
    // console.log(value);
    if (value.url != "") {
      if (value.type == "C" || value.type == "B") {
        navigate("/search/" + value.url);
        setShowSuggestions(false);
      } else {
        navigate("/product/details/" + value.url);
        setShowSuggestions(false);
      }
    }
  };

  useEffect(()=>{
    searchSuggestion();
  },[keyword])

  



  return (
    <div >
      <Navbar expand="lg" className="bg-black " fixed="top"  >
        <Container>
          <Navbar.Brand href="/" className="text-white fs-2 flex-center gap-2" style={{fontFamily:"Sedgwick Ave Display"}}>
            <SiShopify /> Shopify 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

                  
            <div className="ms-auto nav-input" >
            <div className='d-flex flex-column position-relative'>
              <input
            type="text"
            className="form-control  border-2 search-bar border-dark mb-lg-2 w-100"
            placeholder="Search for Products,brands and more..."
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
          {
            showsuggestions && suggestedProduct.length > 0 && (
               <div className='suggestion-box'>
                {
                  suggestedProduct.map((result,index)=>{
                     return(
                       <div key={index} onClick={suggestionValue.bind(this,result)}> 
                        <PiClockClockwise /> {result.name}
                       </div>
                     )
                  })
                }
               </div>
            )
          }
          </div>
            </div>





          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex-center text-white mx-5">
            <Link to='/cart' className='text-decoration-none text-white fs-5'><BsCartCheckFill className='text-white fs-3 mx-2 ' />Cart</Link>
              {
                localStorage.getItem('status') === 'SUCCESS' ? <div>
                  <div className="dropdown mx-5" >
                    <a
                      href="#"
                      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                      id="dropdownUser1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="40"
                        height="40"
                        className="rounded-circle me-2 mx-2"
                      />
                      <strong className="text-white">
                        <h5>
                          {
                            localStorage.getItem('username') ? localStorage.getItem('username') : "Guest"
                          }
                        </h5>
                      </strong>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark text-small shadow"
                      aria-labelledby="dropdownUser1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/orders">
                          Orders
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={logoutHandler}>
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> : <img src={user} alt="" width={40} height={40} />
              }
              {
                localStorage.getItem('status') === 'SUCCESS' ? <></> : <button className={`btn btn-lg text-white flex-center `} onClick={handleShow1} ><span className='flex-center' style={{ color: "var(--main-color)" }}>
                  LOGIN
                </span></button>
              }

              <LoginModal show={show1} handleClose={handleClose1} />

              <Nav className='text-white'>
              <Link to='/becomeaseller' className='text-decoration-none text-white fs-5'><BiStoreAlt className='text-white fs-3'/> Become a Seller</Link>
              </Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars
