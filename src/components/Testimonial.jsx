import React from 'react';
import Heading from './Heading';
import frontQuote from "../assets/front-quote.png";
import backQuote from "../assets/back-quote.png";

const Testimonial = () => {
  return (
    <section className='py-36 md:py-44'>
      <Heading heading="What Our Client Said ?" />

      <div className='relative text-center mt-20 p-5 max-w-screen-lg mx-auto'>
        <img
          src={frontQuote}
          alt="Front Quote"
          className='absolute -top-5 left-5 w-5 h-5 md:h-8 lg:w-8'
        />
        <p className='font-medium mx-auto text-lg md:text-xl lg:text-2xl leading-[30px] md:leading-[40px] lg:leading-[46px] opacity-70 max-w-[930px] relative'>
          Easy onboarding. Great business reports. Real-time dashboards. We have been able to manage our operations efficiently using your products.
        </p>
        <img
          src={backQuote}
          alt="Back Quote"
          className='absolute -bottom-5 right-5 w-5 h-5 md:h-8 lg:w-8'
        />
      </div>
    </section>
  );
};

export default Testimonial;
