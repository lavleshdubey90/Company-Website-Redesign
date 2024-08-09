import React from 'react';
import laptop from "../assets/Laptop.png";

const AboutUs = () => {
    return (
        <section className='max-w-screen-xl space-y-6 p-5 py-36 md:py-44 mx-auto'>
            <img src={laptop} alt="Laptop" className='mx-auto' />

            <p className='text-base leading-relaxed sm:text-xl sm:leading-[35px] md:text-2xl lg:text-3xl opacity-75 md:leading-[45px] lg:leading-[55px] text-center font-semibold'>We offer solutions for healthcare companies to digitize operations, improve TAT, optimize cost and scale business</p>
        </section>
    )
}

export default AboutUs;