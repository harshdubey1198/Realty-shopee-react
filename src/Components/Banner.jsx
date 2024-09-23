import React, { useState, useEffect } from 'react';
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import heroImage from "../Images/ProjectImages/M3M-Altitude/M3M-Altitude-image-1.webp";
import projectsData from '../realtyshopee.json';
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
    navigate(`/property/${projectName}`);
  };

  return (
    <section className="relative w-full h-screen bg-black">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
        <source src="https://res.cloudinary.com/harshdubey1198/video/upload/v1726676420/134112-540p_squwdj.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative flex flex-col lg:flex-row justify-center items-center h-full p-8 text-white">
        <div className="flex flex-col items-start space-y-4 z-10 pl-5 lg:w-2/3">
          <div className="text-5xl font-bold">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover <br />
              Most Suitable <br />
              Property In Gurgaon
            </motion.h1>
          </div>
          <div className="text-xl text-gray-300">
            <p>Find the best luxury property in Gurgaon that suits you very easily</p>
            <p>And forget all the difficulties in finding a residence.</p>
          </div>

          <div className="relative flex items-center space-x-4">
            <HiLocationMarker className='text-blue-500' size={25} />
            <input
              type="text"
              placeholder="Search For Properties"
              className="p-3 bg-white text-black rounded-md focus:outline-none w-64"
              value={query}
              onChange={handleInputChange}
            />
            {filteredProjects.length > 0 && (
              <div className="absolute top-full left-0 mt-1 bg-white w-64 shadow-lg rounded-md">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(project.projectName)}
                  >
                    {project.projectName}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex space-x-8 mt-8">
            <div className="text-center">
              <CountUp start={4750} end={4900} duration={4} className="text-4xl font-semibold" /> 
              <p className="text-lg text-gray-300">Properties Sold</p>
            </div>
            <div className="text-center">
              <CountUp start={1650} end={1800} duration={4} className="text-4xl font-semibold" />
              <p className="text-lg text-gray-300">Happy Customer</p>
            </div>
            <div className="text-center">
              <CountUp end={28} className="text-4xl font-semibold" />
              <p className="text-lg text-gray-300">Awards Winning</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 lg:w-1/2 hidden lg:block">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={heroImage} alt="houses" className="rounded-lg shadow-lg" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
