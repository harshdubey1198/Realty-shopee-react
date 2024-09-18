import React, { useState, useEffect } from 'react';
import logo from "../Images/Realty shopee main logo.png";
import '../App.css';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link as ScrollLink, scroller } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
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
      <div className='relative relative-2'>
        <div className='logo-div'>
          <a href='https://www.realtyshopee.com' target='_blank' rel='noopener noreferrer'>
            <img src={logo} alt='Realty Shopee' />
          </a>
        </div>

        <div className='navigators'>
          <ScrollLink to="home" smooth={true} duration={1500} offset={-navbarHeight}>Home</ScrollLink>
          <ScrollLink to="trending" smooth={true} duration={1500} offset={-navbarHeight}>Trending</ScrollLink>
          <ScrollLink to="upcoming" smooth={true} duration={1500} offset={-navbarHeight}>Upcoming</ScrollLink>
          <select onChange={handleDropdownChange} className="dropdown-select">
            <option value="">Properties</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="sco">SCO</option>
            <option value="highlighted">Highlighted</option>
          </select>
          <ScrollLink to="location-wise" smooth={true} duration={1500} offset={-navbarHeight}>Location Wise</ScrollLink>
          <Link to="/blogs">Blogs</Link>
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
              <option value="">Properties</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="sco">SCO</option>
              <option value="highlighted">Highlighted</option>
            </select>
            <Link to="/blogs" onClick={toggleMobileDropdown}><button>Blogs</button></Link>
            <ScrollLink to="location-wise" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>Location Wise</button></ScrollLink>
            <ScrollLink to="contact-us" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown}><button>About Us</button></ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
