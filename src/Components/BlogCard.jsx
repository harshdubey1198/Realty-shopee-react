import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.bannerImage} alt={blog.title} className="blog-banner" />
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <Link to={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}`}>Read More</Link>
    </div>
  );
}

export default BlogCard;
