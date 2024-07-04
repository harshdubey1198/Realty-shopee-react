import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const metaTagsConfig = {
  "/": {
    title: "Discover the Best Luxury Property in Gurgaon with Realty Shopee",
    description: "Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.",
    url: "https://realtyshopee.com/",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png",
    additionalMetaTags:[
        { name: 'canonical', content: 'https://realtyshopee.com/' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee' },
        { property: 'og:description', content: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.' },
        { property: 'og:url', content: 'https://realtyshopee.com/' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee' },
        { name: 'twitter:description', content: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.' },
        { name: 'twitter:url', content: 'https://realtyshopee.com/' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png' }
    ]
    },
  "/residential-property-in-gurgaon": {
    title: "New Residential Property in Gurgaon for Sale By Realty Shopee",
    description: "Find the cheapest & new residential property in Gurgaon with Realty Shopee. Explore upcoming, and ready-to-move residential property options in prime locations.",
    url: "https://www.realtyshopee.com/residential-property-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/residential-property-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'New Residential Property in Gurgaon for Sale By Realty Shopee' },
        { property: 'og:description', content: 'Find the cheapest & new residential property in Gurgaon with Realty Shopee. Explore upcoming, and ready-to-move residential property options in prime locations.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/residential-property-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'New Residential Property in Gurgaon for Sale By Realty Shopee' },
        { name: 'twitter:description', content: 'Find the cheapest & new residential property in Gurgaon with Realty Shopee. Explore upcoming, and ready-to-move residential property options in prime locations.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/residential-property-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
  "/commercial-property-in-gurgaon": {
    title: "Invest in the Best Commercial Property in Gurgaon | Realty Shopee",
    description: "Planning to invest in real estate? Explore the best commercial property in Gurgaon with Realty Shopee. Investment opportunities, ready-to-move, and resale options are available.",
    url: "https://www.realtyshopee.com/commercial-property-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Invest in the Best Commercial Property in Gurgaon | Realty Shopee' },
        { property: 'og:description', content: 'Planning to invest in real estate? Explore the best commercial property in Gurgaon with Realty Shopee. Investment opportunities, ready-to-move, and resale options are available.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'Invest in the Best Commercial Property in Gurgaon | Realty Shopee' },
        { name: 'twitter:description', content: 'Planning to invest in real estate? Explore the best commercial property in Gurgaon with Realty Shopee. Investment opportunities, ready-to-move, and resale options are available.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
  "/sco-plots-in-gurgaon": {
    title: "Premium SCO Plots in Gurugram for Sale | Realty Shopee",
    description: "Premium commercial and residential SCO plots in Gurgaon for sale with two-side open layouts. Explore affordable options at Realty Shopee.",
    url: "https://www.realtyshopee.com/commercial-property-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Premium SCO Plots in Gurugram for Sale | Realty Shopee' },
        { property: 'og:description', content: 'Premium commercial and residential SCO plots in Gurgaon for sale with two-side open layouts. Explore affordable options at Realty Shopee.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'Premium SCO Plots in Gurugram for Sale | Realty Shopee' },
        { name: 'twitter:description', content: 'Premium commercial and residential SCO plots in Gurgaon for sale with two-side open layouts. Explore affordable options at Realty Shopee.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
}
};

const updateMetaTags = (config) => {
  document.title = config.title;
  document.querySelector('meta[name="description"]').setAttribute('content', config.description);
  document.querySelector('meta[property="og:title"]').setAttribute('content', config.title);
  document.querySelector('meta[property="og:description"]').setAttribute('content', config.description);
  document.querySelector('meta[property="og:url"]').setAttribute('content', config.url);
  document.querySelector('meta[property="og:image"]').setAttribute('content', config.image);
  document.querySelector('meta[name="twitter:title"]').setAttribute('content', config.title);
  document.querySelector('meta[name="twitter:description"]').setAttribute('content', config.description);
  document.querySelector('meta[name="twitter:url"]').setAttribute('content', config.url);
  document.querySelector('meta[name="twitter:image"]').setAttribute('content', config.image);
};

const useMetaTags = () => {
  const location = useLocation();

  useEffect(() => {
    const config = metaTagsConfig[location.pathname] || metaTagsConfig["/"];
    updateMetaTags(config);
  }, [location]);
};

export default useMetaTags;
