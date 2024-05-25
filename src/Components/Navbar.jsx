import React from 'react';
import logo from "../Images/Realty shopee main logo.png";
import '../App.css';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa6";
import { Link, scroller } from 'react-scroll';

function Navbar() {
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

  return (
    <nav>
      <div className='logo-div'>
        <img src={logo} alt='Realty Shopee' />
      </div>
      
      <div className='navigators'>
        <Link to="home"     smooth={true} duration={1500} offset={-navbarHeight}><button>Home</button></Link>
        <Link to="trending" smooth={true} duration={1500} offset={-navbarHeight}><button>Trending</button></Link>
        <Link to="upcoming" smooth={true} duration={1500} offset={-navbarHeight}><button>Upcoming</button></Link>
        <select onChange={handleDropdownChange} className="dropdown-select">
          <option value=""           > Categories</option>
          <option value="residential"> Residential</option>
          <option value="commercial" > Commercial</option>
          <option value="sco"        > SCO</option>
        </select>
        <Link to="featured" smooth={true} duration={1500} offset={-navbarHeight}     ><button>Featured</button></Link>
        <Link to="location-wise" smooth={true} duration={1500} offset={-navbarHeight}><button>Location Wise</button></Link>
      </div>

      <div className='right-panel'>
        <TfiHeadphoneAlt className='right-panel-icons'/>
        <a href="https://wa.me/919289252999" target="_blank" rel="noreferrer">
          <FaWhatsapp className='right-panel-icons'/>    
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
