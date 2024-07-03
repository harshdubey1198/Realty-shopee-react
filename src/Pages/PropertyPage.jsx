import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropertyDetail from '../Components/PropertyDetail';
import propertyData from '../realtyshopee.json';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../Components/ScrollToTop';

function PropertyPage() {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = propertyData.data.find(item => item.projectName === projectName);
    if (!foundProperty) {
      console.log("not found");
      navigate('/');
    } else {
      setProperty(foundProperty);
    }
  }, [projectName, navigate]);

  if (!property) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <link rel="canonical" href={`https://www.realtyshopee.com/projects/${projectName}`} />
        <title>{property.meta_title}</title>
        <link rel="icon" href="https://www.realtyshopee.com/agent.png" />
        <meta name="description" content={property.meta_description} />
      </Helmet>
      <ScrollToTop />
      <PropertyDetail property={property} />
    </div>
  );
}

export default PropertyPage;
