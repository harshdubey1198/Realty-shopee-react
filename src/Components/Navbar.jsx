import React, { useState, useEffect } from 'react';
import logo from "../Images/Realty shopee main logo.png";
import '../App.css';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link, scroller } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import menIcon from "../Images/Icons/man.png";
import womenIcon from "../Images/Icons/woman.png";

function Navbar() {
  const navigate = useNavigate();
  const handleAddProject = () => {
    const username = localStorage.getItem('username');
    if (username) {
      navigate('/addproperties');
    } else {
      navigate('/login');
    }
  };
  const [currentIcon, setCurrentIcon] = useState(womenIcon);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon === womenIcon ? menIcon : womenIcon));
    }, 2000);

    return () => clearInterval(interval); 
  }, []);

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

  const handleAuth = () => {
    navigate('/login');
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
          <button className='add-p-nav' onClick={handleAddProject}>Add Properties</button>
          <TfiHeadphoneAlt className='right-panel-icons'/>
          <div className='s-l'>
            <img src={currentIcon} alt="Icon" onClick={handleAuth} />
          </div>
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
