import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
// import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import CommercialProperties from './Pages/CommercialProperties';
import ScoProperties from './Pages/ScoPlots';
import ResidentialProperties from './Pages/ResidentialProperties';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 90000); 

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
        {showOverlay && <Overlay onClose={handleCloseOverlay} onFormSubmit={handleFormSubmit} />}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects/:projectName" element={<PropertyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/location/:locationName" element={<LocationDetail />} />
            <Route path="/addproperties" element={<PrivateRoute element={<AddProject />} />} />
            <Route path="/allproperties" element={<AllProperties/>}/>
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/SCO-Plots-in-gurgaon" element={<ScoProperties />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword/>} /> */}
            <Route path="/commercial-property-in-gurgaon" element={<CommercialProperties/>} />
            <Route path="/residential-property-in-gurgaon" element={<ResidentialProperties/>} />
            <Route path="/reset-password/:token" element={<ResetPassword/>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
