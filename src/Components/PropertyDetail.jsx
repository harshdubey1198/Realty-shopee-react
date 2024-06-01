import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function PropertyDetail({ property }) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === property.project_floorplan_Image.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [property.project_floorplan_Image.length]);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.project_floorplan_Image.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.project_floorplan_Image.length - 1 ? 0 : prevIndex + 1
    );
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
        <div className='pd-p1'>
          <img src={property.frontImage.url} className='pd-banner' alt={property.projectName} />
          <div className='pd-about'>
            <h2>About</h2>
            <p>{property.project_discripation}</p>
          </div>
        </div>
        <div className='pd-location'>
          <div> 
            <h2>Location</h2>
            <p>{property.projectAddress}, {property.city}, {property.state}</p>
            <h3>Connectivity</h3>
            <ul>
              <li>{property.projectRedefine_Connectivity}</li>
              <li>{property.projectRedefine_Entertainment}</li>
              <li>{property.projectRedefine_Business}</li>
              <li>{property.projectRedefine_Education}</li>
            </ul>
          </div>
          <img src={property.project_locationImage.url} className='pd-l-image' alt="Location" />
        </div>
        
        <div className='pd-p3'>
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
        </div>

        <div className='pd-carousel'>
          <button onClick={handlePrevClick} className='carousel-button'>‹</button>
          <img 
            src={property.project_floorplan_Image[currentImageIndex].url} 
            alt={`Floorplan ${currentImageIndex + 1}`} 
            className='carousel-image' 
          />
          <button onClick={handleNextClick} className='carousel-button'>›</button>
        </div>

        <div className='pd-enquiry'>
          <h1>Get In Touch</h1>
          <form>
            <input type='hidden' name='projectName' value={property.projectName} />
            <input type='text' name='name' placeholder='Enter Your Name*' required />
            <input type='email' name='email' placeholder='Enter Your Email*' required />
            <input type='text' name='phone' placeholder='Enter Your Phone*' required />
            <input type='text' name='message' placeholder='Enter Message*' required />
            <button type='submit' className='submit-button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

PropertyDetail.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyDetail;
