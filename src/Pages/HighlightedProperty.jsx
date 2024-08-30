// HighlightedProperty.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link as  Element } from 'react-scroll';
import propertiesData from '../HighlightedProperties.json';
// import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import HNav from '../Components/Hnav';

const HighlightedProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = propertiesData.find(prop => prop.id === id);
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div>
      <style>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        .typewriter {
          overflow: hidden;
          border-right: 0.15em solid white;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          animation: 
            typewriter 3.5s steps(40, end) infinite,
            blink 0.75s step-end infinite;
        }
      `}</style>
      
      <HNav />
      <div className="mx-auto p-6">
        <div className="relative overflow-hidden rounded-lg mb-6 w-3/4 mt-10">
          <img src={property.images[0]} alt={property.name} className="w-3/4 h-96 object-cover" />
          <div className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent to-white opacity-30 transform skew-x-[-25deg] animate-shine"></div>
        </div>
        <div className="space-y-6">
          <div className="typewriter">
            <h1 className="text-4xl font-bold">{property.name}</h1>
          </div>
          <p>{property.about}</p>
          
          {/* Key Features and Amenities Section */}
          <Element name="keyFeaturesAndAmenities">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-evenly">
              <Card title="Key Features" items={property.keyFeatures} />
              <Card title="Amenities" items={property.amenities} />
            </div>
          </Element>
          
          <Element name="location">
            <LocationSection location={property.location} />
          </Element>
          
          <Element name="advantages">
            <Section title="Advantages of the Location" items={property.advantages} />
          </Element>
          
          <Element name="connectivity">
            <Section title="Connectivity" items={property.connectivity} />
          </Element>
          
          <Element name="nearbyAmenities">
            <Section title="Nearby Amenities" items={property.nearbyAmenities} />
          </Element>
          
          <Element name="bhkDetails">
            <Section title="BHK Details" items={Object.entries(property.bhkDetails).map(([key, detail]) => `${key}: ${detail}`)} />
          </Element>
          
          <Element name="developerInfo">
            <div>
              <h2 className="text-2xl font-semibold mb-2 typewriter">Developer Information:</h2>
              <p className="mb-4">{property.developerInfo.about}</p>
              <h3 className="text-xl font-semibold mb-2 typewriter">Reputation & Values:</h3>
              <ul className="list-disc pl-5">
                {property.developerInfo.reputation.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </Element>
        </div>
        
        <Element name="carousel">
          <div className="flex overflow-x-auto gap-4 py-4">
            {property.carousel.map((img, index) => (
              <div className="flex-shrink-0 w-full max-w-sm" key={index}>
                <img src={img} alt={`Carousel ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
};
<style jsx>{`
  .link-hover {
    position: relative;
    transition: color 0.3s ease-in-out;
    font-size:14px;
  }
  .link-hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: -10px;
    left: 0;
    background-color: black;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  .link-hover:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
  .link-hover:hover {
    color: #1b4a7c;
  }
`}</style>

const Card = ({ title, items }) => (
  <div className="flex-1 p-4 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold mb-2">{title}:</h2>
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Section = ({ title, items }) => (
  <div className='min-h-80'>
    <h2 className="text-2xl font-semibold mb-2 typewriter">{title}:</h2>
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const LocationSection = ({ location }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-2 typewriter">Location:</h2>
    <p>{location.description}</p>
    <img src={location.mapLink} alt={location.name} className="w-full h-auto rounded-lg shadow-lg" />
  </div>
);

export default HighlightedProperty;
