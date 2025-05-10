import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
// import Signup from './pages/Signup';
import Favourites from './pages/Favourites';
// import MovieDetails from './pages/MovieDetails';
import './App.css';
import React, { useState } from 'react';
import Trending from './pages/Trending';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/trending" element={<Trending />} />
          <Route path="/favorites" element={<Favourites />} />
        {/* <Route path="/signup" element={<Signup />} />
       
        <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;



