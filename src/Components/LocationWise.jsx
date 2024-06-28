import React from 'react';
import "../App.css";
import locationIcon from "../Images/Icons/location.png";
import LocationCard from './LocationCard';

const locations = [
  {
    locationName: 'Dwarka Expressway',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719572623/Locations/dwarka-expressway-details-compressed_xpkism.jpg', 
  }, 
  {
    locationName: 'Southern Peripheral Road',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719572724/Locations/southern-peripheral-road_0_1200_m4crmk.jpg', 
  },
  {
    locationName: 'Golf Course Road',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719573170/Locations/81403_IMG_20200130_174719228_HDR---Rajnish-Singh_600_900_rxeopi.jpg', 
  },
  {
    locationName: 'Northern Peripheral Road',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719573391/Locations/western-peripheral-expressway_1548712237_falova.jpg', 
  },{
    locationName: 'Golf Course Extn Road',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719573335/Locations/golf-course-extension-road-gurugram_igoke3.jpg', 
  },
  {
    locationName: 'MG Road',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719573464/Locations/MG-Road_d82cry.jpg', 
  },
  {
    locationName: 'New Gurgaon',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719573588/Locations/New-Gurgaon-The-new-growth-corridor-of-National-Capital-Region-scaled_qdpruo.jpg', 
  },
  {
    locationName: 'NH-48',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719573763/Locations/NH_48_0_1200_sh50rk.png', 
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
