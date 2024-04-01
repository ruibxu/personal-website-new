import React from 'react';
import Image from 'next/image';
import aboutMe from '../../public/aboutMe.webp';

const AboutMe = () => {
  return (
    <section id='aboutme' className="py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">About Me</h2>

        <div className="flex flex-col md:flex-row justify-center pt-5">
          <div className="flex-end px-10">
            <Image src={aboutMe} alt="working gif" className='rounded-md' />
          </div>

          <div className='text-lg pt-10 md:pt-0 flex-center px-10 md:w-1/2'>
            <p>
                I am currently pursuing a master&#39;s degree in Computer Science 
            at Stony Brook University, where I also earned my Bachelor&#39;s degree 
            in Computer Science. As a passionate software engineer, I am always 
            eager to learn and develop new skills to keep up with the evolving industry.
            </p>

            <br/>

            <p>
                During my academic journey at Stony Brook University, 
            I acquired proficiency in several programming languages, 
            including Java, Python, JavaScript, and C. I undertook numerous 
            projects, both individually and as part of a team, which allowed 
            me to apply and enhance my skills in various software development 
            methodologies and technologies such as MongoDB, React, and Git.
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

