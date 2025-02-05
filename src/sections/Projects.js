import React from 'react';
import ProjectItem from '../components/ProjectItem';

import Roy from '../../public/roy.png';
import tileWorkShop from '../../public/tileworkshop.png';
import ecommerce from '../../public/e-commerce.png';
import ExpenseMate from '../../public/expenseMate.png';
import RecipeDiscovery from '../../public/RecipeDiscovery.png';

const Projects = () => {
  const projects = [
    {
      title: 'TileWorkShop',
      image: tileWorkShop,
      technologies: ['React', 'Node.js', 'Express','MongoDB'],
      description:         
        `TileWorkShop is a web-based 2D game asset editor.
         It features a highly responsive and user-friendly 
         interface, optimized for seamless tilemap and tileset 
         creation and editing. One of the key features of this 
         project is a collaborative editing tool that allows 
         for co-creation, reducing project editing 
         time by 20% and enhancing team collaboration and project 
         delivery speed. Additionally, I established social features 
         like liking, disliking, and commenting to create a supportive 
         environment for sharing and collaboration.`,
      github: 'https://github.com/ruibxu/TileWorkShop-TWS',
    },
    {
      title: 'E-commerce Website',
      image: ecommerce,
      technologies: ['React', 'mySQL', 'Express','AWS'],
      description: 
          `This project is an advanced e-commerce platform enhancing 
          online shopping. It optimizes product discovery, reducing 
          search time by 10% and improving shopping efficiency. Built 
          with Node.js and Express, it integrates RESTful APIs for 
          efficient data exchange. It prioritizes data protection 
          and system reliability with a scalable, secure AWS RDS database. 
          This ensures a seamless, secure shopping experience for users 
          and a manageable platform for merchants.`,
      github: 'https://github.com/ruibxu/e-commerce',
    },
    {
      title: 'Recipe Discovery',
      image: RecipeDiscovery,
      technologies: ['Java','Android Studio','openAI API'],
      description: `
    The Recipe Discovery app allows users to find recipes by
     photographing their ingredients, using machine learning 
     to identify items directly on their device. With the OpenAI API
     , it provides personalized recipe suggestions based on previous 
     recipes used, making cooking more intuitive and customized.`,
      github: 'https://github.com/ruibxu/RecipeDiscovery',
    },
    {
      title: 'Roy\'s Revenge',
      image: Roy,
      technologies: ['TypeScript', 'Firebase', 'Wolfie2D'],
      description: `Roy's Revenge is a captivating 2D platformer game 
      I designed and developed with two other developers. The game features power-ups, 
       boss fights, and multiple levels, providing an engaging and immersive 
       gaming experience. I also crafted a challenging and dynamic enemy AI 
       with diverse behaviors such as patrolling, chasing, and attacking, offering 
       thrilling gameplay encounters and a rewarding sense of mastery. `,
      github: 'https://github.com/ruibxu/Roy-s-Revenge',
      website: 'https://roys-revenge.web.app/',
    },
    {
      title: 'ExpenseMate',
      image: ExpenseMate,
      technologies: ['React-Native'],
      description: `
      ExpenseMate is an app simplifies financial management by allowing you to 
      customize your expense categories and effortlessly log daily expenses. 
      Gain insights into spending patterns through detailed analyses, 
      understanding how expenses are distributed across various categories. 
      Stay informed with weekly or monthly breakdowns, offering a clearer 
      picture of your financial habits. Take control of your finances with the
       ease and simplicity of ExpenseMate.`,
      github: 'https://github.com/ruibxu/ExpenseMate',
    },
    
  ];

  return (
    <section id='projects' className="flex flex-col justify-center px-4 sm:px-20">
      <h2 className="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};


export default Projects;