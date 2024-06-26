import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FcHome, FcPhone, FcQuestions } from 'react-icons/fc';

function BlogDetail({ handleHomeClick, handleContactUsClick }) {
  const { blogTitle } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://realty-react-backend.onrender.com/blogs/${blogTitle}`);
        setBlog(response.data);
      } catch (error) {
        setError('Blog not found');
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogTitle]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blog.descriptionImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blog.descriptionImages.length) % blog.descriptionImages.length);
  };

  return (
    <div className="blog-detail">
      <header className='pd-nav'>
        <h2><img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' /></h2>
        <button onClick={handleHomeClick}><span>Home</span><span><FcHome /></span></button>
        <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions /></span></button>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone' /></span></a>
      </header>
      <div className='blog-div'>
        <h1>{blog.title}</h1>
        <img src={blog.featureImage} alt={blog.title} className="blog-banner" />
        <div className="blog-content">
          <p>{blog.description}</p>
          <p>Category: {blog.category}</p>
          <p>Tags: {blog.tags.join(', ')}</p>
          <div className='description-i-div'>
            <button onClick={handlePrev} className='prev-button'>Previous</button>
            {blog.descriptionImages && blog.descriptionImages.length > 0 && (
              <img
                src={blog.descriptionImages[currentIndex]}
                alt={`Description ${currentIndex}`}
                className='description-img'
              />
            )}
            <button onClick={handleNext} className='next-button'>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
