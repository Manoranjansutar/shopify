import React, { createContext, useState, useEffect } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartLength, setCartLength] = useState([]);

  const reloadCart = () => {
    setIsLoading(true)
    getCart();
  }

  
    const getCategory = async () => {
      try {
        const response = await fetch('https://cybotrix.com/webapi/category/getall');
        const jsonData = await response.json();
        setCategory(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false);
      }
    }

    const getBrand = async () => {
      try {
        const response = await fetch('https://cybotrix.com/webapi/brand/getall');
        const jsonData = await response.json();
        setBrand(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false);
      }
    }

    const getProduct = async () => {
      try {
        const response = await fetch('https://cybotrix.com/webapi/product/getall');
        const jsonData = await response.json();
        setProduct(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };


    const getOrderId = () => {
      if (localStorage.getItem("orderid") == null) {
         let orderid = Math.ceil(Math.random() * 7326074744);
         localStorage.setItem("orderid", orderid);
       }
      }
   

    const getCart = async () => {
      console.log(localStorage.getItem("orderid"))
      const cartItem = {
        orderid: localStorage.getItem("orderid"),
      };
      let postData = {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(cartItem),
      };
      try {
        const response = await fetch("https://cybotrix.com/webapi/cart/getcartitem", postData)
        const jsonData = await response.json();
        setCart(jsonData);
        setCartLength(cart.length)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    const getCartLength = () => {
      return cart.length;
    }

    const deleteCartItem = (orderid,id,quantity) => {
      const url = "https://cybotrix.com/webapi/cart/removeCartItem";
      const addProduct = {
         productid: orderid,
        id: id,
        qty: quantity,
      };
      let postData = {
        headers: { "content-type": "application/json" },
        method: "post",
        body: JSON.stringify(addProduct),
      };
      fetch(url, postData)
        .then((response) => response.text())
        .then((msg) => {
          reloadCart();
        });
    };

    const updateCart = (productid,priceperunit,orderid,id,quantity, action) => {
      let qty = 0;
      if (action == "add") qty = 1;
      else if (action == "sub") qty = -1;
      if (quantity == 1 && action == "sub") deleteCartItem(orderid,id,quantity);
      else {
        let url = "https://cybotrix.com/webapi/cart/addtocart";
        let cartproduct = {
          productid: productid,
          orderid: localStorage.getItem("orderid"),
          qty: qty,
          price: priceperunit,
        };
        let postdata = {
          headers: { "Content-Type": "application/json" },
          method: "post",
          body: JSON.stringify(cartproduct),
        };
        fetch(url, postdata)
          .then((response) => response.text())
          .then((msg) => {
          reloadCart()
  
          });
      }
    };




   
    useEffect(() => {
    updateCart()
    deleteCartItem();
    getProduct();
    getCategory();
    getBrand();
    getCart();
    getCartLength();
    getOrderId();
  }, []);

  return <ApiContext.Provider value={{ product, setProduct,isLoading, category, brand, cart, reloadCart , getCartLength ,getCart , deleteCartItem ,updateCart}}>
    {children}
  </ApiContext.Provider>;
};