import React from 'react';

const ExperienceItem = ({ title, company, duration, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{duration}</p>
      <p>{description}</p>
    </div>
  );
};

export default ExperienceItem;
