import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
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
    const words = content.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return content;
  };

  const truncatedTitle = truncateContent(blog.title, 15);
  const { firstParagraph } = getFirstHeadingAndParagraph(JSON.parse(blog.description));

  return (
    <div className="blog-card">
      <img src={blog.featureImage} alt={blog.title} className="blog-banner" />
      <h5>{truncatedTitle}</h5>
      <p>{truncateContent(firstParagraph, 30)}</p>
      <Link to={`/blog/${encodeURIComponent(blog.title)}`} className='blog-opener'>Read More</Link>
    </div>
  );
}

export default BlogCard;
