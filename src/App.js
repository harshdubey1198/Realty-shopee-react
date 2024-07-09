import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
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
// import EditBlog from './Pages/EditBlog';
// import BlogTable from './Components/BlogTable'; 
import BlogManager from './Components/BlogManager';
import useMetaTags from './Components/useMetaTags';

function App() {
  useMetaTags();
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

  return (
    <HelmetProvider> 
      <div className="App">
        {showOverlay && <Overlay onClose={handleCloseOverlay} onFormSubmit={handleFormSubmit} />}
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/property/:projectName" element={<PropertyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/location/:locationName" element={<LocationDetail />} />
            <Route path="/addproperties" element={<PrivateRoute element={<AddProject />} />} />
            <Route path="/allproperties" element={<AllProperties />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sco-plots-in-gurgaon" element={<ScoProperties />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:meta_url" element={<BlogDetail />} />
            <Route path="/commercial-property-in-gurgaon" element={<CommercialProperties />} />
            <Route path="/residential-property-in-gurgaon" element={<ResidentialProperties />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/add-blogs" element={<AddBlogs auth={auth} />} />
            <Route path="/edit-blogs" element={<BlogManager auth={auth} />} />
            <Route path="/login-add-blogs" element={<BlogAuth setAuth={setAuth} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </HelmetProvider>
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
