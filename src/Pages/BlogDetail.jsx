import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../blogData.json';

function BlogDetail() {
  const { blogTitle } = useParams();
  const blog = blogData.find(blog => blog.title.replace(/\s+/g, '-').toLowerCase() === blogTitle);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <img src={blog.bannerImage} alt={blog.title} className="blog-banner" />
      <div className="blog-content">
        <p>{blog.intro}</p>
        <p>{blog.mainSummary}</p>
        <p>{blog.conclusion}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
