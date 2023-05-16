import React from 'react'
import imageoffer from '../assests/images/image15.jpg'

const Offer = () => {
  return (
    // Can be also made Dynamic
    <section className='w-screen h-1/2 flex justify-center align-middle mb-12'>
      <div className='w-[95%] h-[300px] flex relative justify-center align-middle text-center'>
        <img src={imageoffer} alt=""  className='absolute w-full h-full object-cover'/>
        <div className=' text-white z-10 flex flex-col align-middle justify-center'>
          <div className='text-3xl font-bold'>SAVE 10% WITH OUR GIFT CARDS</div>
          <button className='bg-blue-500 p-2 w-1/2 mx-auto mt-6'><a href="">VIEW GIFT CARDS</a></button>
        </div>
      </div>
    </section>
  )
}

export default Offer