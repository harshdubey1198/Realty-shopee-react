import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';
import logo from "../Images/Realty shopee main logo.png";
import "../App.css";
import { FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../Components/ScrollToTop';
import Loader from 'react-loaders';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  // const navigate = useNavigate();
  const loader = <Loader type="ball-pulse-sync" />;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:10/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // const handleHomeClick = () => {
  //   navigate('/');
  // };

  // const handleContactUsClick = () => {
  //   navigate("/contactus");
  // };

  return (
    <div className='blogs-main'>
      <ScrollToTop/>
      <Helmet>
        <link rel="canonical" href={`https://www.realtyshopee.com/blogs`} />
        <title>Realty Shopee Blogs: Expert Real Estate Insights in Gurgaon</title>
        <link rel="icon" href="https://res.cloudinary.com/dgplzytrq/image/upload/v1720260452/Builders/r_logo_pz8qnp.png" />
      </Helmet>
      <header className='pd-nav blue-nav'>
        <h2><a href="https://www.realtyshopee.com" className='r-logo'><img src={logo} className='pd-logo' alt="realty shopee" /></a></h2>
        <a href='/' target="_blank"><span>Home</span><span><FcHome/></span></a>
        <a href='/contactus' target="_blank"><span>Contact Us</span><span><FcQuestions/></span></a>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone'/></span></a>
      </header>
      <div className="blog-list bt-60">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : ( 
          <div className='loading'>
            <span className='bls'>Blogs Loading Soon</span> {loader}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
