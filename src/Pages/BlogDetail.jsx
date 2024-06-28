import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FcDocument, FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import Loader from 'react-loaders';

function BlogDetail() {
  const navigate = useNavigate();
  const { blogTitle } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBackToBlogs = () => {
    navigate('/blogs');
  }

  let loader = <Loader type="ball-pulse-sync" />

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

  const handleAllBlogs = () => {
    navigate('/blogs');
  }
  const handleContactUsClick = () => {
    navigate('/blogs');
  }
  const handleHomeClick = () => {
    navigate('/blogs');
  }
 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blog.descriptionImages.length) % blog.descriptionImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blog.descriptionImages.length);
  };

  if (loading) {
    return (
      <div className='blogloading'>
        <header className='pd-nav'>
           <h2><img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' /></h2>
            <button onClick={handleHomeClick}><span>Home</span><span><FcHome /></span></button>
            <button onClick={handleAllBlogs}><span>Blogs</span><span><FcDocument /></span></button>
            <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions /></span></button>
            <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone' /></span></a>
        </header>
        <span>Loading Blog</span> {loader}
      </div>
    );
  }

  if (error) {
    return (
      <div className='blognf'>
        <header className='pd-nav'>
          <h2><img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' /></h2>
          <button onClick={handleHomeClick}><span>Home</span><span><FcHome /></span></button>
          <button onClick={handleAllBlogs}><span>Blogs</span><span><FcDocument /></span></button>
          <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions /></span></button>
          <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone' /></span></a>
        </header>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Not Found"
          className="not-found-image"
        />
        <span onClick={handleBackToBlogs}>{error}</span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className='blognf'>
        <header className='pd-nav'>
          <h2><img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' /></h2>
          <button onClick={handleHomeClick}><span>Home</span><span><FcHome /></span></button>
          <button onClick={handleAllBlogs}><span>Blogs</span><span><FcDocument /></span></button>
          <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions /></span></button>
          <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone' /></span></a>
        </header>
        <h1>Blog not found </h1>
      </div>
    );
  }

  const parseText = (text) => {
    // Parse for <b> tags
    text = text.replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>');
    
    // Parse for <a> tags
    text = text.replace(/<a href="(.*?)"(.*?)>(.*?)<\/a>/g, '<a href="$1"$2 style="color: darkblue; font-weight: bold;">$3</a>');
    
    return text;
  };

  const renderContent = () => {
    return JSON.parse(blog.description).map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return <p key={index} dangerouslySetInnerHTML={{ __html: parseText(item.content) }} />;
        case 'h2':
          return <h2 key={index}>{item.content}</h2>;
        case 'h3':
          return <h3 key={index}>{item.content}</h3>;
        case 'h4':
          return <h4 key={index}>{item.content}</h4>;
        case 'link':
          return <a key={index} href={item.content} target="_blank" rel="noopener noreferrer">{parseText(item.content)}</a>;
        case 'list':
          return (
            <ul key={index}>
              {item.items.map((li, liIndex) => (
                <li key={liIndex}>{parseText(li)}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="blog-detail">
      <header className='pd-nav'>
        <h2><img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' /></h2>
        <button onClick={handleHomeClick}><span>Home</span><span><FcHome /></span></button>
        <button onClick={handleAllBlogs}><span>Blogs</span><span><FcDocument /></span></button>
        <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions /></span></button>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone' /></span></a>
      </header>
      <div className='blog-div'>
        <h1>{blog.title}</h1>
        <img src={blog.featureImage} alt={blog.title} className="blog-d-banner" />
        <div className="blog-content">
          {renderContent()}
          <p><b>Category:</b> {blog.category}</p>
          <p><b>Tags:</b> {blog.tags.join(', ')}</p>
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
