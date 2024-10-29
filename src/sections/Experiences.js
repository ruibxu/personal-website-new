import React from 'react';
import ExperienceItem from '../components/ExperienceItem';


const Experiences = () => {
  const Experiences = [{
    title: 'Web Developer Intern',
    company: 'Clocky LLC',
    duration: 'January 2024 - May 2024',
    description: [
      "Created custom Shopify themes and templates using Liquid, enhancing brand identity and user engagement, and increasing session duration by 10%.",
      "Built an upsell feature that recommended relevant products to customers during checkout, resulting in a 15% increase in average order value and a significant revenue boost.",
      "Tested and debugged e-commerce websites to ensure optimal performance and functionality across various devices and browsers"
    ]
  },
  {
    title: 'Front-End Developer Intern',
    company: 'Prifina',
    duration: 'January 2024 - April 2024',
    description: [
      "Engineered a high-performance, scalable mobile app architecture using React Native and its core libraries, ensuring seamless user experiences and future growth potential.",
      "Utilized sensor data to design and build app features that provided users with valuable insights and personalized recommendations.",
      "Collaborated with a cross-functional team of developers, designers, and product managers to deliver high-quality features and enhancements for the app."
      
      
    ]
  }];

  return (
    <section id='experience' className='px-4 pb-10'>
          <h2 className="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 pb-5">Experience</h2>
          {Experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
    </section>
  );
};

export default Experiences;
