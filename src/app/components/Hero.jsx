'use client'


import Image from "next/image";
import React,{ Component } from 'react';
import { render } from 'react-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-50 flex flex-col items-center min-h-screen">
      <div className="mx-auto px-4 max-w-[1200px] py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:text-start text-center">
          <div className="flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-[68px] text-[50px] font-[500] text-white mb-4">
              Quality Web Development Services
            </h1>
            <div className='md:text-[50px] text-[30px] pb-5 font-bold'>
                Learn Web Development
{/*                 <Typed
                    className='text-blue-600 pl-3'
                    strings={['Web Development', 'Build Smartest Talent', 'Artificial Intelligence']}
                    typeSpeed={120}
                    loop = {true}
                    backSpeed={100}
                /> */}
            </div>
            <button className="bg-blue-500 text-white text-xl py-3 w-52 rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-125">
              Contact Us
            </button>
          </div>
          <div>
            <Image
              src="/UI-and-UX-design-service.png" // Replace with your image URL or import it
              width={550}
              height={550}
              className="max-w-[100%]"
              alt="Hero Image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
