import React from 'react'
import { useState } from 'react'
import ImgArrivals from '../data/Arrivals'
import imgtest from '../assests/images/image01.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Btngrp from './Btngrp';

const Arrivals = () => {
  const [Item, setItem] = useState(0)
  const Btngrp = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className='text-white lg:flex hidden gap-4 pr-16 absolute right-0 -top-16'>
        <span onClick={() => {previous();setItem(prev => Item != 0 ? prev -= 1 : prev = 0)}} className= {`${Item === 0 && "opacity-0"} w-10 h-10 active:opacity-50 cursor-pointer bg-blue-500 rounded-full text-center align-middle flex justify-center text-3xl font-thin`}>{"<"}</span>
        <span onClick={() => {next();setItem(prev => Item != 3 ? prev += 1 : prev = 3)}} className={`${Item === 3 && "opacity-0"} w-10 h-10 active:opacity-50 cursor-pointer bg-blue-500 rounded-full text-center align-middle flex justify-center text-3xl font-thin`}>{">"}</span>
      </div>
    )
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
   const listItem = ImgArrivals.map((item) => 
     <div className='item min-w-[350px] h-[400px] text-white md:pl-12 pl-0' key={item.id}>
        <div className='w-full h-2/3'>
          <img src={item.src} alt={item.title} className=' w-full h-full object-cover'/>
        </div>
        <div className="mt-4 text-gray-300 flex gap-6 flex-col">
          <h2 className='text-md'>{item.title}</h2>
          <p className='text-gray-500'>{item.currency}<span className='ml-2'>{item.price}</span></p>
        </div> 
     </div>
   );


  return (
   <section className='h-full w-screen mt-20 px-8 mb-32'>
    <div className='header/title w-full flex flex-row justify-between align-middle '>
      <div className='text-white text-xl font-bold flex align-middle justify-center relative pl-8'>
        NEW ARRIVALS 
        <span className='absolute w-6 h-1 -bottom-2 left-0 bg-blue-500'></span>
        <span className='absolute w-1 h-6 -bottom-2 left-0 bg-blue-500'></span>
      </div>
    </div>
    <div className='products w-full mt-8 flex justify-between flex-nowrap gap-4 px-0 h-[400px] relative'>
      <Carousel responsive={responsive} className='w-full' arrows={false} renderButtonGroupOutside={true} customButtonGroup={<Btngrp />}>
        {listItem}
      </Carousel>;
    </div>
    <div className='bars lg:flex hidden w-full justify-center gap-6 align-middle'>
      <div className={`${Item === 0 ? "bg-blue-500 h-[4px]" : "bg-gray-400 h-[0.5px]"} w-14`}></div>
      <div className={`${Item === 1 ? "bg-blue-500 h-[4px]" : "bg-gray-400 h-[0.5px]"} w-14`}></div>
      <div className={`${Item === 2 ? "bg-blue-500 h-[4px]" : "bg-gray-400 h-[0.5px]"} w-14`}></div>
      <div className={`${Item === 3 ? "bg-blue-500 h-[4px]" : "bg-gray-400 h-[0.5px]"} w-14`}></div>
    </div>
   </section>
  )
}

export default Arrivals