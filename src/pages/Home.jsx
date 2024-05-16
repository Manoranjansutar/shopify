import React, { useContext} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import APIProvider from '../context/ShopContext';
import { ApiContext } from '../context/ApiContext';
import { Link } from 'react-router-dom';
import furniture from './../assets/furniture.webp';
import electronics from './../assets/electronics.webp';
import laptop from './../assets/laptop.webp';
import mobile from './../assets/mobile.webp';
import security from './../assets/security.webp';
import footwear from './../assets/footwear.webp';
import beauty from './../assets/beauty.webp';
import tools from './../assets/tools.webp';
import fashion from './../assets/fashion.webp';
import { Tooltip as ReactTooltip } from "react-tooltip";
import earphone from './../assets/earphone.jpeg';
import keyboard from './../assets/keyboard.jpeg';
import watch from './../assets/watch.jpeg';
import tv from './../assets/tv.jpeg';
import trimmer from './../assets/trimmer.jpeg';
import laptopbanner from './../assets/laptop-banner.png';
import samsung1 from './../assets/samsung-1.jpg';
import samsung2 from './../assets/samsung2.jpg';
import samsung3 from './../assets/samsung3.jpg';
import samsung4 from './../assets/samsung4.jpg';
import samsung5 from './../assets/samsung5.jpg';
import ipad from './../assets/ipad.jpg';
import Slider from "react-slick";
import fashionbanner from './../assets/fashion-banner.webp';
import fashion1 from './../assets/fashion1.jpg';
import fashion2 from './../assets/fashion2.jpg';
import fashion3 from './../assets/fashion3.jpg';
import fashion4 from './../assets/fashion4.jpg';
import fashion5 from './../assets/fashion5.jpg';
import fashion6 from './../assets/fashion6.jpg';
import fashion7 from './../assets/fashion7.jpg';
import fashion8 from './../assets/fashion8.jpg';
import fashion9 from './../assets/fashion9.jpg';
import fashion10 from './../assets/fashion10.jpg';
import fashion11 from './../assets/fashion11.jpg';
import fashion12 from './../assets/fashion12.jpg';
import slider1 from './../assets/slider1.jpg';
import slider2 from './../assets/slider2.jpg';
import slider3 from './../assets/slider3.jpg';
import slider4 from './../assets/slider4.jpg';
import slider5 from './../assets/slider5.jpg';
import slider6 from './../assets/slider6.jpg';
import slider7 from './../assets/slider7.jpg';
import furnituresale from './../assets/furnituresale.jpg';
import appliance from './../assets/appliance.jpg';
import kitchenappliance from './../assets/kitchenappliance.jpeg';
import customer1 from './../assets/customer1.png';
import customer2 from './../assets/customer2.png';
import customer3 from './../assets/customer3.png';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import mobileapp from './../assets/downloadapp6.jpg';
import boat from './../assets/boat.jpg';
import vivo from './../assets/vivo.jpg';
import oneplus from './../assets/oneplus.jpg';
import ipadair from './../assets/ipad-Air.jpg';
import iphone1 from './../assets/iphone 14.png';
import iphone2 from './../assets/iphone15.webp';
import vivo1 from './../assets/vivo x100.png';
import vivo2 from './../assets/vivo v30e.jpg';
import realme from './../assets/realme-11-pro-5g-og-thum1.jpg';
import redmi from './../assets/redmi-12-1.jpg';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , width:'35px' , height:'35px', borderRadius:'50%',padding:'7px',marginTop:'10px', marginLeft:'10px' ,zIndex:'5'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , width:'35px' , height:'35px', borderRadius:'50%',padding:'7px', marginTop:'10px' , marginRight:'-20px' , zIndex:'5'}}
      onClick={onClick}
    />
  );
}




const Home =  () => {
  const {isLoading}= useContext(ApiContext)

 

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
     // Set autoplay speed (3000ms = 3s)
     responsive: [
      {
        breakpoint: 1024, // Tablet landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Tablet portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
     ],
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />
  };
  const settings1 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay speed (3000ms = 3s)
    responsive: [
      {
        breakpoint: 1024, // Tablet landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Tablet portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
     ],
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />
  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
     // Set autoplay speed (3000ms = 3s)
     responsive: [
      {
        breakpoint: 1024, // Tablet landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Tablet portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
     ],
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />
  };


  return (
    <div  style={{marginTop:"80px",backgroundColor:"#eee"}}>
       
            <div className='container-fluid'>
              <div className="row">
              <div className="col-lg-12">
       <Slider {...settings3}>
               <div>
                <Link  to='/product'><img src={slider6} alt="" className='img-fluid m-auto rounded-4 'width={820}/></Link>
               </div>
               <div>
               <Link to={"/product/details/" + "iphone-15"}><img src={slider1} alt="" className='img-fluid m-auto rounded-4' width={820}/></Link>
               </div>
               <div>
               <Link to={'/search/' + "mobile"}><img src={slider2} alt=""className='img-fluid m-auto rounded-4'width={820}/></Link>
               </div>
               <div>
                <Link to={'/search/' + "laptop"}><img src={slider3} alt="" className='img-fluid m-auto rounded-4'width={820}/></Link>
               </div>
               <div>
                <Link to={'/search/' + "utensils"}><img src={slider4} alt="" className='img-fluid m-auto rounded-4'width={820}/></Link>
               </div>
               <div>
                <Link to={'/search/' + "tv"}><img src={slider5} alt="" className='img-fluid m-auto rounded-4'width={820}/></Link>
               </div>
               <div>
                <Link to={"/product/details/" + "samsung-galaxy-s20"}><img src={slider7} alt="" className='img-fluid m-auto rounded-4'width={820}/></Link>
               </div>
            </Slider>
              </div>
             </div>
            </div>


            


            <div className='container my-5'>
             <div className="row">
              <div className="col-lg-12 d-flex flex-wrap justify-content-between category-container">
                <Link to = {"/search/" + 'fashion'}><img src={fashion} alt="" className='img-fluid '  data-tooltip-id="my-tooltip-1" /></Link>
                <Link to = {"/search/" + 'beauty'}><img src={beauty} alt="" className='img-fluid'  data-tooltip-id="my-tooltip-2"/></Link>
                <Link to = {"/search/" + 'laptop'}><img src={laptop} alt="" className='img-fluid'  data-tooltip-id="my-tooltip-3"/></Link>
                <Link to = {"/search/" + 'mobile'}><img src={mobile} alt="" className='img-fluid'  data-tooltip-id="my-tooltip-4"/></Link>
                <Link to = {"/search/" + 'electronics'}><img src={electronics} alt="" className='img-fluid'  data-tooltip-id="my-tooltip-5"/></Link>
                <Link to = {"/search/" + 'shoes'}><img src={footwear} alt="" className='img-fluid'  data-tooltip-id="my-tooltip-6"/></Link>
                <Link to = {"/search/" + 'furniture'}><img src={furniture} alt="" className='img-fluid'  data-tooltip-id="my-tooltip-7"/></Link>
                <Link to = {"/search/" + 'security'}><img src={security} alt="" className='img-fluid'  data-tooltip-id="my-tooltip-8"/></Link>
                <Link to = {"/search/" + 'tools'}><img src={tools} alt="" className='img-fluid'  data-tooltip-id="my-tooltip-9"/></Link>
              </div>
             </div>
            </div>

            <ReactTooltip
             id="my-tooltip-1"
             place="bottom"
             content="Fashion" />
           <ReactTooltip
            id="my-tooltip-2"
            place="bottom"
           content="Beauty & Health" />
           <ReactTooltip
            id="my-tooltip-3"
            place="bottom"
           content="Laptop" />
           <ReactTooltip
            id="my-tooltip-4"
            place="bottom"
           content="Mobile"/>
           <ReactTooltip
            id="my-tooltip-5"
            place="bottom"
           content="Electronics"/>
           <ReactTooltip
            id="my-tooltip-6"
            place="bottom"
           content="Footwear"/>
           <ReactTooltip
            id="my-tooltip-7"
            place="bottom"
           content="furniture"/>
           <ReactTooltip
            id="my-tooltip-8"
            place="bottom"
           content="Security"
         />
          <ReactTooltip
            id="my-tooltip-9"
            place="bottom"
           content="Tools"
         />
      <Link to={"/product/details/" + "lenovo-g16"} className='responsive-img'>
       <img src={laptopbanner} alt="" className='img-fluid w-100 '/>  
      </Link>


      



         <div className='container my-5 '>
          <div className="row">
            <div className="bg-white ">
              <div className='flex-between'>
                <h3 className='p-4'>Best of Electronics</h3>
                <Link to={"/search/" + 'electronics'}><span>View All</span></Link>
              </div>
              <div className='flex-between bestofelectronics'>
                <div className='flex-center  flex-column'>
                  <Link to={"/search/" + 'earphone'}><img src={earphone} alt="" className='img-fluid'  width={100}/></Link>
                  <p>Bluetooth wireless</p>
                  <h5 className='text-center'>Grab Now</h5>
                </div>
                <div className='flex-center  flex-column '>
                  <Link to={"/search/" + 'tv'}><img src={tv} alt="" className='img-fluid'  width={200}/></Link>
                  <p> Best collection of TV</p>
                  <h5 className='text-center'>from Rs 45000</h5>
                </div>
                <div className='flex-center  flex-column '>
                  <Link to={"/search/" + 'keyboard'}><img src={keyboard} alt="" className='img-fluid mt-5 mb-5'  width={200}/></Link>
                  <p> Best collection of Keyboard</p>
                  <h5 className='text-center'>from Rs 1899</h5>
                </div>
                <div className='flex-center  flex-column'>
                  <Link to={"/search/" + 'watch'}><img src={watch} alt="" className='img-fluid'  width={150}/></Link>
                  <p> Best collection of Watch</p>
                  <h5 className='text-center'>from Rs 1059</h5>
                </div>
                <div className='flex-center  flex-column'>
                  <Link to={"/search/" + 'electronics'}><img src={trimmer} alt="" className='img-fluid'  width={70}/></Link>
                  <p> Best collection of TV</p>
                  <h5 className='text-center'>from Rs 2599</h5>
                </div>
              </div>
            </div>
          </div>
         </div>


         <div className='container-fluid d-flex justify-content-center align-items-center'>
           <div className='row'>
             <div className="col-lg-6">
              <h4 className='bg-black text-white p-2 text-center'>Up Scale Every Moment</h4>
              <img src={samsung1} alt="" className='img-fluid w-100'/>
              <div className='text-center my-2'><button className='btn btn-dark btn-lg'>Explore</button></div>
             </div>
             <div className="col-lg-6">
              <div className='d-flex gap-4'>
                <div className=''>
                  <Link to={"/product/details/" + "samsung-65-class---the-frame-series"} ><img src={samsung2} alt="" className='img-fluid ' width={330} /></Link>
                  <p className='bg-black text-white text-center p-1'>65" FRAME SERIES</p>
                </div>
                <div className=''>
                <Link to={"/product/details/" + "samsung-65-class---du7200d-series"} ><img src={samsung3} alt="" className='img-fluid 'width={330}/></Link>
                <p className='bg-black text-white text-center p-1'>65" DU7200D SERIES</p>
                </div>
              </div>
              <div className='d-flex gap-4 mt-2'>
              <div>
                  <Link to={"/product/details/" + "samsung-77-class---oled-s95d-series"} ><img src={samsung4} alt="" className='img-fluid 'width={330}/></Link>
                  <p className='bg-black text-white text-center p-1'>77" S95D SERIES</p>
                </div>
                <div>
                <Link to={"/product/details/" + "samsung-85-class---qn85d-series"}><img src={samsung5} alt="" className='img-fluid 'width={330}/></Link>
                <p className='bg-black text-white text-center p-1'>85" QN85D SERIES</p>
                </div>
              </div>
             </div>
           </div>
         </div>



          <div className='container mt-5 bg-white p-2'>
         <div className='d-flex gap-3 align-items-center m-3'>
          <h5>Upto 50% on Best Selling Smartphone</h5>
          <a href={"/search/" + 'fashion'} className=' text-decoration-none text-black'>
           <span className='text-primary fw-bold'> VIEW ALL</span>
          </a>
         </div>
         <div className='col m-auto'>
            <Slider {...settings1}>
              <div className='m-auto'>
              <Link to={"/product/details/" + "iphone-14"}><img src={iphone1} alt="" width={200} height={200}/></Link>
               <h5 className='text-center'>Iphone 14</h5>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "iphone-15"}><img src={iphone2} alt="" width={200} height={200}/></Link>
               <h5 className='text-center'>Iphone 15</h5>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "redmi-12-5g"}> <img src={redmi} alt="" width={200} height={200}/></Link>
               <h5 className='text-center'>Redmi 12 5G</h5>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "realme-11-pro-5g"}><img src={realme} alt="" width={200} height={200}/></Link>
               <h5 className='text-center'>Realme 11 Pro 5G</h5>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "vivo-x100-pro-5g"}><img src={vivo1} alt="" width={200} height={200}/></Link>
               <h5 className='text-center'>Vivo X100</h5>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "	vivi-v-30e"}><img src={vivo2} alt="" width={200} height={200}/></Link>
               <h5 className='text-center'>Vivo V 30E</h5>
               </div>
            </Slider>
         </div>
        </div>


        <Link to={"/product/details/" + "apple-ipad-air-a-4th-gen"}>
       <img src={ipad} alt="" className='img-fluid w-100 my-5 responsive-img'/>  
      </Link>

      <img src={fashionbanner} alt=""  className='img-fluid responsive-img'/>


      <div className='container mt-5 bg-white p-2'>
         <div className='d-flex gap-3 align-items-center m-3'>
          <h5>Upto 50% on Best Sellers in Clothing</h5>
          <a href={"/search/" + 'fashion'} className=' text-decoration-none text-black'>
           <span className='text-primary fw-bold'> VIEW ALL</span>
          </a>
         </div>
         <div className='col m-auto'>
            <Slider {...settings1}>
              <div className='m-auto'>
              <Link to={"/product/details/" + "-men-stonewashed-slim-tapered-fit-jeans"}><img src={fashion1} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "men-solid-regular-fit-casual-shirt"}><img src={fashion2} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "men-printed-crew-neck-t-shirt"}> <img src={fashion3} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "men-graphic-printed-slim-fit-t-shirt"}><img src={fashion4} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
              <Link to={"/product/details/" + "men-checked-slim-fit-casual-shirt"}><img src={fashion5} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "men-solid-regular-fit-jeans"}><img src={fashion6} alt="" width={200} height={200}/></Link>
               </div>
            </Slider>
         </div>
        </div>


        <div className='container mt-5 bg-white p-2'>
         <div className='d-flex gap-3 align-items-center m-3'>
          <h5>Upto 50% on Best Women's apparel</h5>
          <a href={"/search/" + 'fashion'} className=' text-decoration-none text-black'>
           <span className='text-primary fw-bold'> VIEW ALL</span>
          </a>
         </div>
         <div className='col m-auto'>
            <Slider {...settings1}>
              <div className='m-auto'>
              <Link to={"/product/details/" + "women-printed-belt-detail-shirt-dress"}><img src={fashion7} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "women-white-floral-printed-straight-kurta"}><img src={fashion8} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "women-floral-printed-straight-kurta"}> <img src={fashion9} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "women-embroidered-tiered-dress"}><img src={fashion10} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "women-printed-straight-kurta"}> <img src={fashion11} alt="" width={200} height={200}/></Link>
               </div>
               <div className='m-auto'>
               <Link to={"/product/details/" + "women-tie-dye-a-line-dress"}> <img src={fashion12} alt="" width={200} height={200}/></Link>
               </div>
            </Slider>
         </div>
        </div>
          

         <div className="container-fluid mt-5">
          <div className="row">
          <div className='col-lg-12  m-auto'>
            <Carousel>
          <Carousel.Item>
          <Link to={"/search/"+ "watch"}><img src={boat} alt="" className='img-fluid w-100 responsive-img'/></Link>
          </Carousel.Item>
          <Carousel.Item>
         <Link to={"/product/details/" + "vivi-v-30e"}> <img src={vivo} alt="" className='img-fluid w-100 responsive-img'/></Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link  to={"/product/details/" + "apple-ipad-air-a-4th-gen"}><img src={ipadair} alt="" className='img-fluid w-100 responsive-img'/></Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={"/search/"+ "mobile"}><img src={oneplus} alt="" className='img-fluid w-100 responsive-img'/></Link>
          </Carousel.Item>
        </Carousel> 
          </div>
          </div>
         </div>






        <div className="container mt-5">
          <div className="row bg-white p-3">
            <h5 className='my-3'>Appliance for your home</h5>
            <div className="col-lg-4">
            <Link to = {"/search/" + 'electronics'}> <img src={appliance} alt="" className='img-fluid' /> </Link>
            </div>
            <div className="col-lg-4">
            <Link to = {"/search/" + 'utensils'}><img src={kitchenappliance} alt="" className='img-fluid'/> </Link>
            </div>
            <div className="col-lg-4">
             <Link to = {"/search/" + 'furniture'}><img src={furnituresale} alt="" className='img-fluid'/></Link> 
            </div>
          </div>
        </div>

        <div className='container mt-5'>
          <div className="row bg-white p-3">
            <h5 className='text-center'>Testimonial</h5>
            <h2 className='text-center py-3 fw-semibold' >What Our Customer Say</h2>
              <div className="col-lg-4 bg-secondary-subtle p-4 flex-center flex-column">
                <img src={customer1} alt="" className='img-fluid w-25'/>
                <p style={{textAlign:"justify"}}>
                <BiSolidQuoteAltLeft className='fs-1' />
                 Shopify Customer Support sticks to the issue till it is resolved. They understand our issues well and I must say , they value the customer's time by religiously following up to make sure that the issue has been resolved.
                <BiSolidQuoteAltRight className='fs-1'/>
                </p>
                <h5  style={{color:"var(--main-color)"}}>Alisa</h5>
              </div>
              <div className="col-lg-4  p-4 flex-center flex-column">
              <img src={customer2} alt=""  className='img-fluid w-25'/>
              <p style={{textAlign:"justify"}}>
                <BiSolidQuoteAltLeft className='fs-1' />
                 At first, I was doubtful that Shopify would not get my product deliverd on time.But after the call in the evening with the Customer Support executive, I was absolutely assured that Shopify wouldn't let me down
                <BiSolidQuoteAltRight className='fs-1'/>
                </p>
                <h5  style={{color:"var(--main-color)"}}>John Doe</h5>
              </div>
              <div className="col-lg-4 bg-secondary-subtle p-4 flex-center flex-column">
              <img src={customer3} alt=""  className='img-fluid w-25'/>
              <p style={{textAlign:"justify"}}>
                <BiSolidQuoteAltLeft className='fs-1' />
                 At first, I was doubtful that Shopify would not get my product deliverd on time.But after the call in the evening with the Customer Support executive, I was absolutely assured that Shopify wouldn't let me down
                <BiSolidQuoteAltRight className='fs-1'/>
                </p>
                <h5  style={{color:"var(--main-color)"}}>Claire</h5>
              </div>
           
          </div>
        </div>


        <div className='container-fluid'>
          <div className="row my-5">
            <img src={mobileapp} alt="" />
          </div>
        </div>



       



      



        

         








      

    </div>
  )
}

export default Home
