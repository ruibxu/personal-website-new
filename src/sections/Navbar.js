'use client'
import React, { useState } from 'react';
import { Link, animateScroll } from "react-scroll";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <nav className="fixed top-0 left-0 z-10 bg-gray-800 w-full ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            
          <div className="flex-shrink-0 ">
            <Link to="intro" smooth={true} offset={-120} className="font-pacifico text-3xl text-gray-300 hover:text-white hover:cursor-pointer">Ruibo Xu</Link>
          </div>
            
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="aboutme" smooth={true} offset={-120} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer">About Me</Link>
              <Link to="experience" smooth={true} offset={-120} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer">Experience</Link>
              <Link to="projects" smooth={true} offset={-120} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer">Projects</Link>
              <Link to="contacts" smooth={true} offset={-120} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer">Contacts</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <HiMenu className="h-6 w-6" />
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 w-full">
                    <div className="py-1 text-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link to="aboutme" smooth={true} offset={-120} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer" role="menuitem" onClick={toggleDropdown}>About Me</Link>
                        <Link to="experience" smooth={true} offset={-120} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer" role="menuitem" onClick={toggleDropdown}>Experience</Link>
                        <Link to="projects" smooth={true} offset={-120} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer" role="menuitem" onClick={toggleDropdown}>Projects</Link>
                        <Link to="contacts" smooth={true} offset={-120} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer" role="menuitem" onClick={toggleDropdown}>Contacts</Link>
                    </div>
                </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
