import React from 'react';
import ProjectItem from '../components/ProjectItem';

import Roy from '../../public/roy.png';
import tileWorkShop from '../../public/tileworkshop.png';
import ecommerce from '../../public/e-commerce.png';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      image: ecommerce,
      technologies: ['React', 'JavaScript', 'CSS'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      github: '123',
      website: '123',
    },
    {
      title: 'TileWorkShop',
      image: tileWorkShop,
      technologies: ['React', 'JavaScript', 'CSS'],
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      github: '123',
      website: '123',
    },
    {
      title: 'Roy\'s Revenge',
      image: Roy,
      technologies: ['React', 'JavaScript', 'CSS'],
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      github: '123',
      website: '123',
    },
  ];

  return (
    <section id='projects' className="flex flex-col justify-center">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Projects</h2>
      <div className='flex items-center justify-center py-16'>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};


export default Projects;