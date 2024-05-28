import React from 'react';
import "../App.css";
import locationIcon from "../Images/Icons/location.png";
import LocationCard from './LocationCard';

const locations = [
  {
    locationName: 'Dwarka Expressway',
    image: 'https://www.100acress.com/OtherImages/capture1.PNG', // External image URL
  }, 
  {
    locationName: 'Southern Peripheral Road',
    image: 'https://www.100acress.com/OtherImages/bgseven.PNG', // Import local image
  },
  {
    locationName: 'Golf Course Road',
    image: 'https://www.100acress.com/OtherImages/golfCourse.jpg', // Import local image
  },
  {
    locationName: 'Northern Peripheral Road',
    image: 'https://www.100acress.com/OtherImages/sikanderpur.jpg', // Import local image
  },
  // Add more locations as needed
];

function LocationWise() {
  return (
    <div className="home-components bt">
      <h4><img src={locationIcon} className="section-icon" alt="Locationwise"/> Prime Locations <img src={locationIcon} className="section-icon" alt="Locationwise"/></h4>
      <div className='location-container'>
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            locationName={location.locationName}
            image={location.image} // Pass image directly
          />
        ))}
      </div>
    </div>
  );
}

export default LocationWise;
