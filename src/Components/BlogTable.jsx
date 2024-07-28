import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';

const BlogTable = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:10/blogs')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blogs!', error);
            });
    }, []);

    const handleDelete = async (blogTitle) => {
        try {
            await axios.delete(`http://localhost:10/blogs/${blogTitle}`);
            setBlogs(blogs.filter(blog => blog.title !== blogTitle));
        } catch (error) {
            console.error('There was an error deleting the blog!', error);
        }
    };

    return (
        <div className='blog-table'>
            <h1>Blog List</h1>
            <Link to="/add-blogs">Create New Blog</Link>
            <table className='blog-table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        {/* <th>Description</th> */}
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog._id}>
                            <td>{blog.title.slice(0,45)}</td>
                            <td>{blog.category}</td>
                            <td>{blog.tags}</td>
                            <td>
                            <button onClick={() => navigate(`/edit-blogs/${encodeURIComponent(blog.title)}`)}>Edit</button>
                            <button onClick={() => handleDelete(blog.title)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogTable;
