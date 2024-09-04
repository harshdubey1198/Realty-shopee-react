import React, { useState, useEffect } from 'react';
import { Link as Link , ScrollLink, scroller } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
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

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleMobileDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="fixed w-full z-10 bg-white shadow-lg">
      <div className="relative flex justify-between items-center px-4 py-2">
        <div className="logo-div">
          <a href="https://www.realtyshopee.com" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Realty Shopee" className="h-10" />
          </a>
        </div>

        <div className="hidden lg:flex space-x-4 overflow-x-auto">
          <button onClick={() => scroller.scrollTo('home', { duration: 1500, smooth: true, offset: -navbarHeight })} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Home</button>
          <ScrollLink to="location" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Location</ScrollLink>
          <ScrollLink to="advantages" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Advantages</ScrollLink>
          <ScrollLink to="connectivity" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Connectivity</ScrollLink>
          <ScrollLink to="nearbyAmenities" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Nearby Amenities</ScrollLink>
          <ScrollLink to="carousel" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-2 py-2 rounded-md bg-slate-700">Gallery</ScrollLink>
        </div>

        <div className="flex flex-row justify-evenly w-40">
          <TfiHeadphoneAlt className="right-panel-icons" />
          <div className="group w-8 relative">
            <img src={currentIcon} alt="User Icon" className="h-8 w-8" />
            <div className="auth-dropdown absolute right-0 mt-0 bg-white shadow-md rounded-lg hidden group-hover:block">
              <span className="block px-4 py-2 text-sm">{username ? `Welcome, ${username}` : "Guest"}</span>
              <button onClick={() => navigate('/allproperties')} className="block w-full text-left px-4 py-2 text-sm">All Properties</button>
              <button onClick={() => navigate('/contactus')} className="block w-full text-left px-4 py-2 text-sm">Contact Us</button>
              {username ? (
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm">Logout</button>
              ) : (
                <button onClick={() => navigate('/login')} className="block w-full text-left px-4 py-2 text-sm">Login / Signup</button>
              )}
            </div>
          </div>
          <AiOutlineMenu className="right-panel-icons cursor-pointer lg:hidden" onClick={toggleMobileDropdown} />
        </div>
      </div>

      {isDropdownVisible && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <ScrollLink to="home" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button className="block w-full text-left px-4 py-2">Home</button></ScrollLink>
          <ScrollLink to="location" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button className="block w-full text-left px-4 py-2">Location</button></ScrollLink>
          <ScrollLink to="advantages" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button className="block w-full text-left px-4 py-2">Advantages</button></ScrollLink>
          <ScrollLink to="connectivity" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button className="block w-full text-left px-4 py-2">Connectivity</button></ScrollLink>
          <ScrollLink to="nearbyAmenities" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button className="block w-full text-left px-4 py-2">Nearby Amenities</button></ScrollLink>
          <ScrollLink to="carousel" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button className="block w-full text-left px-4 py-2">Gallery</button></ScrollLink>
          <select onChange={handleDropdownChange} className="block w-full py-1">
            <option value="">Properties</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="sco">SCO</option>
            <option value="highlighted">Highlighted</option>
          </select>
          <Link to="/blogs" onClick={toggleMobileDropdown}><button className="block w-full text-left px-4 py-2">Blogs</button></Link>
        </div>
      )}
    </nav>
  );
};

export default HNav;
