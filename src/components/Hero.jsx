import React from 'react'
import { useState } from 'react'
import banner from '../data/banner'


const Hero = () => {
    const [CurrentImg, setCurrentImg] = useState(0)

  return (
    <section>
        <div className="relative w-screen h-screen p-0 m-0 ">
            <img className='w-full h-full object-cover' src={banner[CurrentImg].src} alt={banner[CurrentImg].title} />
            <div className="absolute right-0 bottom-0 bg-black 2xl:w-[700px] md:w-[500px] w-full h-[250px] border-l-4 border-l-blue-500 text-white">
                <div className='flex flex-col ml-6 justify-center h-full gap-2'>
                    <div className='text-4xl '>{banner[CurrentImg].title}</div>
                    <div className='text-sm text-gray-300'>{banner[CurrentImg].description}</div>
                    <button className='mt-8 bg-blue-500 h-[65px] w-1/2 '>FIND OUT MORE</button>
                </div>
                <div className='absolute -top-12 flex gap-4 text-gray-400 text-3xl'>
                    <span className='bg-black bg-opacity-70  rounded-full w-10 h-10 text-center cursor-pointer' onClick={() => setCurrentImg((prev) => prev === 0 ? 4 : prev -= 1) }>
                    {"<"}     
                    </span>
                    <span className='bg-black bg-opacity-70  rounded-full w-10 h-10 text-center cursor-pointer' onClick={() => setCurrentImg((prev) => prev === 4 ? 1 : prev += 1) }>
                    {">"}  
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero