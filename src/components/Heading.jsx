import React from 'react';

const Heading = ({heading}) => {
  return (
      <div className='w-fit mx-auto relative'>
        <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>{heading}</h3>
        <div className='absolute mt-2 md:mt-3 lg:mt-4 w-full rounded-full h-[5px] bg-zinc-200'>
          <div className='bg-secondary rounded-full w-1/2 mx-auto h-full' />
        </div>
      </div>
  );
}

export default Heading;