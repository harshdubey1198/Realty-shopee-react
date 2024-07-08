import React, { useState } from 'react';
import PropertyCard from './PropertyCard'; 
import { Link } from 'react-router-dom';
import logoImage from "../Images/Realty shopee main logo.png";
import projectData from "../realtyshopee.json";
import '../App.css'; 
import ScrollToTop from './ScrollToTop';
import { Helmet } from 'react-helmet';

function AllProperties() {
  const projects = projectData.data || [];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const isLocalhost = window.location.hostname === 'localhost' && window.location.port === '3000';

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

  const projectCount = isLocalhost ? filteredProjects.length : 999;

  return (
    <div className='al-center'>
      <Helmet>
        <title>All Properties are listed here!</title>
        <link rel="icon" href="https://res.cloudinary.com/dgplzytrq/image/upload/v1720260452/Builders/r_logo_pz8qnp.png"/>
      </Helmet>

      <ScrollToTop/>
      <nav className='all-p-nav'>       
        <div className='logo-div'>
          <a href="https://www.realtyshopee.com"><img src={logoImage} alt='Realty Shopee' loading='lazy'/></a>
        </div>
        <div className='navigators'>
          <a href="/">Home</a >
          <a href="/contacts">Contact us</a>
          <a href="/addproperties">Add Properties</a>
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
            <Link key={project.projectName} to={`/property/${project.projectName.replace(/\s+/g, '-').toLowerCase()}`}>
              <PropertyCard key={index} property={project} />
            </Link>
          ))
        ) : (
          <p className='npa'>No projects available</p>
        )}
      </div>
      {isLocalhost && <div className='project-count'>Project Count: <span>{projectCount}</span></div>}
    </div>
  );
}

export default AllProperties;
