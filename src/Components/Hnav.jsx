// import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import { AiOutlineMenu } from "react-icons/ai";
// import { useNavigate } from 'react-router-dom';
// import { TfiHeadphoneAlt } from "react-icons/tfi";
// import logo from "../Images/Realty shopee main logo.png";
// import menIcon from "../Images/Icons/man.png";
// import womenIcon from "../Images/Icons/woman.png";
// import '../App.css';

// const HNav = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState(null);

//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     setUsername(storedUsername);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('username');
//     setUsername(null);
//     navigate('/login');
//     fetch('https://realty-react-backend.onrender.com/logout', {
//       method: 'POST',
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.message);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   const [currentIcon, setCurrentIcon] = useState(womenIcon);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIcon(prevIcon => (prevIcon === womenIcon ? menIcon : womenIcon));
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const navbarHeight = 60;
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const toggleMobileDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <nav className="fixed w-full z-10 bg-white shadow-lg">
//       <div className="relative flex justify-between items-center px-4 py-2">
//         <div className="logo-div">
//           <a href="https://www.realtyshopee.com" target="_blank" rel="noopener noreferrer">
//             <img src={logo} alt="Realty Shopee" className="h-10" />
//           </a>
//         </div>

//         <div className="hidden md:flex space-x-4 overflow-x-auto">
//           <ScrollLink to="keyFeaturesAndAmenities" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Key Features</ScrollLink>
//           <ScrollLink to="location"                smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Location</ScrollLink>
//           <ScrollLink to="advantages"              smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Advantages</ScrollLink>
//           <ScrollLink to="connectivity"            smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Connectivity</ScrollLink>
//           <ScrollLink to="nearbyAmenities"         smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Nearby Amenities</ScrollLink>
//           <ScrollLink to="bhkDetails"              smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">BHK Details</ScrollLink>
//           <ScrollLink to="developerInfo"           smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Developer Info</ScrollLink>
//           <ScrollLink to="carousel"                smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Carousel</ScrollLink>
//         </div>

//         <div className="flex items-center">
//           <TfiHeadphoneAlt className="text-xl mr-4" />
//           <div className="relative group">
//             <img src={currentIcon} alt="User Icon" className="h-8 w-8" />
//             <div className="auth-dropdown absolute right-0 mt-2 bg-white shadow-md rounded-lg hidden group-hover:block">
//               <span className="block px-4 py-2 text-sm">{username ? `Welcome, ${username}` : "Guest"}</span>
//               <button onClick={() => navigate('/allproperties')} className="block w-full text-left px-4 py-2 text-sm">All Properties</button>
//               <button onClick={() => navigate('/contactus')} className="block w-full text-left px-4 py-2 text-sm">Contact Us</button>
//               {username ? (
//                 <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm">Logout</button>
//               ) : (
//                 <button onClick={() => navigate('/login')} className="block w-full text-left px-4 py-2 text-sm">Login / Signup</button>
//               )}
//             </div>
//           </div>
//           <AiOutlineMenu className="text-xl ml-4 cursor-pointer md:hidden" onClick={toggleMobileDropdown} />
//         </div>
//       </div>

//       {isDropdownVisible && (
//         <div className="md:hidden flex flex-col items-start bg-white px-4 py-2 shadow-lg">
//           <ScrollLink to="keyFeaturesAndAmenities" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown} className="block w-full py-1">Key Features</ScrollLink>
//           <ScrollLink to="location" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown} className="block w-full py-1">Location</ScrollLink>
//           <ScrollLink to="advantages" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown} className="block w-full py-1">Advantages</ScrollLink>
//           <ScrollLink to="connectivity" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown} className="block w-full py-1">Connectivity</ScrollLink>
//           <ScrollLink to="nearbyAmenities" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown} className="block w-full py-1">Nearby Amenities</ScrollLink>
//           <ScrollLink to="bhkDetails" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown} className="block w-full py-1">BHK Details</ScrollLink>
//           <ScrollLink to="developerInfo" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown} className="block w-full py-1">Developer Info</ScrollLink>
//           <ScrollLink to="carousel" smooth={true} duration={1500} offset={-navbarHeight} onClick={toggleMobileDropdown} className="block w-full py-1">Carousel</ScrollLink>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default HNav;
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-10 bg-white shadow-lg">
      <div className="relative flex justify-between items-center px-4 py-2">
        <div className="logo-div">
          <a href="https://www.realtyshopee.com" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Realty Shopee" className="h-10" />
          </a>
        </div>

        <div className="hidden md:flex space-x-4 overflow-x-auto">
        <button onClick={scrollToTop}                                                                   className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Home</button>
          {/* <ScrollLink to="keyFeaturesAndAmenities" smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Key Features</ScrollLink> */}
          <ScrollLink to="location"                smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Location</ScrollLink>
          <ScrollLink to="advantages"              smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Advantages</ScrollLink>
          <ScrollLink to="connectivity"            smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Connectivity</ScrollLink>
          <ScrollLink to="nearbyAmenities"         smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Nearby Amenities</ScrollLink>
          {/* <ScrollLink to="bhkDetails"              smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">BHK Details</ScrollLink> */}
          {/* <ScrollLink to="developerInfo"           smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Developer Info</ScrollLink> */}
          <ScrollLink to="carousel"                smooth={true} duration={1500} offset={-navbarHeight} className="navbar-link cursor-pointer text-gray-200 px-1 py-2 rounded-md bg-slate-700">Gallery</ScrollLink>
        </div>

        <div className="flex items-center">
          <TfiHeadphoneAlt className="text-xl mr-4" />
          <div className="relative group">
            <img src={currentIcon} alt="User Icon" className="h-8 w-8" />
            <div className="auth-dropdown absolute right-0 mt-2 bg-white shadow-md rounded-lg hidden group-hover:block">
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
          <AiOutlineMenu className="text-xl ml-4 cursor-pointer md:hidden" onClick={toggleMobileDropdown} />
        </div>
      </div>

      {isDropdownVisible && (
        <div className="md:hidden flex flex-col items-start bg-white px-4 py-2 shadow-lg">
          <select onChange={toggleMobileDropdown} className="block w-full py-1">
            <option value="" disabled selected>Select an option</option>
            <option value="keyFeaturesAndAmenities">Key Features</option>
            <option value="location">Location</option>
            <option value="advantages">Advantages</option>
            <option value="connectivity">Connectivity</option>
            <option value="nearbyAmenities">Nearby Amenities</option>
            <option value="bhkDetails">BHK Details</option>
            <option value="developerInfo">Developer Info</option>
            <option value="carousel">Carousel</option>
          </select>
        </div>
      )}
    </nav>
  );
}

export default HNav;
