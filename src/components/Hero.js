import React from 'react'
import { Link } from 'react-router-dom';
import Home1pic from "../image/home1.png"
import Home2pic from "../image/home2.png"
import Home3pic from "../image/home3.png"
import './slide.css';

const Hero = () => {
  return (
    <><div className="onresponsive">
    <section className="text-gray-600 body-font mt-10">
      <div className="container mx-auto flex px-5 py-10 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get the products now</h1>
          <p className="mb-6 leading-relaxed">Explore our wide range of high-quality products and find exactly what you need. From trendy fashion items to innovative gadgets, we have it all. Shop with confidence and enjoy a seamless shopping experience.</p>
          <div className="flex justify-center">
          {/* <Link to="/products" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Show All Products </Link>
          <Link to="/contact" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Us</Link> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/7319324/pexels-photo-7319324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </div>
    </section>
  </div>
  
    <div className='main-container'>
    <div id="carouselExampleIndicators" className=" carousel-dark slide carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="firstpage">
        <div className="content">
           <div className="line1">
            <h1>LOVE LOUNGEWEAR</h1>
           </div>
           <div className="line2">
            <p className='para'>
            GEAR UP FOR A SUMMER SHOPPING SPREE LIKE NEVER BEFORE! OUR SUMMER SALE IS THE ULTIMATE DESTINATION FOR SMART SHOPPERS LOOKING TO SCORE BIG ON SAVINGS.
           </p>
           </div>
           <div className="line3">
            <button className="btn btn-outline-secondary">shop now</button>
           </div>
        </div>
        <div className="image">
         <img src={Home1pic}  alt="..."/>
        </div>
        </div>
    </div>

    <div className="carousel-item">
        <div className="secondpage">
        <div className="image1">
         <img src={Home2pic}  alt="..."/>
        </div>
        <div className="content1">
           <div className="line1">
            <h1>SUMMER SALE</h1>
           </div>
           <div className="line2">
            <p className='para'>
            GEAR UP FOR A SUMMER SHOPPING SPREE LIKE NEVER BEFORE! OUR SUMMER SALE IS THE ULTIMATE DESTINATION FOR SMART SHOPPERS LOOKING TO SCORE BIG ON SAVINGS.
           </p>
           </div>
           <div className="line3">
            <button className="btn btn-outline-secondary">shop now</button>
           </div>
        </div>
        
        </div>
    </div>


    <div className="carousel-item">
        <div className="secondpage">
        <div className="image1">
         <img src={Home3pic}  alt="..."/>
        </div>
        <div className="content1">
           <div className="line1">
            <h1>COLLECTION</h1>
           </div>
           <div className="line2">
            <p className='para'>
            GEAR UP FOR A SUMMER SHOPPING SPREE LIKE NEVER BEFORE! OUR SUMMER SALE IS THE ULTIMATE DESTINATION FOR SMART SHOPPERS LOOKING TO SCORE BIG ON SAVINGS.
           </p>
           </div>
           <div className="line3">
            <button className="btn btn-outline-secondary">shop now</button>
           </div>
        </div>
        
        </div>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    </>
  )
}

export default Hero