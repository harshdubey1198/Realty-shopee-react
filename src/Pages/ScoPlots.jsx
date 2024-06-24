import React, { useState } from 'react';
import PropertyCard from '../Components/PropertyCard'; 
import { Link, useNavigate } from 'react-router-dom';
import logoImage from "../Images/Realty shopee main logo.png";
import projectData from "../data100acress.json";
import '../App.css'; 
import { Helmet } from 'react-helmet';

function ResidentialProperties() {
  const projects = projectData.data || [];
  const [searchQuery, setSearchQuery] = useState('');

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
    "SCO": ["sco plots","deen dayal plots"]
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
    const matchesType = project.type && typeMapping["SCO"].some(type => project.type.toLowerCase() === type.toLowerCase());
    return matchesSearchQuery && matchesType;
  });

  return (
    <div className='al-center'>
    <Helmet>
      <meta charSet='utf-8'/>
        <link rel="canonical" href={`https://www.realtyshopee.com/sco-plots-in-gurgaon`} />
        <title>Premium SCO Plots in Gurugram for Sale | Realty Shopee</title>
        <meta name="description" content="Premium commercial and residential SCO plots in Gurgaon for sale with two-side open layouts. Explore affordable options at Realty Shopee."/>
        <link rel="icon" href="https://www.realtyshopee.com/agent.png" />
      </Helmet>
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

export default ResidentialProperties;
