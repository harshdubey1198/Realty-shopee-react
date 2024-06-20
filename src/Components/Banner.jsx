import React, { useState, useEffect } from 'react';
import '../App.css';
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import heroImage from "../Images/ProjectImages/M3M-Altitude/M3M-Altitude-image-1.webp";
import projectsData from '../data100acress.json';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [query, setQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      const results = projectsData.data.filter(project =>
        project.projectName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProjects(results);
    } else {
      setFilteredProjects([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (projectName) => {
    setQuery('');
    navigate(`/projects/${projectName}`);
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover <br />
              Most Suitable
              <br /> Property In Gurgaon
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find the best property in Gurgaon that suits you very easily </span>
            <span> And forget all the difficulties in finding a residence for you.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker className='blue' size={25} />
            <input
              type="text"
              placeholder='Search For Properties'
              value={query}
              onChange={handleInputChange}
            />
            {/* <button className="button" onClick={() => handleSuggestionClick(query)}>Search</button> */}
            {filteredProjects.length > 0 && (
              <div className="dropdown">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleSuggestionClick(project.projectName)}
                  >
                    {project.projectName}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={4750} end={4900} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Properties Sold</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1650} end={1800} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={heroImage} alt="houses" loading='lazy' />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
