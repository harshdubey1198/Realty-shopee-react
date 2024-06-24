import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';
import logo from "../Images/Realty shopee main logo.png";
import blogData from '../blogData.json';
import "../App.css"
import { FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import { Helmet } from 'react-helmet';

function Blogs() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate("/contactus");
  };

  return (
    <div className='blogs-main'>
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
        {blogData.map(blog => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
