import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Pages/Home';
import PropertyPage from './Pages/PropertyPage';
import Login from './Pages/Login';
import LocationDetail from './Components/LocationList';
import NotFound from './Pages/NotFound';
import AddProject from './Pages/AddProject';
import PrivateRoute from './PrivateRoute';
import Overlay from './Components/Overlay';
import './App.css';
import AllProperties from './Components/AllProperties';
import ContactUs from './Pages/ContactUs';
import ResetPassword from './Pages/ResetPassword';
import CommercialProperties from './Pages/CommercialProperties';
import ScoProperties from './Pages/ScoPlots';
import ResidentialProperties from './Pages/ResidentialProperties';
import Blogs from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail';
import AddBlogs from './Pages/AddBlogs';
import BlogAuth from './Components/BlogAuth';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const location = useLocation();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleFormSubmit = (success) => {
    if (success) {
      setShowOverlay(false);
    } else {
      setShowOverlay(true);
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Dynamic meta tags based on route
  const getMetaTags = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Discover The Best Luxury Property in Gurgaon with Realty Shopee',
          description: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.',
          ogTitle: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee',
          ogDescription: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.',
          ogImage: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png',
          twitterTitle: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee',
          twitterDescription: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.',
          twitterImage: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png'
        };
      case '/residential-property-in-gurgaon':
        return {
          title: 'Residential Properties in Gurgaon - Realty Shopee',
          description: 'Explore residential properties in Gurgaon with Realty Shopee. Find luxury apartments, villas, and houses for sale.',
          ogTitle: 'Residential Properties in Gurgaon - Realty Shopee',
          ogDescription: 'Explore residential properties in Gurgaon with Realty Shopee. Find luxury apartments, villas, and houses for sale.',
          ogImage: 'https://example.com/residential-og-image.png',
          twitterTitle: 'Residential Properties in Gurgaon - Realty Shopee',
          twitterDescription: 'Explore residential properties in Gurgaon with Realty Shopee. Find luxury apartments, villas, and houses for sale.',
          twitterImage: 'https://example.com/residential-twitter-image.png'
        };
      default:
        return {
          title: 'Realty Shopee',
          description: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.',
          ogTitle: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee',
          ogDescription: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.',
          ogImage: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png',
          twitterTitle: 'Discover the Best Luxury Property in Gurgaon with Realty Shopee',
          twitterDescription: 'Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.',
          twitterImage: 'https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png'
        };
    }
  };

  const metaTags = getMetaTags();

  return (
    <div className="App">
      {showOverlay && <Overlay onClose={handleCloseOverlay} onFormSubmit={handleFormSubmit} />}
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta property="og:site_name" content="Realty Shopee" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTags.ogTitle} />
        <meta property="og:description" content={metaTags.ogDescription} />
        <meta property="og:url" content={`https://realtyshopee.com${location.pathname}`} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RealtyShopee" />
        <meta name="twitter:title" content={metaTags.twitterTitle} />
        <meta name="twitter:description" content={metaTags.twitterDescription} />
        <meta name="twitter:image" content={metaTags.twitterImage} />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectName" element={<PropertyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/location/:locationName" element={<LocationDetail />} />
          <Route path="/addproperties" element={<PrivateRoute element={<AddProject />} />} />
          <Route path="/allproperties" element={<AllProperties />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/SCO-Plots-in-gurgaon" element={<ScoProperties />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:blogTitle" element={<BlogDetail />} />
          <Route path="/commercial-property-in-gurgaon" element={<CommercialProperties />} />
          <Route path="/residential-property-in-gurgaon" element={<ResidentialProperties />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/add-blogs" element={<AddBlogs auth={auth} />} />
          <Route path="/login-add-blogs" element={<BlogAuth setAuth={setAuth} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
