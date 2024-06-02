import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Movie from './Movie';
import Cart from './Cart';
import Navbar from './Navbar';

function App() {
  const [likedMovies, setLikedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLike = (movie) => {
    setLikedMovies((prevLikedMovies) => {
      if (!prevLikedMovies.some((m) => m.imdbID === movie.imdbID)) {
        return [...prevLikedMovies, movie];
      }
      return prevLikedMovies;
    });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar likedMoviesCount={likedMovies.length} />}
      <Routes>
        <Route path='/register' element={<Signup onLogin={handleLogin} />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path="/movie" element={<Movie handleLike={handleLike} />} />
        <Route path="/cart" element={<Cart likedMovies={likedMovies} />} />
        <Route path='/' element={<Login onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
