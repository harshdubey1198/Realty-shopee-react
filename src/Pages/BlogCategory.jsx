import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../Components/BlogCard';
import logo from "../Images/Realty shopee main logo.png";
import "../App.css";
import { FcDocument, FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../Components/ScrollToTop';
import Loader from 'react-loaders';

const BlogCategory = ({ category, title, heading, description }) => {
  const [blogs, setBlogs] = useState([]);
  const loader = <Loader type="ball-pulse-sync" />;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`https://realty-react-backend.onrender.com/blogs/category/${category}`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [category]);

  return (
    <div className='blogs-main'>
      <ScrollToTop/>
      <Helmet>
        <link rel="canonical" href={`https://www.realtyshopee.com/${category}-blogs`} />
        <title>{title}</title>
        <link rel="icon" href="https://res.cloudinary.com/dgplzytrq/image/upload/v1720260452/Builders/r_logo_pz8qnp.png" />
      </Helmet>
      <header className='pd-nav blue-nav'>
        <h2><a href="https://www.realtyshopee.com" className='r-logo'><img src={logo} className='pd-logo' alt="realty shopee" /></a></h2>
        <a href='/' target="_blank"><span>Home</span><span><FcHome/></span></a>
        <a href='/blogs' ><span>Blogs</span> <span><FcDocument/></span></a>
        <a href='/contactus' target="_blank"><span>Contact Us</span><span><FcQuestions/></span></a>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone'/></span></a>
      </header>
      <div className="blog-category-header">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      <div className="blog-list">
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
};

export const ResidentialBlogs = () => (
  <BlogCategory 
    category="residential" 
    title="Residential Blogs - Realty Shopee" 
    heading="Residential Blogs" 
    description="Explore our comprehensive collection of residential real estate blogs. Stay informed with the latest trends, tips, and news in the residential real estate market." 
  />
);

export const CommercialBlogs = () => (
  <BlogCategory 
    category="commercial" 
    title="Commercial Blogs - Realty Shopee" 
    heading="Commercial Blogs" 
    description="Discover insights and updates on the commercial real estate sector. Our blogs provide valuable information on market trends, investment opportunities, and more." 
  />
);

export const ScoBlogs = () => (
  <BlogCategory 
    category="sco" 
    title="SCO Blogs - Realty Shopee" 
    heading="SCO Blogs" 
    description="Read the latest blogs on Shop-Cum-Office (SCO) properties. Find out about the benefits, challenges, and latest developments in the SCO real estate segment." 
  />
);

export default BlogCategory;
