import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import logo from "../Images/Realty shopee main logo.png";
import { FcDocument, FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const AddBlogs = ({ auth }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState([]);
  const [featureImage, setFeatureImage] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [meta_Title, setMetaTitle] = useState('');
  const [meta_Description, setMetaDescription] = useState('');
  const [url, setUrl] = useState('');
  const [canonical, setCanonical] = useState('');
  const [ogSiteName, setOgSiteName] = useState('Realty Shopee');
  const [ogType, setOgType] = useState('blog');
  const [ogTitle, setOgTitle] = useState('');
  const [ogDescription, setOgDescription] = useState('');
  const [ogImage, setOgImage] = useState('');
  const [twitterCard, setTwitterCard] = useState('');
  const [twitterSite, setTwitterSite] = useState('Realty Shopee');
  const [twitterType, setTwitterType] = useState('blog');
  const [twitterTitle, setTwitterTitle] = useState('');
  const [twitterDescription, setTwitterDescription] = useState('');
  const [twitterImage, setTwitterImage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('BlogUsername');
    if (!storedUsername) {
      navigate('/login-add-blogs');
    }
  }, [navigate]);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAllBlogs = () => {
    navigate('/blogs');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };

  const handleEditBlogs = () => {
    navigate('/edit-blogs');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://realty-react-backend.onrender.com/add-blogs', {
        title,
        description: JSON.stringify(description),
        featureImage,
        category,
        tags,
        meta_title: meta_Title || title, 
        meta_description: meta_Description || getDescriptionSummary(),
        meta_url: generateMetaURL(title),
        canonical: canonical,
        og_site_name: ogSiteName,
        og_type: ogType,
        og_title: ogTitle || title,
        og_description: ogDescription || getDescriptionSummary(),
        og_url: url || generateMetaURL(title),
        og_image: ogImage || featureImage,
        twitter_card: twitterCard || 'summary_large_image',
        twitter_site: twitterSite,
        twitter_type: twitterType,
        twitter_title: twitterTitle || title,
        twitter_description: twitterDescription || getDescriptionSummary(),
        twitter_image: twitterImage || featureImage
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading blog:', error);
    }
  };

  const getDescriptionSummary = () => {
    return description.map(item => item.content).join(' ').slice(0, 160);
  };

  const generateMetaURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const handleFeatureImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFeatureImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...description];
    list[index][name] = value;
    setDescription(list);
  };

  const handleAddInput = () => {
    setDescription([...description, { type: 'paragraph', content: '' }]);
  };

  const handleRemoveInput = (index) => {
    const list = [...description];
    list.splice(index, 1);
    setDescription(list);
  };

  const handleTypeChange = (e, index) => {
    const { value } = e.target;
    const list = [...description];
    list[index].type = value;
    setDescription(list);
  };

  return (
    <div className="add-blog-container">
      <header className='pd-nav blue-nav'>
        <h2><a href="https://www.realtyshopee.com" className='r-logo'><img src={logo} className='pd-logo' alt="realty shopee" /></a></h2>
        <button onClick={handleHomeClick}><span>Home</span><span><FcHome/></span></button>
        <button onClick={handleAllBlogs}><span>Blogs</span><span><FcDocument/></span></button>
        <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions/></span></button>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone'/></span></a>
      </header>
      <h2>Add Your Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          {description.map((item, index) => (
            <div key={index} className='adding-description'>
              <select value={item.type} onChange={(e) => handleTypeChange(e, index)}>
                <option value="paragraph">Paragraph</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
                <option value="h4">Heading 4</option>
                <option value="link">Link</option>
                <option value="list">Unordered List</option>
                <option value="list-item">List Item</option>
              </select>
              {item.type === 'link' ? (
                <input
                  type="text"
                  name="content"
                  value={item.content}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Enter URL"
                />
              ) : (
                <textarea name="content" value={item.content} onChange={(e) => handleInputChange(e, index)} />
              )}
              <button type="button" className='btn-red' onClick={() => handleRemoveInput(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddInput}>Add Section</button>
        </div>
        <div>
          <label>Feature Image:</label>
          <input type="file" onChange={handleFeatureImageChange} />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="sco">SCO</option>
          </select>
        </div>
        <div>
          <label>Tags:</label>
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
        </div>
        <div>
          <label>Meta Title:</label>
          <input type="text" value={meta_Title} onChange={(e) => setMetaTitle(e.target.value)} />
        </div>
        <div>
          <label>Meta Description:</label>
          <input value={meta_Description} onChange={(e) => setMetaDescription(e.target.value)} />
        </div>
        <div>
          <label>Meta URL:</label>
          <input type="text" value={generateMetaURL(title)} readOnly />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Canonical:</label>
          <input
            type="text"
            value={canonical}
            onChange={(e) => setCanonical(e.target.value)}
          />
        </div>
        <div>
          <label>og:site_name:</label>
          <input
            type="text"
            value={ogSiteName}
            onChange={(e) => setOgSiteName(e.target.value)}
          />
        </div>
        <div>
          <label>og:type:</label>
          <input
            type="text"
            value={ogType}
            onChange={(e) => setOgType(e.target.value)}
          />
        </div>
        <div>
          <label>og:title:</label>
          <input
            type="text"
            value={ogTitle}
            onChange={(e) => setOgTitle(e.target.value)}
          />
        </div>
        <div>
          <label>og:description:</label>
          <input
            type="text"
            value={ogDescription}
            onChange={(e) => setOgDescription(e.target.value)}
          />
        </div>
        <div>
          <label>og:image:</label>
          <input
            type="text"
            value={ogImage}
            onChange={(e) => setOgImage(e.target.value)}
          />
        </div>
        <div>
          <label>twitter:card:</label>
          <input
            type="text"
            value={twitterCard}
            onChange={(e) => setTwitterCard(e.target.value)}
          />
        </div>
        <div>
          <label>twitter:site:</label>
          <input
            type="text"
            value={twitterSite}
            onChange={(e) => setTwitterSite(e.target.value)}
          />
        </div>
        <div>
          <label>twitter:type:</label>
          <input
            type="text"
            value={twitterType}
            onChange={(e) => setTwitterType(e.target.value)}
          />
        </div>
        <div>
          <label>twitter:title:</label>
          <input
            type="text"
            value={twitterTitle}
            onChange={(e) => setTwitterTitle(e.target.value)}
          />
        </div>
        <div>
          <label>twitter:description:</label>
          <input
            type="text"
            value={twitterDescription}
            onChange={(e) => setTwitterDescription(e.target.value)}
          />
        </div>
        <div>
          <label>twitter:image:</label>
          <input
            type="text"
            value={twitterImage}
            onChange={(e) => setTwitterImage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={handleEditBlogs}>Edit Blogs </button>

      </form>
    </div>
  );
};

export default AddBlogs;
