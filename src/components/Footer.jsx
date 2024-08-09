import React from 'react';
import logo from "../assets/Logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import googlePlay from "../assets/googleplay.png";

const Footer = () => {

  const links = ["Home", "Products", "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"];

  return (
    <footer className='bg-tertiary py-20'>
      <div className='flex gap-x-5 gap-y-20 flex-wrap justify-between items-start max-w-screen-xl p-5 mx-auto'>

        <div>
          <img src={logo} alt="Alltrak" className='w-12 h-12 md:h-16 md:w-16' />
          <p className='font-semibold text-sm leading-6 mt-8 max-w-[275px]'>AllTrak is cloud platform for healthcare organizations empowering them to scale business in high growth consumerdriven market.</p>
          <div className='flex items-center gap-x-10 mt-16'>
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>

        <div className='min-w-fit'>
          <h5 className='font-bold text-xl text-primary'>Useful Links</h5>
          <ul className='mt-14 space-y-4'>
            {
              links.map((link, index) => (
                <li key={index} className='font-semibold opacity-70 hover:text-primary duration-500 hover:opacity-100 cursor-pointer'>{link}</li>
              ))
            }
          </ul>
        </div>

        <div className='min-w-fit'>
          <h5 className='font-bold text-xl text-primary'>Office Info</h5>
          <ul className='mt-14 space-y-4'>
            <li className='font-semibold opacity-70 hover:text-primary duration-500 hover:opacity-100 cursor-pointer flex items-center gap-x-3'>
              <MdCall className='text-2xl hover:text-primary' />
              +91-9311343881
            </li>
            <li className='font-semibold opacity-70 hover:text-primary duration-500 hover:opacity-100 cursor-pointer flex items-center gap-x-3'>
              <IoIosMail className='text-2xl hover:text-primary' />
              contact@alltrak.co
            </li>
          </ul>
        </div>

        <div className='min-w-fit'>
          <h5 className='font-bold text-xl text-primary'>Subscribe Now</h5>

          <div>
            <div className='flex items-center mt-14 h-10 rounded'>
              <input type="email" placeholder='Enter Your Email...' className='py-2 px-3 text-xs placeholder:opacity-40 font-bold outline-none shadow-inner shadow-neutral-300 h-10 rounded-l' />
              <button className='btn-sm hover:scale-100 rounded-r !rounded-l-none h-10'>Subscribe</button>
            </div>

            <div className='mt-14'>
              <h6 className='font-bold opacity-70'>Download Our App</h6>
              <img src={googlePlay} alt="Google Play"  className='mt-4 cursor-pointer'/>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
