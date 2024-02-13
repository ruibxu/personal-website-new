import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link';

const ProjectItem = ({ title, image, technologies, description, github, website  }) => {
  return (
    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg m-4 group flex flex-col justify-between" >
      <div>
        {website ? (
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <div className="w-full h-64 relative">
              <Image src={image} alt={title} fill className='object-cover' />
            </div>
          </Link>
        ) : (
          <div className="w-full h-64 relative">
            <Image src={image} alt={title} fill className='object-cover' />
          </div>
        )}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {technologies.map((tech, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tech}</span>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <a href={github} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <FaGithub className="mr-2" />
          <span>Github</span>
        </a>
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FaExternalLinkAlt className="mr-2" />
            <span>Website</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
