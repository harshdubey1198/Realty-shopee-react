import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import '../App.css';

function PropertyCard({ property }) {
  return (
      <div className="property-card">
        <img src={property.frontImage.url} className='pd-fi' alt={property.projectName} loading='lazy' />
        <h4 className='all-p-h4'>{property.projectName}</h4>
        <p className='all-p-p'>{property.projectAddress}</p>
        <button className='ld-vd'>View Details</button>
      </div>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyCard;
