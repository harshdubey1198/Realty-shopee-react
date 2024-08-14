import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../HighlightedProperties.json';

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
    <div className="max-w-5xl mx-auto p-6">
      <div className="relative overflow-hidden rounded-lg mb-6 w-3/4">
        <img src={property.images[0]} alt={property.name} className="w-3/4 h-96 object-cover" />
        <div className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent to-white opacity-30 transform skew-x-[-25deg] animate-shine"></div>
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">{property.name}</h1>
        <p>{property.about}</p>
        <Section title="Key Features" items={property.keyFeatures} />
        <Section title="Location" items={[property.location]} />
        <Section title="Advantages of the Location" items={property.advantages} />
        <Section title="Connectivity" items={property.connectivity} />
        <Section title="Nearby Amenities" items={property.nearbyAmenities} />
        <Section title="Amenities" items={property.amenities} />
        <Section title="BHK Details" items={Object.entries(property.bhkDetails).map(([key, detail]) => `${key}: ${detail}`)} />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Developer Information:</h2>
          <p className="mb-4">{property.developerInfo.about}</p>
          <h3 className="text-xl font-semibold mb-2">Reputation & Values:</h3>
          <ul className="list-disc pl-5">
            {property.developerInfo.reputation.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-4 py-4">
        {property.carousel.map((img, index) => (
          <div className="flex-shrink-0 w-full max-w-sm" key={index}>
            <img src={img} alt={`Carousel ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Section = ({ title, items }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-2">{title}:</h2>
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default HighlightedProperty;
