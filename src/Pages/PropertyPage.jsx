import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetail from '../Components/PropertyDetail';
import propertyData from '../data100acress.json'; // Assuming you import property data from JSON file
import { Helmet } from 'react-helmet';
import ScrollToTop from '../Components/ScrollToTop';

function PropertyPage() {
  const { projectName } = useParams(); // Retrieve the projectName from the URL parameters
  const property = propertyData.data.find(item => item.projectName === projectName);

  if (!property) {
    console.log("not found");
    return <div>Project not found</div>; // Handle the case where the project is not found
  }

  return (
    <div>
       <Helmet>
        <meta charSet='utf-8' />
        <link rel="canonical" href="https://www.realtyshopee.com/projects/:projectName" />
        <title>{projectName} - Realty Shopee</title>
        <link rel="icon" href="https://www.realtyshopee.com/agent.png" />
        <meta name="description" content="This is a description of the project page"/>
      </Helmet>
      <ScrollToTop/>
      <PropertyDetail property={property} />
    </div>
  );
}

export default PropertyPage;
