import React from 'react';
import { Link } from 'react-router-dom';
import propertiesData from '../HighlightedProperties.json';

const HighlightedProperties = () => {
  const highlightedShow = ['smart-world-sector-69','m3m-golf-hills', 'tulip-monsella','smart-world-the-edition'];
  const filteredProperties = propertiesData.filter(property => highlightedShow.includes(property.id));
  return (
    <div className="highlighted-properties-container my-10 mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Highlighted Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-20">
        {filteredProperties.map(property => (
          <Link to={`/highlights/${property.id}`} key={property.id} style={{maxWidth: "100%" }}>
            <div className="property-h-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={property.images[0]} alt={property.name} className="h-64 w-full object-fill" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{property.name}</h3>
                <p className="text-gray-700">{property.location.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HighlightedProperties;
