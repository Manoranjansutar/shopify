import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import banner from './../assets/banner.jpg';
import { ApiContext } from '../context/ApiContext';
import ProductCard from '../components/ProductCard';
import ReactPaginate from 'react-paginate';
import Dropdown from 'react-bootstrap/Dropdown';
import loader from './../assets/preloader.gif';
import { useNavigate } from 'react-router-dom';


const Product = () => {

  const { product, isLoading , brand , category ,setProduct} = useContext(ApiContext);

  const [productList,setProductList] = useState(product);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const  [suggestedProduct, setSuggestedProduct] = useState([]);
  const  [showsuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
 
  
  
  
  const PER_PAGE = 12;
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(productList.length / PER_PAGE);


  const searchproductByCategory = async (categoryid = "", brandid = "")  => {
    const url = "https://cybotrix.com/webapi/product/searchproduct";
    const newcat = { categoryid: categoryid, brandid: brandid  };
    const postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newcat),
    };
    await fetch(url, postData)
      .then((response) => response.json())
      .then((msg) => {
        setProduct(msg);
      });
  };

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
    <div className='' style={{ marginTop: "80px" }}>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/" className='breadcrumb text-white'>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" className='breadcrumb'>
            Product
          </Breadcrumb.Item>
          <Breadcrumb.Item active>All Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="row align-items-start flex-center">
          <img src={banner} alt="" className='img-fluid col' />
          <div className="col-lg-10 col-12">
       </div>
          <div className='container-fluid mt-3'>
           <div className='row '>
              <div className="col-lg-2 col-12 mt-3">
                <div className='border border-black overflow-hidden  brand-sidebar' >
                   <h6 className='bg-black text-white p-2 fs-6'>Shop by Brand</h6>
                   <div className='overflow-y-scroll  shop' style={{height:"250px"}}>
                    {
                       brand.map((item,index) =>{
                         return(
                           <div key={index}>
                            <p className='d-flex align-items-center gap-2 m-2'  onClick={()=>{searchproductByCategory("",item.brandid)}}>
                              {item.brandname}
                            </p>
                           </div>
                         )
                       }) 
                    }
                   </div>
                  

                </div>
                <div>
                <div className='border border-black overflow-hidden brand-sidebar'>
                  <h6 className='bg-black text-white p-2 fs-6 '>Shop by Category</h6>
                  <div className=' overflow-y-scroll  shop'  style={{height:"250px"}}>
                    {
                       category.map((item,index) =>{
                         return(
                           <div key={index}>
                            <p className='d-flex align-items-center gap-2 m-2' onClick={()=>{searchproductByCategory(item.catid,"")}}>
                              {item.categoryname}
                            </p>
                           </div>
                         )
                       })
                    }
                   </div>
                </div>
                </div>
              </div>
                
                <div className='col-lg-10 '>
                <div className='my-4 flex-between '>
          <div className='d-flex flex-column position-relative'>
              <input
            type="text"
            className="form-control w-25 border-2 search-bar border-dark mb-lg-2 w-100"
            placeholder="Search...."
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
                         {result.name}
                       </div>
                     )
                  })
                }
               </div>
            )
          }
          </div>
              <div className=' '>
              
              <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Sort By
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>
              </div>
            </div>
                {  isLoading ? <div className='text-center'><img src={loader} alt="" className='img-fluid' width={300} height={300} /></div>: <></>}
                  <p>Showing product 1-12 from {product.length}</p>
                 <div className='d-flex  flex-wrap gap-3 mt-4'>
                    {
                      product
                        .slice(offset, offset + PER_PAGE)
                        .map((item, index) => {
                          if (
                            item.productname.toLowerCase().match(keyword.toLowerCase()) ||
                            item.details.toLowerCase().match(keyword.toLowerCase()) ||
                            item.categoryid.toLowerCase().match(keyword.toLowerCase()) ||
                            item.url.toLowerCase().match(keyword.toLowerCase())
                          )
                          return (
                            <ProductCard key={index} productname={item.productname} details={item.details} price={item.price} productid={item.productid} url={item.url} categoryid = {item.categoryid} photo = {item.photo}/>
                          )
                        })
                    }
                 </div>
                </div>
           </div>
          </div>
          </div>
          <div className="mb-4 mt-4">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination  justify-content-center"}
              pageClassName={"page-item "}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active primary"}
            />
          </div>
        </div>
      </div>

  )
}

export default Product
