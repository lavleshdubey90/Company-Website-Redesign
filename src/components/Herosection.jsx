import React from 'react';
import banner from "../assets/Banner.png";
import rider from "../assets/Rider.png";

const Herosection = () => {
  return (
    <section className='relative h-[700px]'>
      <img src={banner} alt="Banner" className='h-[700px] object-cover object-bottom w-full right-0' />

      <div className='absolute max-w-screen-xl mx-auto left-0 right-0 items-center p-5 top-0 w-full h-[700px] flex flex-col md:flex-row-reverse gap-y-6 justify-center'>
        <div className="md:w-1/2">
          <img src={rider} alt="banner" className='w-80 md:w-96 lg:w-[400px] xl:w-[500px] mx-auto' />
        </div>

        <div className="space-y-6 md:w-1/2">
          <h1 className='text-4xl leading-snug md:text-5xl lg:text-[3.5rem] xl:text-[4rem] md:leading-snug lg:leading-[75px] xl:leading-[85px] font-semibold'>India's Leading <br className='hidden md:block'/> <span className='text-primary'>Digital Healthcare</span> <br className='hidden md:block'/>Platform</h1>
          <p className='text-sm md:text-base md:leading-[25px] lg:text-lg lg:leading-[30px] xl:text-xl xl:leading-[35px] font-medium'>AllTrak helps healthcare organizations leverage technology to become more profitable and improve quality service to clients and delighting them</p>
          <h4 className='text-secondary leading-6 text-lg lg:text-xl xl:text-2xl font-semibold'>Transform your healthcare organization today!</h4>
          <button className='btn-sm md:btn'>Connect With Us</button>
        </div>
      </div>
    </section>
  )
}

export default Herosection;