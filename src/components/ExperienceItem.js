import React from 'react';

const ExperienceItem = ({ title, company, duration, description }) => {
  return (
    <div className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="-mx-3 md:flex mb-3">
        <div className="md:w-full px-3 mb-6 md:mb-0">
          <h2 className="text-2xl mb-2 font-bold">{title}</h2>
          <p className="text-gray-700 text-base">{company}</p>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-full px-3">
          <p className="text-gray-600 text-xs italic">{duration}</p>
          <ul className="list-disc list-inside pl-5">
            {description.map((desc, index) => (
              <li key={index} className="text-gray-700 text-base">{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
