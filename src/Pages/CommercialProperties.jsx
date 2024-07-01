    import React, { useState } from 'react';
    import PropertyCard from '../Components/PropertyCard'; 
    import { Link, useNavigate } from 'react-router-dom';
    import logoImage from "../Images/Realty shopee main logo.png";
    import projectData from "../realtyshopee.json";
    import '../App.css'; 
    import { Helmet } from 'react-helmet';
import ScrollToTop from '../Components/ScrollToTop';

    const CommercialProperties =()=> {
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
        "Commercial": ["commercial property"]
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
        const matchesType = project.type && typeMapping["Commercial"].some(type => project.type.toLowerCase() === type.toLowerCase());
        return matchesSearchQuery && matchesType;
      });

      return (
        <div className='al-center'>
          <Helmet>
            <meta charSet='utf-8' />
            <link rel="canonical" href={`https://www.realtyshopee.com/commercial-property-in-gurgaon`} />
            <title>Invest in the Best Commercial Property in Gurgaon | Realty Shopee</title>
            <link rel="icon" href="https://www.realtyshopee.com/agent.png" />
            <meta name="description" content="Planning to invest in real estate? Explore the best commercial property in Gurgaon with Realty Shopee. Investment opportunities, ready-to-move, and resale options are available."/>
          </Helmet>
          <nav className='all-p-nav'>       
            <div className='logo-div'>
            <a href="https://www.realtyshopee.com" className='r-logo'><img src={logoImage} alt='Realty Shopee' loading='lazy'/></a>            </div>
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
            <h1> Invest in the Best Commercial Property in Gurgaon with Realty Shopee</h1>
              <p>Welcome to Realty Shopee, your trusted partner to find the best commercial property in
                Gurgaon. Whether you are an investor, business owner, or entrepreneur looking to establish
                or expand your presence in Gurgaon, we provide tailored solutions to meet your commercial
                real estate needs.
              </p>
              <h2>Choose from a Range of Options</h2>
                <p>Explore a curated selection of the top commercial projects in Gurgaon with Realty Shopee.
                   We offer diverse options including office spaces, retail outlets, industrial properties, and
                   more, located in key business districts and prime areas of Gurgaon. Our listings feature the
                   top commercial projects in Gurgaon that have modern amenities, strategic locations, and
                   competitive pricing to cater to various business requirements.
                 </p>
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
        <div className='c-c-d'>
          <h3>Don’t Miss the Opportunities for Investment in Commercial Property in Gurgaon </h3>
          <p>Gurgaon continues to attract investors seeking high returns in commercial real estate. With
            its robust infrastructure, proximity to Delhi, and thriving corporate environment, investment in
            commercial property in Gurgaon presents lucrative opportunities. Realty Shopee provides
            comprehensive market insights and expert guidance to help you make informed decisions
            that align with your commercial property investment in Gurgaon. You will reach your financial
            goals quicker when you make well-informed decisions.
            </p>
        <h3>Expand Your Business with Resale Commercial Property in Gurgaon</h3>
          <p>Navigating the resale market requires expertise and reliable partnerships. Realty Shopee
            collaborates with reputable resale commercial property dealers in Gurgaon who have a
            proven track record in delivering value-driven solutions. Whether you are looking to acquire
            an established income-generating resale commercial property in Gurgaon or explore
            opportunities for capital appreciation, our network of dealers ensures access to premium
            resale options tailored to your investment strategy.
            </p>
        <h3>Invest in the Best Ready-to-Move Commercial Property in Gurgaon</h3>
            <p>Time is crucial in business operations. Realty Shopee will provide you with the best of the
              best ready-to-move commercial property in Gurgaon, designed to expedite your business
              setup process. Benefit from turnkey solutions that include fully equipped office spaces, retail
              storefronts, and industrial facilities, allowing you to commence operations without delays.
              Our ready-to-move listings are strategically located and equipped with modern amenities to
              support your business growth from day one.
            </p>  
        
          <h4>Contact Realty Shopee Today </h4>
          <p>Take the next step towards securing the best commercial property to invest in Gurgaon with
              Realty Shopee. Explore our comprehensive listings, schedule a consultation with our
              experts, and unlock the potential of Gurgaon&#39;s commercial real estate market. Contact us
              today to get started on achieving your business goals with Realty Shopee.<br/><br/>
              Realty Shopee is one of the best commercial property dealers in Gurgaon. We are your
              gateway to success in Gurgaon&#39;s commercial real estate sector. With a focus on quality,
              reliability, and customer satisfaction, we are dedicated to helping you find the perfect
              commercial property solution that enhances your business operations and investment
              portfolio. Trust Realty Shopee for all your commercial real estate needs in Gurgaon and
              embark on a path to long-term growth and profitability.
          </p>
        </div>
        <ScrollToTop/>
        </div>
      );
    }

    export default CommercialProperties;
