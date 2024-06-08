import React, { useState } from 'react';
import logo from "../Images/Realty shopee main logo.png";
import '../App.css';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa6";
import { Link, scroller } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const navbarHeight = 60; 
  const [isDropdownVisible, setDropdownVisible] = useState(false);

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

  return (
    <nav>
      <div className='relative'>
        <div className='logo-div'>
          <img src={logo} alt='Realty Shopee' />
        </div>
        
        <div className={`navigators ${isDropdownVisible ? 'visible' : ''}`}>
          <Link to="home" smooth={true} duration={1500} offset={-navbarHeight}><button>Home</button></Link>
          <Link to="trending" smooth={true} duration={1500} offset={-navbarHeight}><button>Trending</button></Link>
          <Link to="upcoming" smooth={true} duration={1500} offset={-navbarHeight}><button>Upcoming</button></Link>
          <select onChange={handleDropdownChange} className="dropdown-select">
            <option value="">Categories</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="sco">SCO</option>
          </select>
          <Link to="location-wise" smooth={true} duration={1500} offset={-navbarHeight}><button>Location Wise</button></Link>
        </div>

        <div className='right-panel'>
          <TfiHeadphoneAlt className='right-panel-icons'/>
          <a href="https://wa.me/919289252999" target="_blank" rel="noreferrer">
            <FaWhatsapp className='right-panel-icons'/>    
          </a>
          <div className='mob-nav-dropdown' onClick={toggleDropdown}>
            <AiOutlineMenu className='right-panel-icons'/>
          </div>
        </div>

        {isDropdownVisible && (
          <div className="mob-dropdown">
            <Link to="home" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleDropdown}><button>Home</button></Link>
            <Link to="trending" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleDropdown}><button>Trending</button></Link>
            <Link to="upcoming" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleDropdown}><button>Upcoming</button></Link>
            <select onChange={handleDropdownChange} className="dropdown-select1">
              <option value="">Categories</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="sco">SCO</option>
            </select>
            <Link to="location-wise" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleDropdown}><button>Location Wise</button></Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
