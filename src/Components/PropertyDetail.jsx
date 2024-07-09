import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { FcHome, FcList, FcPhone, FcQuestions } from "react-icons/fc";

function PropertyDetail({ property }) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://realty-react-backend.onrender.com/query-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, projectName: property.projectName }),
      });

      if (response.ok) {
        alert('Query submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Failed to submit query. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const amenityImages = {
    "Car Parking": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717655908/Amenities/Car%20parking.jpg",
    "Swimming Pool": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717658995/Amenities/swimming%20pool.jpg",
    "Golf Course": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717659091/Amenities/Golf%20Course.jpg",
    "ATM": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717659304/Amenities/Atm.jpg",
    "Restaurant": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717659387/Amenities/Restaurant.jpg",
    "Waiting Lounge": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717659460/Amenities/waiting%20area.jpg",
    "Shopping Centre": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717659531/Amenities/Shopping-Center.jpg",
    "Video Door Security": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717659783/Amenities/video-door-security.jpg",
    "Park": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717659989/Amenities/Park.jpg",
    "Meditation Area": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717742436/Amenities/Meditation%20Area.jpg",
    "CCTV Camera Security":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717742544/Amenities/CCTV.jpg",
    "Basketball Court":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717742622/Amenities/Basketball%20Court.jpg",
    "Yoga Room":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717666053/Amenities/Yoga%20Room.jpg",
    "Club House":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718433362/Amenities/Club%20House.jpg",
    "Sniffer Dog" : "https://res.cloudinary.com/dgplzytrq/image/upload/v1718432729/Amenities/Sniffer-dog.jpg",
    "Squash Court":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718433114/Amenities/Squash-Court.jpg",
    "Salon":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717747518/Amenities/Salon.jpg",
    "Fountain":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717747665/Amenities/Fountain.jpg",
    "Advanced Security":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718432079/Amenities/Advanced-Security.jpg",
    "Visitors Parking":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717747763/Amenities/Visitors%20Parking.jpg",
    "Community Hall":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717747866/Amenities/Community-center.jpg",
    "Indoor Games":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717748048/Amenities/Indoor%20Games.jpg",
    "Vastu Compliant":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717748210/Amenities/Vastu-compliant.jpg",
    // "Jogging Track":"https://res.cloudinary.com/dgplzytrq/image/upload/v1717748678/Amenities/Jogging.jpg",
    "Gymnasium": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717749855/Amenities/gymnasium.jpg",
    "Gym": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717749855/Amenities/gymnasium.jpg",
    "Jogging Track":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718438090/Amenities/jogging-track.jpg",
    "Open Gym": "https://res.cloudinary.com/dgplzytrq/image/upload/v1717749855/Amenities/gymnasium.jpg",
    "Elevator Lobby":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718429046/Amenities/elevator-lobby.jpg",
    "Private Elevator Lobby":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718429046/Amenities/elevator-lobby.jpg",
    "Cafeteria" : "https://res.cloudinary.com/dgplzytrq/image/upload/v1718429186/Amenities/Cafeteria.jpg",
    "Spa":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718434136/Amenities/Spa.jpg",
    "Kids Pool":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718433912/Amenities/Kids-pool.jpg",
    "Kids Play Area":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718429550/Amenities/Kids-Play-Area.jpg",
    "24x7 Power Backup":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718431285/Amenities/24%2A7-Power-Backup.jpg",
    "3 Level Car Parking":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718431071/Amenities/3-Level-Car-Parking.jpg",
    "Badminton Court":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718429902/Amenities/badminton-court.jpg",
    "Complete Land Ownership":"https://res.cloudinary.com/dgplzytrq/image/upload/v1718437301/Amenities/Complete-Land-Ownership.jpg"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === property.project_floorplan_Image.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval); 
  }, [property.project_floorplan_Image.length]);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };
  const handleAllProperties = () =>{
    navigate('/allproperties');
  }
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
        <button onClick={handleHomeClick}><span>Home</span><span><FcHome/></span></button>
        <button onClick={handleAllProperties}><span>All Properties</span><span><FcList /></span></button>
        <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions/></span></button>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone'/></span></a>
      </header>
      <div className='pd-div'>
        <div className='pd-div-main'>
         <h1 className='projectname'>
            {property.projectName}
          </h1>
          <img src={property.highlightImage.url} alt='highlight'/>
        </div>

        <div className='pd-p1'>
          <img src={property.frontImage.url} className='pd-banner' alt={property.projectName} />
          <div className='pd-about'>
            <h2>About</h2>
            <div dangerouslySetInnerHTML={{ __html: property.project_description }} />
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
                <p key={index} className='amenity-box'>
                  <img src={amenityImages[amenity]} alt={amenity} className='amenity-image' />
                  <span className='amenity-label'>{amenity}</span> 
                </p>
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
          {/* <form>
            <input type='hidden' name='projectName' value={property.projectName} />
            <input type='text' name='name' placeholder='Enter Your Name*' required />
            <input type='email' name='email' placeholder='Enter Your Email*' required />
            <input type='text' name='phone' placeholder='Enter Your Phone*' required />
            <input type='text' name='message' placeholder='Enter Message*' required />
            <button type='submit' className='submit-button'>Submit</button>
          </form> */}
          <form onSubmit={handleSubmit}>
         
            
              <input
                type="text"
                name="name"
                placeholder='Enter Your Name*'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
          
      
              <input
                type="email"
                name="email"
                placeholder='Enter Your Email*'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
           
           
              <input
                type="tel"
                name="phone"
                placeholder='Enter Your Phone*'
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            
             
              <input
                name="message"
                placeholder='Enter Message*'
                value={formData.message}
                onChange={handleInputChange}
                required
              />
           
            <button type="submit" className='submit-button'>Submit</button>
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
