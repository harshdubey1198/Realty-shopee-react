import React, { useState } from 'react';
import PropertyCard from './PropertyCard'; 
import { Link, useNavigate } from 'react-router-dom';
import logoImage from "../Images/Realty shopee main logo.png";
import projectData from "../data100acress.json";
import '../App.css'; 
import ScrollToTop from './ScrollToTop';

function AllProperties() {
  const projects = projectData.data || [];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleContactUsClick = () => {
    navigate('/contactus');
  };
  const handleAddProjectClick = () => {
    navigate('/addproperties');
  };

  const typeMapping = {
    "Residential": ["residential", "residential plots", "residential property", "residential flats" , "residential apartments"],
    "Commercial": ["commercial property"],
    "SCO": ["sco plots","deen dayal plots"],
    "Floors": ["builder floors","independent floors"],
    "Affordable" :["affordable homes"]
  };

  const sortedProjects = projects.slice().sort((a, b) => {
    const nameA = a.projectName.toLowerCase();
    const nameB = b.projectName.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const filteredProjects = sortedProjects.filter(project => {
    const matchesSearchQuery = project.projectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || 
      (project.type && typeMapping[selectedType]?.some(type => project.type.toLowerCase() === type.toLowerCase()));
    return matchesSearchQuery && matchesType;
  });

  return (
    <div className='al-center'>
      <ScrollToTop/>
      <nav className='all-p-nav'>       
        <div className='logo-div'>
          <img src={logoImage} alt='Realty Shopee' loading='lazy'/>
        </div>
        <div className='navigators'>
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={handleContactUsClick}>Contact us</button>
          <button onClick={handleAddProjectClick}>Add Properties</button>
        </div>
      </nav>
      <div className='search-div gtc-search'>
        <input
          type='text'
          placeholder='Search projects...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='search-input'
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className='ptype-select'
        >
          <option value="All">All Types</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="SCO">SCO</option>
          <option value="Floors">Floors</option>
          <option value="Affordable">Affordables</option>
        </select>
      </div>
      <div className="projects-container gtc">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Link key={project.projectName} to={`/projects/${project.projectName}`}>
              <PropertyCard key={index} property={project} />
            </Link>
          ))
        ) : (
          <p className='npa'>No projects available</p>
        )}
      </div>
    </div>
  );
}

export default AllProperties;
