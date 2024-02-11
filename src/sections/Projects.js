import React from 'react';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['Vue', 'HTML', 'SCSS'],
    },
    {
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;