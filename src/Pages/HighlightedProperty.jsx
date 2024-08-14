import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../HighlightedProperties.json';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HighlightedProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = propertiesData.find(prop => prop.id === id);
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container highlighted-property" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div className="row">
        <div className="col-12 property-banner" style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', marginBottom: '20px' }}>
          <img src={property.images[0]} alt={property.name} className="img-fluid property-banner-img" style={{ height: '400px', objectFit: 'cover' }} />
          <div className="shine-effect" style={{ position: 'absolute', top: '0', left: '-75%', zIndex: '2', display: 'block', content: "''", width: '50%', height: '100%', background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%)', transform: 'skewX(-25deg)', animation: 'shine 0.75s' }}></div>
        </div>
      </div>
      <div className="property-details">
        <h1>{property.name}</h1>
        <p>{property.about}</p>
        <h2>Key Features:</h2>
        <ul>
          {property.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h2>Location:</h2>
        <p>{property.location}</p>
        <h2>Advantages of the Location:</h2>
        <ul>
          {property.advantages.map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>
        <h2>Connectivity:</h2>
        <ul>
          {property.connectivity.map((connect, index) => (
            <li key={index}>{connect}</li>
          ))}
        </ul>
        <h2>Nearby Amenities:</h2>
        <ul>
          {property.nearbyAmenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <h2>Amenities:</h2>
        <ul>
          {property.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <h2>BHK Details:</h2>
        <ul>
          {Object.entries(property.bhkDetails).map(([key, detail], index) => (
            <li key={index}>{key}: {detail}</li>
          ))}
        </ul>
        <h2>Developer Information:</h2>
        <p>{property.developerInfo.about}</p>
        <h3>Reputation & Values:</h3>
        <ul>
          {property.developerInfo.reputation.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <div className="property-carousel row">
        {property.carousel.map((img, index) => (
          <div className="col-12 col-md-4 mb-3" key={index}>
            <img src={img} alt={`Carousel ${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightedProperty;
