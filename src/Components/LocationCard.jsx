// LocationCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

function LocationCard({ locationName, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/location/${locationName}`);
  };

  return (
    <div className="location-card" onClick={handleClick}>
      <img src={image} alt={locationName} className="location-image" loading='lazy'/>
      <h5>{locationName}</h5>
    </div>
  );
}

LocationCard.propTypes = {
  locationName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default LocationCard;

// import React from 'react';
// import PropTypes from 'prop-types';
// import '../App.css';

// function LocationCard({ locationName, image }) {
//   return (
//     <div className="location-card">
      // <img src={image} alt={locationName} className="location-image" loading='lazy'/>
//       <h5>{locationName}</h5>
//     </div>
//   );
// }

// LocationCard.propTypes = {
//   locationName: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };

// export default LocationCard;
