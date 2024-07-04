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
  // const [meta_URL, setMetaURL] = useState('');
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
        meta_title: meta_Title || title, // Use meta_Title if set, otherwise fall back to title
        meta_description: meta_Description || getDescriptionSummary(), // Use meta_Description if set, otherwise generate from description
        meta_url: generateMetaURL(title) // Generate meta_URL dynamically
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
    // Generate summary from description content
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
              </select>
              {item.type !== 'link' ? (
                <textarea name="content" value={item.content} onChange={(e) => handleInputChange(e, index)} />
              ) : (
                <input type="text" name="content" value={item.content} onChange={(e) => handleInputChange(e, index)} placeholder="Enter URL" />
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
        <button type="submit">Add Blog</button>
        <button onClick={handleEditBlogs}>Edit Blogs </button>
      </form>
    </div>
  );
};

export default AddBlogs;
