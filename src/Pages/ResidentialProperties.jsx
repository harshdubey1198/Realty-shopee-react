import React, { useState } from 'react';
import PropertyCard from '../Components/PropertyCard';
import { Link } from 'react-router-dom';
import logoImage from "../Images/Realty shopee main logo.png";
import projectData from "../realtyshopee.json";
import '../App.css';
import ScrollToTop from '../Components/ScrollToTop';
import Loader from 'react-loaders';
import { Helmet } from 'react-helmet';

function ResidentialProperties() {
  const projects = projectData.data || [];
  const [searchQuery, setSearchQuery] = useState('');

  // const navigate = useNavigate();
  // const handleHomeClick = () => {
  //   navigate('/');
  // };
  // const handleContactUsClick = () => {
  //   navigate('/contactus');
  // };
  // const handleAddProjectClick = () => {
  //   navigate('/addproperties');
  // };

  const typeMapping = {
    "Residential": ["residential", "residential plots", "residential property", "residential flats", "residential apartments"]
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
        
        <link rel="canonical" href="https://www.realtyshopee.com/residential-property-in-gurgaon" />
      </Helmet>
      <nav className='all-p-nav'>
        <div className='logo-div'>
          <a href="https://www.realtyshopee.com" className='r-logo'><img src={logoImage} alt='Realty Shopee' loading='lazy'/></a>
        </div>
        <div className='navigators'>
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/addproperties">Add Properties</Link>
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
      <div className='r-c-d1'>
        <h1>Explore Ready-to-Move Residential Property in Gurgaon</h1>
        <p>Buy an upcoming ready-to-move residential property in Gurgaon with <a href="https://www.realtyshopee.com/">Realty Shopee</a>, your trusted partner in real estate. Whether you're seeking a new residence, the most affordable options, or specific locations like Old Gurgaon, Gurgaon Extension, or New Gurgaon, we offer a comprehensive selection of residential properties to suit every lifestyle and budget.
        </p>
        <h2>Your Premier Destination for New Residential Property in Gurgaon</h2>
        <p>Explore our collection of new residential properties in Gurgaon. From modern apartments with state-of-the-art amenities to exclusive gated communities, find your dream home in Gurgaon's burgeoning neighborhoods.  
        </p>
        <h2>Get the Cheapest Residential Property in Gurgaon</h2>
        <p>We understand the importance of affordability. Our listings provide the cheapest residential property in Gurgaon, without sacrificing quality or comfort. Whether you're a first- time buyer or looking to invest, Realty Shopee helps you find the perfect balance of price and value.
        </p>
        <h3>Discover Charming Residential Properties in Old Gurgaon</h3>
        <p>Experience living in Old Gurgaon with our diverse range of residential options. Discover the best residential properties in old Gurgaon that combine heritage and modern life, providing a unique insight into the city's colorful culture.
        </p>
      </div>

      <ScrollToTop/>
      <div className='residential-p-cards'>
        <div className="projects-container gtc">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Link key={project.projectName} to={`/projects/${project.projectName}`}>
                <PropertyCard key={index} property={project} />
              </Link>
            ))
          ) : (
            <p className='npa'>No projects available <Loader type="ball-pulse-sync" /></p>
          )}
        </div>
      </div>

      <div className='r-c-d3'>
        <h3>Invest in Residential Property in Gurgaon Extension</h3>
        <p>Explore the expanding horizons of Gurgaon with properties in Gurgaon Extension. Enjoy
          spacious layouts, green surroundings, and modern conveniences in this rapidly developing
          area, ideal for families and professionals alike.
        </p>
        <h3>Buy the Best Residential Property in New Gurgaon</h3>
        <p>Discover the future of urban living in New Gurgaon. Our listings feature cutting-edge
          residential developments designed for modern lifestyles, offering proximity to commercial
          hubs, educational institutions, and recreational facilities.
        </p>
      </div>

      <div className='r-c-d3 mb0'>
        <h4>Stay Ahead with Upcoming Residential Properties in Gurgaon</h4>
        <p>Stay ahead with Realty Shopee's insights into upcoming residential projects in Gurgaon.
          Whether you're looking for pre-launch opportunities or early investments, we provide
          exclusive access to properties poised to redefine the city's skyline.
        </p>
        <h4>Move in with Ready-to-Move Residential Property in Gurgaon</h4>
        <p>For those seeking immediate occupancy, explore our selection of ready-to-move residential
          properties in Gurgaon. Skip the wait and settle into your new home seamlessly, with options
          ranging from compact apartments to spacious villas.<br/><br/>
          Explore Realty Shopee's extensive listings and discover why we are Gurgaon's leading real
          estate platform for residential properties. Contact us to set up a consultation and help us
          locate the ideal residential home that matches your needs and surpasses your expectations.<br/><br/>
          Realty Shopee is your gateway to finding the finest residential properties in Gurgaon.
          Whether searching for new developments, affordable options, or specific locations, trust
          Realty Shopee to make your Gurgaon living dreams a reality. <br/><br/>
          Start your journey with Realty Shopee today and unlock the doors to your future home in
          Gurgaon's thriving real estate landscape.
        </p>
      </div>
    </div>
  );
}

export default ResidentialProperties;
