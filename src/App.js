import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SocialBar from './Components/SocialBar';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SocialBar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
