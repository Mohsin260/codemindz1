"use client"

import React, { useEffect, useState } from 'react';
import Navigation from '@/app/components/Navigation';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [scrollBgColor, setScrollBgColor] = useState('transparent');

useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 80; // Adjust this value according to your header height
      
      if (scrollPosition > headerHeight) {
        setScrollBgColor('rgba(0, 0, 0, 0.5)');
      } else {
        setScrollBgColor('transparent');
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      <header className="fixed top-0 left-0 right-0  bg-transparent transition-colors duration-300 ease-in-out flex-wrap" style={{ backgroundColor: scrollBgColor }}>
        <div className="md:flex items-center justify-between py-4 max-w-[1200px] mx-auto">
            <div className="flex items-center px-2 sm:px-4 py-2">
            <FontAwesomeIcon icon={faCode} className='text-3xl' />
              {/* <Image
                  src="/logo.png" // Replace with your image URL or import it
                  width={50}
                  height={50}
                  alt="Logo"
                  priority
                  /> */}
              <span className="text-blue-700 font-bold text-3xl">CodeMinds</span>
            </div>
              <div className="mr-12">
                <Navigation />
              </div>
        </div>
      </header>
    );
};

export default Header;