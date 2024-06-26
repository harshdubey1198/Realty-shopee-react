import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';
import logo from "../Images/Realty shopee main logo.png";
import "../App.css";
import { FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../Components/ScrollToTop';
import Loader from 'react-loaders'

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  let loader = <Loader type="ball-pulse-sync" />

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://realty-react-backend.onrender.com/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate("/contactus");
  };

  return (
    <div className='blogs-main'>
      <ScrollToTop/>
      <Helmet>
        <link rel="canonical" href={`https://www.realtyshopee.com/blogs`} />
        <title>Blogs - Realty Shopee</title>
        <link rel="icon" href="https://www.realtyshopee.com/agent.png" />
      </Helmet>
      <header className='pd-nav blue-nav'>
        <h2><img src={logo} className='pd-logo' alt="realty shopee" /></h2>
        <button onClick={handleHomeClick}><span>Home</span><span><FcHome/></span></button>
        <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions/></span></button>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone'/></span></a>
      </header>
      <div className="blog-list">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : ( 
          <p>Blogs Loading Soon  {loader}</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
 