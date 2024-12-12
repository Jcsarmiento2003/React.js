import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';  // Import Routes here
import Navbar from './components/Navbar.jsx';  // Assuming navbar.jsx is in the components folder
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing the page components
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';  
import Hobbies from './pages/Hobbies.jsx';  
import Contact from './pages/Contact.jsx'; 
import Education from './pages/Education.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (

    <>
    <Router>
      <Navbar />
      <Routes>  {/* Routes wrapper for your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>

    <Footer />
    </>

  );
}

export default App;