import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const metaTagsConfig = {
  "/": {
    title: "Discover the Best Luxury Property in Gurgaon with Realty Shopee",
    description: "Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.",
    url: "https://realtyshopee.com/",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png",
    canonical:"https://www.realtyshopee.com/",
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
    canonical:"https://www.realtyshopee.com/residential-property-in-gurgaon",
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
    canonical:"https://www.realtyshopee.com/commercial-property-in-gurgaon",
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
    url: "https://www.realtyshopee.com/sco-plots-in-gurgaon",
    canonical:"https://www.realtyshopee.com/sco-plots-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/sco-plots-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Premium SCO Plots in Gurugram for Sale | Realty Shopee' },
        { property: 'og:description', content: 'Premium commercial and residential SCO plots in Gurgaon for sale with two-side open layouts. Explore affordable options at Realty Shopee.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/sco-plots-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'Premium SCO Plots in Gurugram for Sale | Realty Shopee' },
        { name: 'twitter:description', content: 'Premium commercial and residential SCO plots in Gurgaon for sale with two-side open layouts. Explore affordable options at Realty Shopee.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/sco-plots-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/allproperties": {
  title: "All Premium Properties are listed! | Realty Shopee",
  url: "https://www.realtyshopee.com/allproperties",
  canonical:"https://www.realtyshopee.com/allproperties",
  image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
},
"/blogs": {
  title: "Realty Shopee Blogs: Expert Real Estate Insights in Gurgaon",
  description: "Stay updated with Realty Shopee's latest insights & trends in commercial & residential real estate in Gurgaon. Discover expert advice & the latest property news.",
  url: "https://www.realtyshopee.com/blogs",
  canonical:"https://www.realtyshopee.com/blogs",
  image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
},
"/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city": {
    url: "https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city",
    canonical:"https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Discover the latest trends in new launch properties in Gurgaon. Find out what's new in the market and how it impacts your investment opportunities.",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'Latest Trends in New Launch Property in Gurgaon, The Millenium City' },
        { property: 'og:description', content: 'Discover the latest trends in new launch properties in Gurgaon. Find out what`s new in the market and how it impacts your investment opportunities.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'Latest Trends in New Launch Property in Gurgaon, The Millenium City' },
        { name: 'twitter:description', content: 'Discover the latest trends in new launch properties in Gurgaon. Find out what`s new in the market and how it impacts your investment opportunities.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/why-residential-property-in-gurgaon-is-a-great-retirement-option": {
    url: "https://www.realtyshopee.com/blog/why-residential-property-in-gurgaon-is-a-great-retirement-option",
    canonical:"https://www.realtyshopee.com/blog/why-residential-property-in-gurgaon-is-a-great-retirement-option",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Learn why residential property in Gurgaon makes a great retirement option, offering luxury, convenience, and tranquility. Invest in the best residential property in Gurgaon today.",
   
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/why-residential-property-in-gurgaon-is-a-great-retirement-option' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'Why Residential Property in Gurgaon is a Great Retirement Option?' },
        { property: 'og:description', content: 'Learn why residential property in Gurgaon makes a great retirement option, offering luxury, convenience, and tranquility. Invest in the best residential property in Gurgaon today' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/why-residential-property-in-gurgaon-is-a-great-retirement-option' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'Why Residential Property in Gurgaon is a Great Retirement Option?' },
        { name: 'twitter:description', content: 'Learn why residential property in Gurgaon makes a great retirement option, offering luxury, convenience, and tranquility. Invest in the best residential property in Gurgaon today' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/why-residential-property-in-gurgaon-is-a-great-retirement-option' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/the-benefits-of-investing-in-a-commercial-property-in-gurgaon-for-foreign-investors": {
    url: "https://www.realtyshopee.com/blog/the-benefits-of-investing-in-a-commercial-property-in-gurgaon-for-foreign-investors",
    canonical:" https://www.realtyshopee.com/blog/the-benefits-of-investing-in-a-commercial-property-in-gurgaon-for-foreign-investors",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Investing in commercial property in Gurgaon offers foreign investors profitability and growth. Maximise returns with prime real estate opportunities.",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/the-benefits-of-investing-in-a-commercial-property-in-gurgaon-for-foreign-investors' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'The Benefits of Investing in a Commercial Property in Gurgaon for Foreign Investors' },
        { property: 'og:description', content: 'The post-pandemic commercial real estate scene in Gurgaon has seen a significant change. Shop-cum-office or SCO plots are gradually gaining traction and emergin' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/the-benefits-of-investing-in-a-commercial-property-in-gurgaon-for-foreign-investors' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'The Benefits of Investing in a Commercial Property in Gurgaon for Foreign Investors' },
        { name: 'twitter:description', content: 'Learn why residential property in Gurgaon makes a great retirement option, offering luxury, convenience, and tranquility. Invest in the best residential property in Gurgaon today' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/the-benefits-of-investing-in-a-commercial-property-in-gurgaon-for-foreign-investors' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/sco-plots-in-gurgaon:-a-better-choice-than-traditional-office-spaces": {
    url: "https://www.realtyshopee.com/blog/sco-plots-in-gurgaon:-a-better-choice-than-traditional-office-spaces",
    canonical:"https://www.realtyshopee.com/blog/sco-plots-in-gurgaon:-a-better-choice-than-traditional-office-spaces",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Find SCO plots in Gurgaon within your budget with Realty Shopee, India's No.1 real estate management company in gurgaon. Get complete details of Shop-cum-offices.",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/sco-plots-in-gurgaon:-a-better-choice-than-traditional-office-spaces' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'Commercial and Residential Property in Gurgaon: Key Insights and Trends from FY24 Land Deals' },
        { property: 'og:description', content: 'Find SCO plots in Gurgaon within your budget with Realty Shopee, India`s No.1 real estate management company in gurgaon. Get complete details of Shop-cum-offices.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/sco-plots-in-gurgaon:-a-better-choice-than-traditional-office-spaces' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'Commercial and Residential Property in Gurgaon: Key Insights and Trends from FY24 Land Deals' },
        { name: 'twitter:description', content: 'Find SCO plots in Gurgaon within your budget with Realty Shopee, India`s No.1 real estate management company in gurgaon. Get complete details of Shop-cum-offices.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/sco-plots-in-gurgaon:-a-better-choice-than-traditional-office-spaces' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/commercial-and-residential-property-in-gurgaon:-key-insights-and-trends-from-fy24-land-deals": {
    url: "https://www.realtyshopee.com/blog/commercial-and-residential-property-in-gurgaon:-key-insights-and-trends-from-fy24-land-deals",
    canonical:"https://www.realtyshopee.com/blog/commercial-and-residential-property-in-gurgaon:-key-insights-and-trends-from-fy24-land-deals",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"If you're hunting for commercial and commercial properties in Gurgaon, you're in the right place! Realty Shopee offers a range of affordable and convenient properties available in Gurugram.",   
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/commercial-and-residential-property-in-gurgaon:-key-insights-and-trends-from-fy24-land-deals' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'Commercial and Residential Property in Gurgaon: Key Insights and Trends from FY24 Land Deals' },
        { property: 'og:description', content: 'If you`re hunting for commercial and commercial properties in Gurgaon, you`re in the right place! Realty Shopee offers a range of affordable and convenient properties available in Gurugram.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/commercial-and-residential-property-in-gurgaon:-key-insights-and-trends-from-fy24-land-deals' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'Commercial and Residential Property in Gurgaon: Key Insights and Trends from FY24 Land Deals' },
        { name: 'twitter:description', content: 'If you`re hunting for commercial and commercial properties in Gurgaon, you`re in the right place! Realty Shopee offers a range of affordable and convenient properties available in Gurugram.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/commercial-and-residential-property-in-gurgaon:-key-insights-and-trends-from-fy24-land-deals' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/dwarka-expressway-inauguration:-the-impact-on-residential-&-commercial-property-in-gurgaon": {
    url: "https://www.realtyshopee.com/blog/dwarka-expressway-inauguration:-the-impact-on-residential-&-commercial-property-in-gurgaon",
    canonical:"https://www.realtyshopee.com/blog/dwarka-expressway-inauguration:-the-impact-on-residential-&-commercial-property-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
      description:"Dwarka Expressway boosts connectivity, driving growth in residential, commercial property in Gurgaon. Explore the impact on real estate values, market trends.",
      additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/dwarka-expressway-inauguration:-the-impact-on-residential-&-commercial-property-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'Dwarka Expressway Inauguration: The Impact on Residential & Commercial Property in Gurgaon' },
        { property: 'og:description', content: 'Dwarka Expressway boosts connectivity, driving growth in residential & commercial property in Gurgaon. Explore the impact on real estate values & market trends.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/dwarka-expressway-inauguration:-the-impact-on-residential-&-commercial-property-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'Dwarka Expressway Inauguration: The Impact on Residential & Commercial Property in Gurgaon' },
        { name: 'twitter:description', content: 'Dwarka Expressway boosts connectivity, driving growth in residential & commercial property in Gurgaon. Explore the impact on real estate values & market trends.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/dwarka-expressway-inauguration:-the-impact-on-residential-&-commercial-property-in-gurgaon' },
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
