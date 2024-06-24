import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"; // Create this CSS file to style the component
import { Helmet } from 'react-helmet';

const NotFound =()=> {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <Helmet>
        <link rel="canonical" href={`https://www.realtyshopee.com/*`} />
        <title>Page Not Found - Realty Shopee</title>
        <link rel="icon" href="https://www.realtyshopee.com/agent.png" />
      </Helmet>
      <h1>Oops! Page Not Found</h1>
      <a href="https://www.realtyshopee.com" className='a-home'>Get Back Home</a>
      <img 
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
        alt="404 Not Found" 
        className="not-found-image"
      />
      <p>It seems we can't find the page you're looking for.</p>
      <p>But don't worry, you can find plenty of other things on our homepage.</p>
      <button onClick={handleHomeClick} className="home-button">Explore Properties</button>
    </div>
  );
}

export default NotFound;
