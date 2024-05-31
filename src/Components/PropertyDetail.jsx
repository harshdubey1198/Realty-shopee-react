import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function PropertyDetail({ property }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };

  return (
    <div className='pd-main'>
      <header className='pd-nav'>
        <h2><img src={property.logo.url} className='pd-logo' alt={property.projectName} /></h2>
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleContactUsClick}>Contact Us</button>
        <a href="tel:+919289252999">+91 9289252999</a>
      </header>
      <div className='pd-div'>
        <div>
          <img src={property.frontImage.url} className='pd-banner' alt={property.projectName} />
        </div>
        <div className='pd-location'>
           <div> 
              <h2>Location</h2>
              <p>{property.projectAddress}, {property.city}, {property.state}</p>
            </div>
          <img src={property.project_locationImage.url} className='pd-l-image' alt="Location" />
        </div>
        <div className='pd-about'>
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
    </div>
  );
}

PropertyDetail.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyDetail;
