import { useContext, useEffect, useState } from "react";
import loader from './../assets/preloader.gif';
import { ApiContext } from "../context/ApiContext";
import mainImg from './../assets/main-img.jpg';
import Table from 'react-bootstrap/Table';



const Orders = () => {
  const { isLoading } = useContext(ApiContext)

  const [orderList, setOrderList] = useState([]);

  const getOrderList = async () => {
    const url = "https://cybotrix.com/webapi/cart/myorder";
    const getProduct = {
      userid: localStorage.getItem("token"),
    };
    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(getProduct),
    };
    const response = await fetch(url, postData);
    const msg = await response.json();
    return msg;
  };

  useEffect(() => {
    getOrderList().then((msg) => {
      setOrderList(msg.reverse());

    });
  }, []);

  useEffect(() => {
    orders();
  }, [orderList]);

  return (
    <div className="container " style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-lg-12 mb-3">
          <h2 className="text-center">
            Order History - {orderList.length} Items
          </h2>
          {isLoading ? <div className='text-center'><img src={loader} alt="" className='img-fluid' width={300} height={300} /></div> : <></>}
        </div>
        {
          orderList.map((orders, index) => {
            return (
              <div className="container">
                <div className="row border border-black mt-3">
                  <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
                    <h5><span className="text-muted">Order Id :</span>#{orders[0] && orders[0].orderid}</h5>
                    <button className="btn btn-dark">Download Invoice</button>
                  </div>
                  <div className="col-lg-12 ">
                    {
                     
                          <div >
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Product Image</th>
                                  <th>Product Name</th>
                                  <th>Price</th>
                                  <th>Quantity</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                      orders.map((order, index) => {
                                        return (
                                                    <tr>
                                                      <td>{index+1}</td>
                                                    <td><img src={mainImg} alt=""  width={50} height={50}/></td>
                                                    <td className='align-middle'>{order.productname}</td>
                                                    <td className='align-middle'>{order.priceperunit}</td>
                                                    <td className='align-middle'>{order.quantity}</td>
                                                    <td className='align-middle'>{order.total}</td>
                                                   </tr>
                                                      )
                                                    })
                                }
                              </tbody>
                            </Table>
                          </div>
                     
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Orders;
