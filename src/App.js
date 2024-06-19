import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
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
import { Helmet } from 'react-helmet';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

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

  return (
    <Router>
      <div className="App">
      <Helmet>
        <title>Realty Shopee | Home</title>
        <meta
          name="description"
          content="Realty Shopee is a real estate website where you can buy, sell and rent properties. We are the best real estate consultants in Delhi NCR."
        />
        <link rel="canonical" href="https://www.realtyshopee.com/" />
      </Helmet>
        {showOverlay && <Overlay onClose={handleCloseOverlay} onFormSubmit={handleFormSubmit} />}
        <div>
          <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />           
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
            <Route path="/add-blogs" element={<AddBlogs />} />
            <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
