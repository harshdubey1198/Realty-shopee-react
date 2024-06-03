import React from 'react';
import "../App.css";
import locationIcon from "../Images/Icons/location.png";
import LocationCard from './LocationCard';

const locations = [
  {
    locationName: 'Dwarka Expressway',
    image: 'https://www.100acress.com/OtherImages/capture1.PNG', 
  }, 
  {
    locationName: 'Southern Peripheral Road',
    image: 'https://www.100acress.com/OtherImages/bgseven.PNG', 
  },
  {
    locationName: 'Golf Course Road',
    image: 'https://www.100acress.com/OtherImages/golfCourse.jpg', 
  },
  {
    locationName: 'Northern Peripheral Road',
    image: 'https://www.100acress.com/OtherImages/sikanderpur.jpg', 
  },{
    locationName: 'Golf Course Extn Road',
    image: 'https://www.100acress.com/OtherImages/sikanderpur.jpg', 
  },
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
