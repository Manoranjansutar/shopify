import './App.css'
import Navbars from './components/Navbars'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import {  useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Login from './components/Login';
import OrderPLaced from './components/OrderPLaced';
import OrderNotPlaced from './components/OrderNotPlaced';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';
import VendorRegistration from './pages/VendorRegistration';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BecomeSeller from './pages/BecomeSeller';
import NewsletterPopup from './components/NewsletterPopup';




function App() {
 

  const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  };

  const ScrollToTheTop = ({ children }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return children;
  };

  return (
    <BrowserRouter>
      <Navbars/>
      {
        localStorage.getItem('hasSeenPopup') ? <></> : <NewsletterPopup/>
      }
      <Routes scrollBehavior={scrollBehavior}>
        <Route path='/' element = {<Home/>} />
        <Route path='/product' element = {<ScrollToTheTop><Product/></ScrollToTheTop>}/>
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/orders' element = {<Orders/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/orderplaced' element = {<OrderPLaced/>} />
        <Route path='/ordernotplaced' element = {<OrderNotPlaced/>} />
        <Route path='/search/:purl' element = {<ScrollToTheTop><Search/></ScrollToTheTop>} />
       <Route path='/product/details/:purl' element = {<ScrollToTheTop><ProductDetails/></ScrollToTheTop>} />
        <Route path='/vendor-registration' element = {<VendorRegistration/>} />
        <Route path='/becomeaseller' element = {<BecomeSeller/>} />
      </Routes>
      <Footer/>
      <ScrollToTop smooth />
    </BrowserRouter>
  )
}

export default App
