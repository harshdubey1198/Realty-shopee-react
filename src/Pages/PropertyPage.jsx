import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetail from '../Components/PropertyDetail';
import propertyData from '../data100acress.json'; // Assuming you import property data from JSON file

function PropertyPage() {
  const { projectName } = useParams(); // Retrieve the projectName from the URL parameters
  const property = propertyData.data.find(item => item.projectName === projectName);

  if (!property) {
    console.log("not found");
    return <div>Project not found</div>; // Handle the case where the project is not found
  }

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}

export default PropertyPage;