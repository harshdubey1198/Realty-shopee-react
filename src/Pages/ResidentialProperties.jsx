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
    "Residential": ["residential", "residential plots", "residential property", "residential flats" , "residential apartments"]
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
    const matchesType = project.type && typeMapping["Residential"].some(type => project.type.toLowerCase() === type.toLowerCase());
    return matchesSearchQuery && matchesType; 
  });

  return (
    <div className='al-center'>
        <Helmet>
          <meta charSet='utf-8' />
          <meta name='description' content='Find the cheapest & new residential property in Gurgaon with Realty Shopee. Explore upcoming, and ready-to-move residential property options in prime locations.' />
          <link rel="canonical" href={`https://www.realtyshopee.com/residential-property-in-gurgaon`} />
          <title>New Residential Property in Gurgaon for Sale By Realty Shopee</title>
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

      <div className='r-c-d1'>
       <h1>Explore Residential Property in Gurgaon with Realty Shopee </h1>
       <p>Buy one of the upcoming residential properties in Gurgaon with Realty Shopee, your trusted
          partner in real estate. Whether you're seeking a new residence, the most affordable options,
          or specific locations like Old Gurgaon, Gurgaon Extension, or New Gurgaon, we offer a
          comprehensive selection of residential properties to suit every lifestyle and budget.
        </p>
      </div>
      <div className='r-c-d2'>
      <h2>Your Premier Destination for New Residential Property in Gurgaon</h2>
        <p>
          Explore the latest developments in Gurgaon with our collection of new residential properties.
          From modern apartments with state-of-the-art amenities to exclusive gated communities,
          find your dream home in Gurgaon's burgeoning neighborhoods.
        </p>
      </div>


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
