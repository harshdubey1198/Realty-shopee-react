import React, { useState, useEffect } from 'react';
import logo from "../Images/Realty shopee main logo.png";
import '../App.css';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link as ScrollLink, scroller } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import menIcon from "../Images/Icons/man.png";
import womenIcon from "../Images/Icons/woman.png";

function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  const handleAddProject = () => {
    const username = localStorage.getItem('username');
    if (username) {
      navigate('/addproperties');
    } else {
      navigate('/login');
    }
  };

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
      setCurrentIcon((prevIcon) => (prevIcon === womenIcon ? menIcon : womenIcon));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
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
    <nav>
      <div className='relative'>
        <div className='logo-div'>
          <img src={logo} alt='Realty Shopee' />
        </div>

        <div className='navigators'>
          <ScrollLink to="home" smooth={true} duration={1500} offset={-navbarHeight}><button>Home</button></ScrollLink>
          <ScrollLink to="trending" smooth={true} duration={1500} offset={-navbarHeight}><button>Trending</button></ScrollLink>
          <ScrollLink to="upcoming" smooth={true} duration={1500} offset={-navbarHeight}><button>Upcoming</button></ScrollLink>
          <select onChange={handleDropdownChange} className="dropdown-select">
            <option value="">Categories</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="sco">SCO</option>
          </select>
          <ScrollLink to="location-wise" smooth={true} duration={1500} offset={-navbarHeight}><button>Location Wise</button></ScrollLink>
        </div>

        <div className='right-panel'>
          <button className='add-p-nav' onClick={handleAddProject}>Add Properties</button>
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
                <>
                  <button onClick={() => navigate('/login')}>Login / Signup</button>
                  <button onClick={() => navigate('/allproperties')}>All Properties</button>
                </>
              )}
            </div>
          </div>
          <div className='mob-nav-dropdown' onClick={toggleMobileDropdown}>
            <AiOutlineMenu className='right-panel-icons' />
          </div>
        </div>

        {isDropdownVisible && (
          <div className="mob-dropdown">
            <ScrollLink to="home" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Home</button></ScrollLink>
            <ScrollLink to="trending" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Trending</button></ScrollLink>
            <ScrollLink to="upcoming" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Upcoming</button></ScrollLink>
            <select onChange={handleDropdownChange} className="dropdown-select1">
              <option value="">Categories</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="sco">SCO</option>
            </select>
            <ScrollLink to="location-wise" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Location Wise</button></ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
