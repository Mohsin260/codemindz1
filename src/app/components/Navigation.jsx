import Link from "next/link";
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <>

        <div className="flex justify-between items-center lg:gap-32">

            <ul className='md:flex hidden lg:gap-10 text-white flex-nowrap'>
                <li>
                    <Link
                    href="#about-us"
                    className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
                    About Us
                    </Link>
                </li>
                <li>
                    <Link
                    href="#services"
                    className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
                    Services
                    </Link>
                </li>
                <li>
                    <Link
                    href="#our-work"
                    className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
                    Our Work
                    </Link>
                </li>
                <li>
                    <Link
                    href="#contact"
                    className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
                    Contact Us
                    </Link>
                </li>
            </ul>

            {
                
                toggle  ?
                <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    :
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    
                // <AiOutlineMenu Default={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>    
            }

            {/* Responsive Menu*/}
       
            <ul className={`duration-300 md:hidden block  text-white fixed bg-black top-[92px] w-full h-screen
            ${toggle ? 'left-[10%]' : 'right-[100%]'}`}>
            <li className='p-5'>
                <Link
                href="#about-us"
                className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
                About Us
                </Link>
            </li>
            <li className='p-5'>
                    <Link
                    href="#services"
                    className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">Services
                    </Link>
            </li>
            <li className='p-5'>
                <Link
                    href="#our-work"
                    className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">Our Work
                </Link>
            </li>
            <li className='p-5'>
                <Link
                    href="#contact"
                    className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">Contact Us
                </Link>
            </li>
            </ul>
            
        </div>


            {/* <ul className="flex">
            <li>
                <Link
                href="#about-us"
                className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
                About Us
                </Link>
            </li>
            <li>
                <Link
                href="#services"
                className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
                Services
                </Link>
            </li>
            <li>
                <Link
                href="#our-work"
                className="text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
                Our Work
                </Link>
            </li>
            <li>
                <Link
                href="#contact"
                className="text-white px-4 rounded-md hover:bg-indigo-700 transition-all duration-300 lg:block md:hidden">
                Contact Us
                </Link>
            </li>
            </ul>
            <div>
            <Link
                href="#contact"
                className="bg-[#0095D9] text-white px-4 py-2 rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 ">
                Contact Us
            </Link>
            </div> */}
        
    </>
  );
};

export default Navigation;
