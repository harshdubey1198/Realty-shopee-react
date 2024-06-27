import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import logo from "../Images/Realty shopee main logo.png";
import { FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const AddBlogs = ({ auth }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [featureImage, setFeatureImage] = useState('');
  const [descriptionImages, setDescriptionImages] = useState([]);
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('BlogUsername');
    if (!auth || !storedUsername) {
      navigate('/login-add-blogs');
    }
  }, [auth, navigate]);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://realty-react-backend.onrender.com/add-blogs', {
        title,
        description,
        featureImage,
        descriptionImages: JSON.stringify(descriptionImages),
        category,
        tags
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

  const handleFeatureImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFeatureImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDescriptionImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setDescriptionImages(prevImages => [...prevImages, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="add-blog-container">
      <header className='pd-nav blue-nav'>
        <h2><img src={logo} className='pd-logo' alt="realty shopee" /></h2>
        <button onClick={handleHomeClick}><span>Home</span><span><FcHome/></span></button>
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
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Feature Image:</label>
          <input type="file" onChange={handleFeatureImageChange} />
        </div>
        <div>
          <label>Images in Description:</label>
          <input type="file" multiple onChange={handleDescriptionImageChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label>Tags:</label>
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlogs;
