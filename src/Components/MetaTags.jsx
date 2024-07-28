// MetaTags.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const metaTagsConfig = {
  '/': {
    title: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee',
    description: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.',
    url: 'https://realtyshopee.com/',
    image: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png',
    canonical: 'https://www.realtyshopee.com/',
    additionalMetaTags: [
      { name: 'canonical', content: 'https://realtyshopee.com/' },
      { property: 'og:site_name', content: 'Realty Shopee' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee' },
      { property: 'og:description', content: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.' },
      { property: 'og:url', content: 'https://realtyshopee.com/' },
      { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'Realty Shopee' },
      { name: 'twitter:title', content: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee' },
      { name: 'twitter:description', content: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.' },
      { name: 'twitter:url', content: 'https://realtyshopee.com/' },
      { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png' }
    ]
  },
  // Add other routes...
};

const MetaTags = () => {
  const location = useLocation();
  const metaTags = metaTagsConfig[location.pathname] || {};

  return (
    <Helmet>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <link rel="canonical" href={metaTags.canonical} />

      {metaTags.additionalMetaTags &&
        metaTags.additionalMetaTags.map((tag, index) => {
          if (tag.property) {
            return <meta key={index} property={tag.property} content={tag.content} />;
          } else if (tag.name) {
            return <meta key={index} name={tag.name} content={tag.content} />;
          }
          return null;
        })}
    </Helmet>
  );
};

export default MetaTags;
