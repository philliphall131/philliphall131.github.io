import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './pages/About.js'
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <div>
        {/* <nav>
            <ul id="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav> */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
