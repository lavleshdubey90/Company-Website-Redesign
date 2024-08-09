import React from 'react';
import Heading from './Heading';
import { features } from '../assets/assets';

const Features = () => {
  return (
    <div className='py-36 md:py-44'>
      <Heading heading="Why AllTrak ?" />

      <div className='max-w-screen-md p-5 grid grid-cols-1 md:grid-cols-2 place-content-center gap-4 md:gap-10 mx-auto mt-10 md:mt-20'>

        {
          features.map((feature) => (
            <div className='scale-90 border-2 md:max-w-full md:scale-100 rounded-2xl bg-tertiary pt-7 pb-16'>
              <img src={feature.imgUrl} alt={feature.alt} className='h-16 mx-auto' />
              <div className='mt-11 px-5 md:px-0 w-full md:w-[310px] mx-auto space-y-3 text-center'>
                <h4 className='font-bold text-xl'>{feature.title}</h4>
                <p className='font-semibold text-xs w-full sm:text-sm opacity-70'>{feature.description}</p>
              </div>
            </div>
          ))
        }



      </div>
    </div>
  )
}

export default Features;