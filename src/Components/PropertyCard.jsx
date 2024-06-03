import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link
import '../App.css';

function PropertyCard({ property }) {
  return (
    <Link to={`/projects/${property.projectName}`} className="property-link"> 
      <div className="property-card">
        <img src={property.frontImage.url} className='pd-fi' alt={property.projectName} />
        <h4>{property.projectName}</h4>
        <p>{property.projectAddress}</p>
        <button className='ld-vd'>View Details</button>
      </div>
    </Link>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyCard;
