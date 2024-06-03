// LocationDetail.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import projectsData from '../data100acress.json'; 
import '../App.css';
function LocationList() {
  const navigate = useNavigate();
  const { locationName } = useParams();
  const projects = projectsData.data; 

  const filteredProjects = projects.filter(project =>
    project.projectAddress.toLowerCase().includes(locationName.toLowerCase())
  );

  const handleHomeClick = () => {
    navigate('/');
  };
  const handleContactClick = () =>{
    navigate('/contactus')
  }
  return (
    <div className="location-details">
      <div className='ld-nav'>
        <button onClick={handleHomeClick} className='ld-btn'>Home</button>
        <h2>Properties in {locationName}</h2>
        <button onClick={handleContactClick} className='ld-btn'>Contact Us</button>
      </div>
      <div className="property-list">
        {filteredProjects.map((project, index) => (
          <PropertyCard key={index} property={project} />
        ))}
      </div>
    </div>
  );
}

export default LocationList;
