import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PropertyPage from './Pages/PropertyPage';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects/:projectName" element={<PropertyPage />} />
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
