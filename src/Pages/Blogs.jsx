import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';
import logo from "../Images/Realty shopee main logo.png";
import blogData from '../blogData.json';
import "../App.css"
import { FcHome, FcPhone, FcQuestions } from 'react-icons/fc';

function Blogs() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate("/contactus");
  };

  return (
    <div>
      <header className='pd-nav'>
        <h2><a href='https://www.realtyshopee.com' target='_blank' rel='noopener noreferrer' className='b-nav-logo'><img src={logo} className='pd-logo' alt='Realty Shopee' /></a></h2>
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
