import React from 'react';
import { Link } from 'react-router-dom';
import truncate from 'html-truncate';

function BlogCard({ blog }) {
  
  if (!blog) {
    return null; // or handle the case where blog is not defined
  }

  const getFirstHeadingAndParagraph = (description) => {
    let firstHeading = '';
    let firstParagraph = '';

    for (const section of description) {
      if (!firstHeading && section.type.startsWith('h')) {
        firstHeading = section.content;
      }
      if (!firstParagraph && section.type === 'paragraph') {
        firstParagraph = section.content;
      }
      if (firstHeading && firstParagraph) break;
    }
    return { firstHeading, firstParagraph };
  };

  const truncateContent = (content, maxWords) => {
    const truncated = truncate(content, maxWords * 7); // Approximate word length with some buffer
    return truncated.length < content.length ? truncated + '...' : truncated;
  };

  // Format the date
  const formattedDate = new Date(blog.createdAt).toISOString().split('T')[0];

  const truncatedTitle = truncateContent(blog.title, 15);
  const { firstParagraph } = getFirstHeadingAndParagraph(JSON.parse(blog.description));
  const truncatedParagraph = truncateContent(firstParagraph, 20);

  return (
    <div className="blog-card">
      <img src={blog.featureImage} alt={blog.title} className="blog-banner" />
      <h6>{truncatedTitle}</h6>
      <p className='text-smaller' dangerouslySetInnerHTML={{ __html: truncatedParagraph }}></p>
      <p className='fd'>{formattedDate}</p>
      <Link to={`/blog/${blog.meta_url}`} className='blog-opener'>Read More</Link> {/* Use blog.meta_url here */}
    </div>
  );
}

export default BlogCard;
