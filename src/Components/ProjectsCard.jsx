import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function ProjectsCard({ projectName, projectAddress, city, frontImage }) {
  return (
    <div className="project-card">
      <img src={frontImage.url} alt={projectName} className="project-image" />
      <div className="project-details">
        <div className='inner-div'>
            <h5>{projectName}</h5>
            <p>{projectAddress}</p>
        </div>
        <p className='city'>{city}</p>
      </div>
    </div>
  );
}

ProjectsCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  frontImage: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectsCard;
