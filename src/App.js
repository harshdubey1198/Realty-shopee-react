// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import PropertyPage from './Pages/PropertyPage';
// import ContactUs from './Pages/ContactUs';
// import Login from './Pages/Login';
// import LocationDetail from './Components/LocationList';
// import NotFound from './Pages/NotFound';
// import AddProject from './Pages/AddProject';
// import PrivateRoute from './PrivateRoute'; 

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route path="/projects/:projectName" element={<PropertyPage />} />
//             <Route path="/contactus" element={<ContactUs />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/location/:locationName" element={<LocationDetail />} />
//             <Route path="/addproperties" element={<PrivateRoute element={<AddProject />} />} />
//             <Route path="/*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PropertyPage from './Pages/PropertyPage';
import Login from './Pages/Login';
import LocationDetail from './Components/LocationList';
import NotFound from './Pages/NotFound';
import AddProject from './Pages/AddProject';
import PrivateRoute from './PrivateRoute';
import Overlay from './Components/Overlay'; // Import the Overlay component
import './App.css'; // Import global styles

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  // Function to show overlay after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 1500); // Show overlay after 15 seconds

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
            {/* Include other routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/location/:locationName" element={<LocationDetail />} />
            <Route path="/addproperties" element={<PrivateRoute element={<AddProject />} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
