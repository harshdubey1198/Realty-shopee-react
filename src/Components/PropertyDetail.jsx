import React from 'react';
import PropTypes from 'prop-types';

function PropertyDetail({ property }) {
  return (
    <div>
      <h1>{property.projectName}</h1>
      <div>
        <img src={property.frontImage.url} alt={property.projectName} />
      </div>
      <div>
        <h2>Location</h2>
        <p>{property.projectAddress}, {property.city}, {property.state}</p>
        <img src={property.project_locationImage.url} alt="Location" />
      </div>
      <div>
        <h2>About</h2>
        <p>{property.project_discripation}</p>
      </div>
      <div>
        <h2>Amenities</h2>
        <ul>
          {property.Amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>BHK Details</h2>
        <ul>
          {property.BhK_Details.map((bhk, index) => (
            <li key={index}>{bhk.bhk_type} - {bhk.bhk_Area} - {bhk.price}</li>
          ))}
        </ul>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
}

PropertyDetail.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyDetail;
