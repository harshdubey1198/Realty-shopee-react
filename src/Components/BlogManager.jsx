import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FcDocument, FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import '../App.css';
import logo from "../Images/Realty shopee main logo.png";

const BlogManager = () => {
  const { metaUrl } = useParams();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState([]);
  const [featureImage, setFeatureImage] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [meta_url, setMetaUrl] = useState('');
  const [meta_title, setMetaTitle] = useState('');
  const [meta_description, setMetaDescription] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('BlogUsername');
    if (!storedUsername) {
      navigate('/login-add-blogs');
    } else {
      setAuth(true);
    }
  }, [navigate]);

  useEffect(() => {
    if (metaUrl) {
      setIsEditing(true);
      fetchBlogByMetaUrl(metaUrl);
    } else {
      fetchBlogs();
    }
  }, [metaUrl]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://realty-react-backend.onrender.com/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const fetchBlogByMetaUrl = async (metaUrl) => {
    try {
      const response = await axios.get(`https://realty-react-backend.onrender.com/blogs/meta_url/${metaUrl}`);
      setBlog(response.data);
      setTitle(response.data.title);
      setDescription(JSON.parse(response.data.description));
      setFeatureImage(response.data.featureImage);
      setCategory(response.data.category);
      setTags(response.data.tags.join(', '));
      setMetaUrl(response.data.meta_url);
      setMetaTitle(response.data.meta_title);
      setMetaDescription(response.data.meta_description);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    
    if (confirmDelete) {
      try {
        await axios.delete(`https://realty-react-backend/blogs/${id}`);
        setBlogs(blogs.filter(blog => blog._id !== id));
        console.log("Blog deleted successfully");
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const handleEditClick = (metaUrl) => {
    setIsEditing(true);
    fetchBlogByMetaUrl(metaUrl);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAllBlogs = () => {
    navigate('/blogs');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://realty-react-backend.onrender.com/blogs/${blog._id}`, {
        title,
        description: JSON.stringify(description),
        featureImage,
        category,
        tags,
        meta_url,
        meta_title,
        meta_description
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
      setIsEditing(false);
      fetchBlogs();
    } catch (error) {
      console.error('Error updating blog:', error);
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

  if (!auth) {
    return null;
  }

  return (
    <div className="blog-manager-container">
      <header className='pd-nav blue-nav'>
        <h2><img src={logo} className='pd-logo' alt="realty shopee" /></h2>
        <button onClick={handleHomeClick}><span>Home</span><span><FcHome/></span></button>
        <button onClick={handleAllBlogs}><span>Blogs</span><span><FcDocument/></span></button>
        <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions/></span></button>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone'/></span></a>
      </header>

      {!isEditing ? (
        <div className='blog-m-div'>
          <h1>Blog List</h1>
          <button onClick={() => navigate('/add-blogs')}>Create New Blog</button>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.category}</td>
                  <td>
                    <button onClick={() => handleEditClick(blog.meta_url)}>Edit</button>
                    <button onClick={() => handleDelete(blog._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='editor-section'>
          <h2>Edit Your Blog</h2>
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
                    <option value="bold">Bold</option>
                    <option value="ul">Unordered List</option>
                    <option value="li">List Item</option>
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
              <label>Meta URL:</label>
              <input type="text" value={meta_url} onChange={(e) => setMetaUrl(e.target.value)} required />
            </div>
            <div>
              <label>Meta Title:</label>
              <input type="text" value={meta_title} onChange={(e) => setMetaTitle(e.target.value)} required />
            </div>
            <div>
              <label>Meta Description:</label>
              <textarea value={meta_description} onChange={(e) => setMetaDescription(e.target.value)} required />
            </div>
            <div>
              <label>Category:</label>
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div>
              <label>Tags:</label>
              <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
            </div>
            <button type="submit" className='btn-update'>Update Blog</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
