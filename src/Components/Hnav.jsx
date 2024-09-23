import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Images/Realty shopee main logo.png";
import menIcon from "../Images/Icons/man.png";
import womenIcon from "../Images/Icons/woman.png";
import '../App.css';

const HNav = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdown2Visible, setDropdown2Visible] = useState(false);
  // const [isMobileDropdownVisible, setMobileDropdownVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(womenIcon);
  const navbarHeight = 60;

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(prevIcon => (prevIcon === womenIcon ? menIcon : womenIcon));
    }, 4000);
    return () => clearInterval(interval);
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

  const handleDropdownChange = (event) => {
    const selectedSection = event.target.value;
    if (selectedSection) {
      scroller.scrollTo(selectedSection, {
        duration: 900,
        smooth: true,
        offset: -navbarHeight,
      });
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleMobileDropdown = () => {
    setDropdown2Visible(!isDropdown2Visible);
  };

  return (
    <nav className="fixed w-full z-10 bg-white shadow-lg">
      <div className="relative flex justify-between w-full items-center px-4 py-2">
        <div className="logo-div">
          <a href="https://www.realtyshopee.com" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Realty Shopee" className="h-10" />
          </a>
        </div>

        <div className="hidden lg:flex space-x-4 overflow-x-auto">
          <Link to="/" className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Home</Link>
          <ScrollLink to="location" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Location</ScrollLink>
          <ScrollLink to="advantages" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Advantages</ScrollLink>
          <ScrollLink to="connectivity" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Connectivity</ScrollLink>
          <ScrollLink to="nearbyAmenities" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Nearby Amenities</ScrollLink>
          <ScrollLink to="carousel" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Gallery</ScrollLink>
        </div>

        <div className="flex flex-row justify-evenly w-40">
          <TfiHeadphoneAlt className="right-panel-icons" />
          <div className="relative w-8">
            <img 
              src={currentIcon} 
              alt="User Icon" 
              className="h-8 w-8 cursor-pointer" 
              onClick={toggleDropdown} 
            />
            <div 
              className="auth-dropdown absolute right-0 mt-0 bg-white shadow-md rounded-lg z-10" 
              style={{ display: isDropdownVisible ? 'block' : 'none' }}
            >
              <span className="block px-4 py-2 text-sm bg-white text-center ">{username ? `Welcome, ${username}` : "Guest"}</span>
              <button onClick={() => navigate('/blogs')} className="block w-full text-left px-4 py-2 text-sm">Blogs</button>
              <button onClick={() => navigate('/allproperties')} className="block w-full text-left px-4 py-2 text-sm">All Properties</button>
              <button onClick={() => navigate('/contactus')} className="block w-full text-left px-4 py-2 text-sm">Contact Us</button>
              {username ? (
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm">Logout</button>
              ) : (
                <button onClick={() => navigate('/login')} className="block w-full text-left px-4 py-2 text-sm">Login / Signup</button>
              )}
            </div>
          </div>
          {/* <AiOutlineMenu className="right-panel-icons cursor-pointer lg:hidden" onClick={toggleMobileDropdown} /> */}
        </div>
      </div>

      {/* {isDropdown2Visible && (
          <div className="mob-dropdown">
            <Link to="/"  onClick={toggleMobileDropdown}><button>Home</button></Link>
            <Link to="/blogs" onClick={toggleMobileDropdown}><button>Blogs</button></Link>
            <Link to="/allproperties" onClick={toggleMobileDropdown}><button>All Properties</button></Link>
          </div>
        )} */}
    </nav>
  );
};

export default HNav;
