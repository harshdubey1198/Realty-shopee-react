import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import {  useNavigate } from 'react-router-dom';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import logo from "../Images/Realty shopee main logo.png";
import menIcon from "../Images/Icons/man.png";
import womenIcon from "../Images/Icons/woman.png";
import '../App.css';

const HNav = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/login');
    fetch('https://realty-react-backend.onrender.com/logout', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const [currentIcon, setCurrentIcon] = useState(womenIcon);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(prevIcon => (prevIcon === womenIcon ? menIcon : womenIcon));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const navbarHeight = 60;
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleMobileDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav>
      <div className='relative'>
        <div className='logo-div'>
          <a href='https://www.realtyshopee.com' target='_blank' rel='noopener noreferrer'>
            <img src={logo} alt='Realty Shopee' />
          </a>
        </div>

        <div >
          <ScrollLink to="keyFeaturesAndAmenities" smooth={true} duration={1500} offset={-navbarHeight}>Key Features & Amenities</ScrollLink>
          <ScrollLink to="location" smooth={true} duration={1500} offset={-navbarHeight}>Location</ScrollLink>
          <ScrollLink to="advantages" smooth={true} duration={1500} offset={-navbarHeight}>Advantages</ScrollLink>
          <ScrollLink to="connectivity" smooth={true} duration={1500} offset={-navbarHeight}>Connectivity</ScrollLink>
          <ScrollLink to="nearbyAmenities" smooth={true} duration={1500} offset={-navbarHeight}>Nearby Amenities</ScrollLink>
          <ScrollLink to="bhkDetails" smooth={true} duration={1500} offset={-navbarHeight}>BHK Details</ScrollLink>
          <ScrollLink to="developerInfo" smooth={true} duration={1500} offset={-navbarHeight}>Developer Info</ScrollLink>
          <ScrollLink to="carousel" smooth={true} duration={1500} offset={-navbarHeight}>Carousel</ScrollLink>
       
        </div>

        <div className='right-panel'>
          {/* <button className='add-p-nav' onClick={handleAddProject}>Add Properties</button> */}
          <TfiHeadphoneAlt className='right-panel-icons' />
          <div className='s-l'>
            <img src={currentIcon} alt="Icon" />
            <div className="auth-dropdown">
              <span className='wel-user'>{username ? `Welcome, ${username}` : "Guest"}</span>
              <button onClick={() => navigate('/allproperties')}>All Properties</button>
              <button onClick={() => navigate('/contactus')}>Contact Us</button>
              {username ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <button onClick={() => navigate('/login')}>Login / Signup</button>
              )}
            </div>
          </div>
          <div className='mob-nav-dropdown' onClick={toggleMobileDropdown}>
            <AiOutlineMenu className='right-panel-icons' />
          </div>
        </div>

        {isDropdownVisible && (
          <div className="mob-dropdown">
            <ScrollLink to="keyFeaturesAndAmenities" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Key Features & Amenities</button></ScrollLink>
            <ScrollLink to="location" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Location</button></ScrollLink>
            <ScrollLink to="advantages" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Advantages</button></ScrollLink>
            <ScrollLink to="connectivity" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Connectivity</button></ScrollLink>
            <ScrollLink to="nearbyAmenities" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Nearby Amenities</button></ScrollLink>
            <ScrollLink to="bhkDetails" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>BHK Details</button></ScrollLink>
            <ScrollLink to="developerInfo" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Developer Info</button></ScrollLink>
            <ScrollLink to="carousel" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Carousel</button></ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default HNav;
