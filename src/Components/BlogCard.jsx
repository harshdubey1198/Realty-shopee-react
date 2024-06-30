import React from 'react';
import { Link } from 'react-router-dom';
import truncate from 'html-truncate';

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
    const truncated = truncate(content, maxWords * 7); // Approximate word length with some buffer
    return truncated.length < content.length ? truncated + '...' : truncated;
  };

  const truncatedTitle = truncateContent(blog.title, 15);
  const { firstParagraph } = getFirstHeadingAndParagraph(JSON.parse(blog.description));
  const truncatedParagraph = truncateContent(firstParagraph, 30);

  return (
    <div className="blog-card">
      <img src={blog.featureImage} alt={blog.title} className="blog-banner" />
      <h5>{truncatedTitle}</h5>
      <p dangerouslySetInnerHTML={{ __html: truncatedParagraph }}></p>
      <Link to={`/blog/${encodeURIComponent(blog.title)}`} className='blog-opener'>Read More</Link>
    </div>
  );
}

export default BlogCard;
