import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  const truncateDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="blog-card">
      <img src={blog.featureImage} alt={blog.title} className="blog-banner" />
      <h2>{blog.title}</h2>
      <p>{truncateDescription(blog.description, 12)}</p>
      <Link to={`/blog/${blog.title}`}>Read More</Link>
    </div>
  );
}

export default BlogCard;
