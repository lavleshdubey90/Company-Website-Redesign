import React from 'react';
import banner from "../assets/Banner.png";
import rider from "../assets/Rider.png";

const Herosection = () => {
    return (
        // <section className='relative h-[700px]'>
        //     <img src={banner} alt="banner" className='w-full absolute z-10 h-[700px] object-cover object-bottom'/>

        //     <div className='flex gap-x-[60px] z-20 min-h-full max-w-screen-xl p-5 mx-auto left-0 right-0  absolute items-center justify-between'>
        //         <div className="left w-1/2 space-y-6">
        //             <h1 className='text-[64px] font-semibold'>India's Leading <br /> <span className='text-primary'>Digital Healthcare</span> <br />Platform</h1>
        //             <p className='text-xl w-[585px] leading-9 font-medium'>AllTrak helps healthcare organizations leverage technology to become more profitable and improve quality service to clients and delighting them</p>
        //             <h4 className='text-secondary text-2xl font-semibold'>Transform your healthcare organization today!</h4>
        //             <button className='btn'>Connect With Us</button>
        //         </div>
        //         <div className="right">
        //             <img src={rider} alt="Rider" className=''/>
        //         </div>
        //     </div>
        // </section>
        <section className='relative h-[700px]'>
            <img src={banner} alt="banner" className='w-full absolute z-10 h-[700px] object-cover object-bottom'/>

            <div className='flex flex-col-reverse gap-x-[60px] z-20 min-h-full max-w-screen-xl p-5 mx-auto left-0 right-0  absolute'>
                <div className="left w-1/2 space-y-6">
                    <h1 className='text-[64px] font-semibold'>India's Leading <br /> <span className='text-primary'>Digital Healthcare</span> <br />Platform</h1>
                    <p className='text-xl w-[585px] leading-9 font-medium'>AllTrak helps healthcare organizations leverage technology to become more profitable and improve quality service to clients and delighting them</p>
                    <h4 className='text-secondary text-2xl font-semibold'>Transform your healthcare organization today!</h4>
                    <button className='btn'>Connect With Us</button>
                </div>
                <div className="right w-96">
                    <img src={rider} alt="Rider" className=''/>
                </div>
            </div>
        </section>
    )
}

export default Herosection;