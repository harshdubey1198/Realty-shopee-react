import React, { useState } from 'react';
import PropertyCard from '../Components/PropertyCard'; 
import { Link, useNavigate } from 'react-router-dom';
import logoImage from "../Images/Realty shopee main logo.png";
import projectData from "../realtyshopee.json";
import '../App.css'; 
import { Helmet } from 'react-helmet';
import ScrollToTop from '../Components/ScrollToTop';

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
      <div className='c-c-d'>
         <h1>Invest in SCO Plots in Gurugram Right Now </h1>
          <p>Welcome to Realty Shopee, your premier destination for SCO (Shop-cum-office) properties
             in Gurgaon. Whether you&#39;re looking for commercial ventures, residential options, or
             investment opportunities, we specialize in catering to your diverse real estate needs across
             Gurugram. Discover the perfect SCO plots in Gurugram that align with your business
             aspirations or investment goals, featuring two-sided open layouts and a variety of options
             tailored to suit different requirements.
            </p> 
            <h2>SCO Plots in Gurgaon for Commercial Purposes</h2>
             <p>Gurugram, known for its rapid urbanization and robust economic growth, offers a prime
                location for SCO plots. These versatile SCO plots in Gurgaon combine commercial and
                office spaces, ideal for businesses looking to establish a presence in one of India&#39;s leading
                corporate hubs.
              </p>  
             <h3>Two Side Open SCO Plots for Business Efficiency</h3>
              <p>Our listings include Two sides open SCO plots, maximizing visibility and accessibility for
                 businesses. These layouts enhance the potential for customer engagement and operational
                 efficiency, making them highly sought after in the competitive Gurgaon real estate market.
                </p>
      </div>
      <ScrollToTop/>
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
      <div className='c-c-d'>
        <h3>Commercial and Residential SCO Plots for Sale in Gurgaon </h3>
           <p>Realty Shopee presents a comprehensive range of residential SCO plots for sale in
              Gurgaon, catering to real estate investors. They also provide commercial SCO plots for sale
              in Gurgaon. Whether you seek a bustling commercial location or a mixed-use development
              opportunity, we have curated options that meet diverse preferences and investment
              objectives.
            </p>       
        <h3>Explore Affordable SCO Property in Gurgaon</h3>
         <p>We understand the importance of budget-conscious decisions. Explore affordable SCO
            property in Gurgaon without compromising on quality or location. Our expert team ensures
            transparency and value, guiding you through the process to find the right property that fits
            your financial strategy.
          </p>
      </div>

        <div className='c-c-d'>
       <h4>SCO Properties Ready to Move in Gurgaon </h4>
        <p>Discover SCO properties ready to move in Gurgaon. These properties offer convenience
           and flexibility, allowing businesses and investors to capitalize on opportunities without
           delays.
          </p> 
       <h4>Prime Commercial SCO Plots for Sale in New Gurugram </h4>
        <p>Invest in prime commercial SCO plots for sale through Realty Shopee. Benefit from strategic
           locations, modern amenities, and potential rental income in Gurgaon&#39;s thriving commercial
           districts. Whether you&#39;re expanding your business or seeking a lucrative investment, our
           portfolio includes options that promise long-term growth and profitability.
           At Realty Shopee, we are committed to delivering exceptional real estate solutions tailored
           to your unique requirements. Explore our listings of SCO plots in Gurugram, featuring two-
           side open configurations, commercial and residential options, affordable properties, and
           ready-to-move-in opportunities. Contact us today to embark on your journey towards
           acquiring the perfect SCO property in Gurgaon that meets your business aspirations and
           investment objectives.
          </p>
          </div>

    </div>
  );
}

export default ResidentialProperties;
