import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';

const Contacts = () => {
  return (
    <footer id='contacts'className="bg-gray-800 w-full text-center text-white py-4">
      <div className="flex flex-col items-center justify-center md:space-x-10 py-5 md:flex-row gap-5 md:gap-0">
        <div className='flex justify-center items-center gap-3'>
          <Link href="https://github.com/ruibxu" target="_blank" >
            <FaGithub className="h-12 w-12 md:h-16 md:w-16 hover:text-gray-500"/>
          </Link>
          <div>github.com/ruibxu</div>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <Link href="https://www.linkedin.com/in/ruiboxu/" target="_blank" >
            <FaLinkedin className="h-12 w-12 md:h-16 md:w-16 hover:text-gray-500"/>
          </Link>
          <div>linkedin.com/in/ruiboxu/</div>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <Link href="mailto:ruibxu6@gmail.com" target="_blank" >
            <FaEnvelope className="h-12 w-12 md:h-16 md:w-16 hover:text-gray-500"/>
          </Link>
          <div>ruibxu6@gmail.com</div>
        </div>

          

        
      </div>
      <p className="mt-2">© 2024 Ruibo Xu. All rights reserved.</p>
    </footer>
  );
};

export default Contacts;