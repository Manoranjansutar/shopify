// import { Button, Modal } from 'bootstrap/dist/js/bootstrap.bundle'
import React, { useState } from 'react'
import { SiShopify } from 'react-icons/si';
import image2 from './../assets/Sign up.gif';
import image1 from './../assets/Shopping bag.gif';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Login = (show, handleClose ) => {
  const [state, setState] = useState("Login");

  const [userInfo, setUserInfo] = useState([]);
  const [loading ,setLoading] = useState(true);
  const [formData, setFormData] = useState({
    // username: "",
    password: "",
    email: "",
  });
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
        setLoading(false);
        // setShow(false)
        console.log(setUserInfo)
        console.log(userinfo);
        if (userinfo.status === 'SUCCESS') {
          // navigate('/');
          setShow(false);
          handleClose();
          localStorage.setItem('token', userinfo.tokenno)
          localStorage.setItem('username', userinfo.name)
          localStorage.setItem('status', userinfo.status)
        } else {
          alert("Invalid Email or Password")
        }
      })
  };


  return (
 

    <div>
         <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="p-3"
              
            >
              <Modal.Header
                href="/"
                className="text-white bg-dark fs-3 d-flex justify-content-center align-items-center  m-2 p-3"
              >
                <SiShopify /> Shopify

              </Modal.Header>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <div className="col-lg-5">
                  {
                    state === "Login" ? <img src={image1} className="img-fluid" /> : <img src={image2} className="img-fluid" />
                  }
                </div>
                <div className="col-lg-6">
                  <div
                    class="p-5 rounded"
                  // style={{ border: "2px solid black" }}
                  >
                    <h3 className="text-center text-black">{state}</h3>

                    {state === "Sign Up" ? (
                      <div
                        class="input-group mb-4 mt-4"
                        style={{ border: "1px solid black" }}
                      >
                        <span class="input-group-text">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your Name"
                          style={{ border: "none", outline: "none" }}
                          name="username"
                          value={formData.username}
                          onChange={changeHandler}
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    <div
                      class="input-group mb-4 mt-4"
                      style={{ border: "1px solid black" }}
                    >
                      <span class="input-group-text">
                        <FaEnvelope />
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your Email"
                        style={{ border: "none", outline: "none" }}
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                      />
                    </div>
                    <div
                      class="input-group mb-4 mt-4"
                      style={{ border: "1px solid black" }}
                    >
                      <span class="input-group-text">
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        id=""
                        class="form-control"
                        placeholder="Enter your Password"
                        style={{ border: "none", outline: "none" }}
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                      />
                    </div>
                    <div class="text-center">
                      <button
                        class="btn btn-dark bg-black w-100"
                        onClick={() => {
                          state === "Login" ? login() : signup();
                        }}
                      >
                        {state}
                      </button>
                      <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
                    </div>
                    <div className="mt-3">
                      {state === "Sign Up" ? (
                        <p style={{ fontSize: "13px", cursor: "pointer" }}>
                          Already have an Account?{" "}
                          <span
                            className="text-danger fw-semibold"
                            onClick={() => {
                              setState("Login");
                            }}
                          >
                            Login here
                          </span>
                        </p>
                      ) : (
                        <p
                          className=""
                          style={{ fontSize: "13px", cursor: "pointer" }}
                        >
                          Create an Account?{" "}
                          <span
                            className="text-danger fw-semibold"
                            onClick={() => {
                              setState("Sign Up");
                            }}
                          >
                            Click here
                          </span>
                        </p>
                      )}
                      <p className="" style={{ fontSize: "13px" }}>
                        <input type="checkbox" name="" id="" /> By continuing ,
                        i agree to the terms of use & privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
    </div>
  )
}

export default Login
