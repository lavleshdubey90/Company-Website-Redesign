import React from 'react';
import Heading from './Heading';
import { products } from "../assets/assets";

const Products = () => {
    return (
        <section className='bg-[#F8F8F8] py-10'>

            <Heading heading="Our Products" />

            <div className='max-w-screen-lg mx-auto mt-10 sm:mt-20'>

                <div className='grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-3 lg:gap-x-40 gap-y-0 sm:gap-y-8 md:gap-y-16 lg:gap-y-20'>

                    {
                        products.map((product) => (
                            <div className='max-w-56 scale-75 sm:scale-90 lg:scale-100 mx-auto space-y-3 text-center'>
                                <div className='h-40 shadow-[4px_4px_10px] shadow-black/25 w-40 mx-auto grid place-content-center bg-white rounded-full'>
                                    <img src={product.imgUrl} alt={product.alt} />
                                </div>

                                <h4 className='text-xl font-bold'>{product.title}</h4>
                                <p className='text-sm font-bold opacity-75'>{product.description}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Products;