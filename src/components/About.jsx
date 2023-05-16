import React from 'react'
import about_img from '../assests/images/image16.jpg'

const About = () => {
  return (
    <section className='w-screen mb-8'>
      <div className='md:w-[95%] w-full flex mx-auto flex-col md:flex-row'>
        <div className='md:w-1/2 w-full h-full'><img src={about_img} alt="" /></div>
        <div className='md:w-1/2 w-full bg-white flex align-middle'>
          <div className='w-3/4 flex justify-center align-middle flex-col gap-6 mx-auto'>
            <div className='md:text-3xl text-xl font-bold w-full md:text-left text-center mt-4 md:mt-0 mx-auto'>ABOUT ALRIYAD GROUP COMPANY</div>
            <div className='md:text-md text-sm w-full text-center md:text-left mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos rerum dicta quisquam? Facilis magnam ipsa fuga sit odit. Eveniet distinctio delectus tenetur quam illo?</div>
            <div className='w-full justify-center align-middle flex md:block'><button className='text-center md:mr-auto bg-blue-500 text-white py-4 w-1/2'>DISCOVER MORE</button></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About