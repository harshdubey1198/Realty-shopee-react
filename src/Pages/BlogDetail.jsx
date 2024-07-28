import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FcDocument, FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import Loader from 'react-loaders';
import { Helmet } from 'react-helmet';

function BlogDetail() {
  const navigate = useNavigate();
  const { meta_url } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleBackToBlogs = () => {
    navigate('/blogs');
  };

  let loader = <Loader type="ball-pulse-sync" />;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://realty-react-backend.onrender.com/blogs/meta_url/${meta_url}`);
        setBlog(response.data);
      } catch (error) {
        setError('Blog not found');
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [meta_url]);

  useEffect(() => {
    if (blog) {
      document.title = blog.meta_title || blog.title;
      document.description= blog.meta_description || blog.description;
    }
  }, [blog]);

  const parseText = (text) => {
    // Parse for <b> tags
    text = text.replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>');

    // Parse for <a> tags
    text = text.replace(/<a href="(.*?)"(.*?)>(.*?)<\/a>/g, '<a href="$1"$2 style="color: darkblue; font-weight: bold;" target="_blank" rel="noopener noreferrer">$3</a>');

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

  const renderCategoryLink = (category) => {
    switch (category) {
      case 'residential':
        return <Link to="/residential-blogs" style={{ color: 'blue', textDecoration: 'underline' }}>Residential Properties</Link>;
      case 'commercial':
        return <Link to="/commercial-blogs" style={{ color: 'blue', textDecoration: 'underline' }}>Commercial Properties</Link>;
      case 'sco':
        return <Link to="/SCO-Plots-in-gurgaon" style={{ color: 'blue', textDecoration: 'underline' }}>SCO Properties</Link>;
      default:
        return category;
    }
  };

  if (loading) {
    return (
      <div className='blogloading'>
        <header className='pd-nav'>
          <h2>
            <img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' />
          </h2>
          <a href="/" target="_blank"><span>Home</span><span><FcHome /></span></a>
          <a href="/blogs" target="_blank"><span>Blogs</span><span><FcDocument /></span></a>
          <a href="/contact-us" target="_blank"><span>Contact Us</span><span><FcQuestions /></span></a>
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
          <h2>
            <img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' />
          </h2>
          <a href="/" target="_blank"><span>Home</span><span><FcHome /></span></a>
          <a href="/blogs" target="_blank"><span>Blogs</span><span><FcDocument /></span></a>
          <a href="/contact-us" target="_blank"><span>Contact Us</span><span><FcQuestions /></span></a>
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
          <h2>
            <img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' />
          </h2>
          <a href="/" target="_blank"><span>Home</span><span><FcHome /></span></a>
          <a href="/blogs" target="_blank"><span>Blogs</span><span><FcDocument /></span></a>
          <a href="/contact-us" target="_blank"><span>Contact Us</span><span><FcQuestions /></span></a>
          <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone' /></span></a>
        </header>
        <h1>Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <Helmet>
        <title>{blog.meta_title || blog.title}</title>
        <link rel="canonical" href={`https://www.realtyshopee.com/blog/${meta_url}`} />
        <meta name="description" content={blog.meta_description || blog.description} />
        <meta name="keywords" content={(blog.meta_keywords || []).join(', ')} />
      </Helmet>
      <header className='pd-nav'>
        <h2><Link to="https://www.realtyshopee.com" className='r-logo'><img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' /></Link></h2>
        <a href="/" target="_blank"><span>Home</span><span><FcHome /></span></a>
        <a href="/blogs" target="_blank"><span>Blogs</span><span><FcDocument /></span></a>
        <a href="/contact-us" target="_blank"><span>Contact Us</span><span><FcQuestions /></span></a>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone' /></span></a>
      </header>
      <div className='blog-div'>
        <h1>{blog.title}</h1>
        <img src={blog.featureImage} alt={blog.title} className="blog-d-banner" />
        <div className="blog-content">
          {renderContent()}
          <p><b>Category:</b> {renderCategoryLink(blog.category)}</p>
          <p><b>Tags:</b> {blog.tags.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
