import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const metaTagsConfig = {
  "/": {
    title: "Luxury Property in Gurgaon for Sale - Best New Launch Property in Budget",
    description: "Discover the best luxury property in Gurgaon for sale. Realty Shopee helps to find affordable new launch properties on a low budget. We are a property dealer in Gurgaon.",
    url: "https://realtyshopee.com/",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png",
    canonical:"https://www.realtyshopee.com/",
    additionalMetaTags:[
        { name: 'canonical', content: 'https://realtyshopee.com/' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Luxury Property in Gurgaon for Sale - Best New Launch Property in Budget' },
        { property: 'og:description', content: 'Discover the best luxury property in Gurgaon for sale. Realty Shopee helps to find affordable new launch properties on a low budget. We are a property dealer in Gurgaon.' },
        { property: 'og:url', content: 'https://realtyshopee.com/' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'Luxury Property in Gurgaon for Sale - Best New Launch Property in Budget' },
        { name: 'twitter:description', content: 'Discover the best luxury property in Gurgaon for sale. Realty Shopee helps to find affordable new launch properties on a low budget. We are a property dealer in Gurgaon.' },
        { name: 'twitter:url', content: 'https://realtyshopee.com/' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png' }
    ]
    },
  "/residential-property-in-gurgaon": {
    title: "Ready to Move New Residential Property in Gurgaon, New Gurgaon Extension",
    description: "Find the cheapest & new ready-to-move residential property in Gurgaon with Realty Shopee. Explore upcoming residential projects in new Gurgaon extensions and old Gurgaon.",
    url: "https://www.realtyshopee.com/residential-property-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    canonical:"https://www.realtyshopee.com/residential-property-in-gurgaon",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/residential-property-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Ready to Move New Residential Property in Gurgaon, New Gurgaon Extension' },
        { property: 'og:description', content: 'Find the cheapest & new ready-to-move residential property in Gurgaon with Realty Shopee. Explore upcoming residential projects in new Gurgaon extensions and old Gurgaon.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/residential-property-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'Ready to Move New Residential Property in Gurgaon, New Gurgaon Extension' },
        { name: 'twitter:description', content: 'Find the cheapest & new ready-to-move residential property in Gurgaon with Realty Shopee. Explore upcoming residential projects in new Gurgaon extensions and old Gurgaon.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/residential-property-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
  "/commercial-property-in-gurgaon": {
    title: "Best Commercial Property to Invest in Gurgaon | Investment Opportunity",
    description: "Looking for an investment opportunity in commercial property? Explore the best commercial property in Gurgaon. Get ready-to-move & resale property options with Realty Shopee.",
    url: "https://www.realtyshopee.com/commercial-property-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    canonical:"https://www.realtyshopee.com/commercial-property-in-gurgaon",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Best Commercial Property to Invest in Gurgaon | Investment Opportunity' },
        { property: 'og:description', content: 'Looking for an investment opportunity in commercial property? Explore the best commercial property in Gurgaon. Get ready-to-move & resale property options with Realty Shopee.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'Best Commercial Property to Invest in Gurgaon | Investment Opportunity' },
        { name: 'twitter:description', content: 'Looking for an investment opportunity in commercial property? Explore the best commercial property in Gurgaon. Get ready-to-move & resale property options with Realty Shopee.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/commercial-property-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
  "/sco-plots-in-gurgaon": {
    title: "Premium Commercial and Residential SCO Plots for Sale in Gurgaon",
    description: "Realty Shopee offers premium residential commercial and SCO plots for sale in Gurgaon two-sided open layouts. Explore affordable options at Realty Shopee.",
    url: "https://www.realtyshopee.com/sco-plots-in-gurgaon",
    canonical:"https://www.realtyshopee.com/sco-plots-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/sco-plots-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Premium Commercial and Residential SCO Plots for Sale in Gurgaon' },
        { property: 'og:description', content: 'Realty Shopee offers premium residential commercial and SCO plots for sale in Gurgaon two-sided open layouts. Explore affordable options at Realty Shopee.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/sco-plots-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'website' },
        { name: 'twitter:title', content: 'Premium Commercial and Residential SCO Plots for Sale in Gurgaon' },
        { name: 'twitter:description', content: 'Realty Shopee offers premium residential commercial and SCO plots for sale in Gurgaon two-sided open layouts. Explore affordable options at Realty Shopee.' },
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
  title: "Latest Trends in New Launch Property in Gurgaon, The Millenium City",
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
    title: "Why Residential Property in Gurgaon is a Great Retirement Option?",
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
  title: "The Benefits of Investing in a Commercial Property in Gurgaon for Foreign Investors",
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
    title: "SCO Plots in Gurgaon: A Better Choice Than Traditional Office Spaces",
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
  title: "Commercial and Residential Property in Gurgaon: Key Insights and Trends from FY24 Land Deals",
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
  title: "Dwarka Expressway Inauguration: The Impact on Residential & Commercial Property in Gurgaon",
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
},
"/blog/the-impact-of-economic-cycles-on-commercial-sco-plots-in-gurgaon": {
    title:"The Impact of Economic Cycles on Commercial SCO Plots in Gurgaon",
    url: "https://www.realtyshopee.com/blog/the-impact-of-economic-cycles-on-commercial-sco-plots-in-gurgaon",
    canonical:"https://www.realtyshopee.com/blog/the-impact-of-economic-cycles-on-commercial-sco-plots-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Understand how economic cycles affect SCO plots in Gurgaon. Explore trends and insights to navigate investment opportunities in commercial real estate.",
      additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/the-impact-of-economic-cycles-on-commercial-sco-plots-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'The Impact of Economic Cycles on Commercial SCO Plots in Gurgaon' },
        { property: 'og:description', content: 'Understand how economic cycles affect SCO plots in Gurgaon. Explore trends and insights to navigate investment opportunities in commercial real estate.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/the-impact-of-economic-cycles-on-commercial-sco-plots-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'The Impact of Economic Cycles on Commercial SCO Plots in Gurgaon' },
        { name: 'twitter:description', content: 'Understand how economic cycles affect SCO plots in Gurgaon. Explore trends and insights to navigate investment opportunities in commercial real estate.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/the-impact-of-economic-cycles-on-commercial-sco-plots-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/investing-in-the-best-property-in-gurgaon:-risks-&-rewards": {
    title:"Investing in the Best Property in Gurgaon: Risks & Rewards",
    url: "https://www.realtyshopee.com/blog/investing-in-the-best-property-in-gurgaon:-risks-&-rewards",
    canonical:"https://www.realtyshopee.com/blog/investing-in-the-best-property-in-gurgaon:-risks-&-rewards",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Learn the risks and rewards of investing in the best property in Gurgaon. Discover key insights to make informed decisions in the real estate market.",
      additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/investing-in-the-best-property-in-gurgaon:-risks-&-rewards' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'Investing in the Best Property in Gurgaon: Risks & Rewards' },
        { property: 'og:description', content: 'Learn the risks and rewards of investing in the best property in Gurgaon. Discover key insights to make informed decisions in the real estate market.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/investing-in-the-best-property-in-gurgaon:-risks-&-rewards' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: '"Investing in the Best Property in Gurgaon: Risks & Rewards' },
        { name: 'twitter:description', content: 'Learn the risks and rewards of investing in the best property in Gurgaon. Discover key insights to make informed decisions in the real estate market.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/investing-in-the-best-property-in-gurgaon:-risks-&-rewards' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/why-is-the-best-property-dealer-in-gurgaon-essential-for-nri-investors": {
    title:"Why is the Best Property Dealer in Gurgaon Essential for NRI Investors ?",
    url: "https://www.realtyshopee.com/blog/why-is-the-best-property-dealer-in-gurgaon-essential-for-nri-investors",
    canonical:"https://www.realtyshopee.com/blog/why-is-the-best-property-dealer-in-gurgaon-essential-for-nri-investors",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Why is the best property dealer in Gurgaon crucial for NRI investors? Learn how expert guidance can maximize your real estate investments in Gurgaon.",
      additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/why-is-the-best-property-dealer-in-gurgaon-essential-for-nri-investors' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'Why is the Best Property Dealer in Gurgaon Essential for NRI Investors?' },
        { property: 'og:description', content: 'Why is the best property dealer in Gurgaon crucial for NRI investors? Learn how expert guidance can maximize your real estate investments in Gurgaon.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/why-is-the-best-property-dealer-in-gurgaon-essential-for-nri-investors' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'Why is the Best Property Dealer in Gurgaon Essential for NRI Investors?' },
        { name: 'twitter:description', content: 'Why is the best property dealer in Gurgaon crucial for NRI investors? Learn how expert guidance can maximize your real estate investments in Gurgaon.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/why-is-the-best-property-dealer-in-gurgaon-essential-for-nri-investors' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/how-to-conduct-a-swot-analysis-for-commercial-property-investments-in-gurgaon": {
    title:"How to Conduct a SWOT Analysis for Commercial Property Investments in Gurgaon",
    url: "https://www.realtyshopee.com/blog/how-to-conduct-a-swot-analysis-for-commercial-property-investments-in-gurgaon",
    canonical:"https://www.realtyshopee.com/blog/how-to-conduct-a-swot-analysis-for-commercial-property-investments-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Optimise your commercial property investment in Gurgaon with a detailed SWOT analysis. Discover insights to make informed and strategic investment decisions.",
      additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/how-to-conduct-a-swot-analysis-for-commercial-property-investments-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'How to Conduct a SWOT Analysis for Commercial Property Investments in Gurgaon' },
        { property: 'og:description', content: 'Optimise your commercial property investment in Gurgaon with a detailed SWOT analysis. Discover insights to make informed and strategic investment decisions.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/how-to-conduct-a-swot-analysis-for-commercial-property-investments-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'How to Conduct a SWOT Analysis for Commercial Property Investments in Gurgaon' },
        { name: 'twitter:description', content: 'Optimise your commercial property investment in Gurgaon with a detailed SWOT analysis. Discover insights to make informed and strategic investment decisions.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/how-to-conduct-a-swot-analysis-for-commercial-property-investments-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/designing-pet-friendly-space-for-a-new-residential-property-in-gurgaon": {
    title:"Designing Pet-Friendly Space for a New Residential Property in Gurgaon",
    url: "https://www.realtyshopee.com/blog/designing-pet-friendly-space-for-a-new-residential-property-in-gurgaon",
    canonical:"https://www.realtyshopee.com/blog/designing-pet-friendly-space-for-a-new-residential-property-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Create a pet-friendly space at your new residential property in Gurgaon to ensure comfort for both you and your four-legged friends.",
      additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/designing-pet-friendly-space-for-a-new-residential-property-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'Designing Pet-Friendly Space for a New Residential Property in Gurgaon' },
        { property: 'og:description', content: 'Create a pet-friendly space at your new residential property in Gurgaon to ensure comfort for both you and your four-legged friends.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/designing-pet-friendly-space-for-a-new-residential-property-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'Designing Pet-Friendly Space for a New Residential Property in Gurgaon' },
        { name: 'twitter:description', content: 'Create a pet-friendly space at your new residential property in Gurgaon to ensure comfort for both you and your four-legged friends.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/designing-pet-friendly-space-for-a-new-residential-property-in-gurgaon' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' }
      ]
},
"/blog/the-impact-of-urbanization-on-residential-sco-plots-for-sale-in-gurgaon": {
    title:"The Impact of Urbanization on Residential SCO Plots for Sale in Gurgaon",
    url: "https://www.realtyshopee.com/blog/the-impact-of-urbanization-on-residential-sco-plots-for-sale-in-gurgaon",
    canonical:"https://www.realtyshopee.com/blog/the-impact-of-urbanization-on-residential-sco-plots-for-sale-in-gurgaon",
    image: "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    description:"Discover how urbanization influences residential SCO plots in Gurgaon. Gain insights into trends and factors shaping the value of these investment opportunities.",
      additionalMetaTags: [
        { name: 'canonical', content: 'https://www.realtyshopee.com/blog/the-impact-of-urbanization-on-residential-sco-plots-for-sale-in-gurgaon' },
        { property: 'og:site_name', content: 'Realty Shopee' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:title', content: 'The Impact of Urbanization on Residential SCO Plots for Sale in Gurgaon' },
        { property: 'og:description', content: 'Discover how urbanization influences residential SCO plots in Gurgaon. Gain insights into trends and factors shaping the value of these investment opportunities.' },
        { property: 'og:url', content: 'https://www.realtyshopee.com/blog/the-impact-of-urbanization-on-residential-sco-plots-for-sale-in-gurgaon' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg' },
        { name: 'twitter:site', content: 'Realty Shopee' },
        { name: 'twitter:type', content: 'blog' },
        { name: 'twitter:title', content: 'The Impact of Urbanization on Residential SCO Plots for Sale in Gurgaon' },
        { name: 'twitter:description', content: 'Discover how urbanization influences residential SCO plots in Gurgaon. Gain insights into trends and factors shaping the value of these investment opportunities.' },
        { name: 'twitter:url', content: 'https://www.realtyshopee.com/blog/the-impact-of-urbanization-on-residential-sco-plots-for-sale-in-gurgaon' },
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
