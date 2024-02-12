import React from 'react';
import Image from 'next/image';
import aboutMe from '../../public/aboutMe.webp';

const AboutMe = () => {
  return (
    <section id='aboutme' className="py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">About Me</h2>

        <div className="flex flex-col md:flex-row justify-center pt-5">
          <div className="flex-end px-10">
            <Image src={aboutMe} alt="working gif" className='rounded-md' />
          </div>

          <div className='text-lg pt-10 flex-center px-10 md:w-1/2'>
            <p>
                  I recently graduated with a major in Computer 
              Science from Stony Brook University. I am a passionate 
              software engineer who is eager to learn and develop new 
              skills in the industry.
            </p>

            <br/>

            <p>
                  During my time in university, I gained a solid foundation 
              in various programming languages including Java, Python, 
              Javascript and C. I have also completed multiple projects,
              both individually and in teams, that required me to utilize 
              various software development methodologies such as mongoDB, 
              React, and Git.
            </p>

            <br/>

            <p>
                  As an individual, I am self-motivated and thrive in
              team-oriented environments. I am always looking for new 
              challenges that will allow me to expand my knowledge and 
              skills in software development. I am excited to use my 
              problem-solving skills to develop creative solutions that
              address complex software engineering challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

