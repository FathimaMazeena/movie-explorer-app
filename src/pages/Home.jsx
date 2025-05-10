import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MovieList from '../components/MovieList';
import { Button, Container } from '@mui/material';

const API_KEY = '6c7660e5cb8c5a17d4517e8efa57bc74';

const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [trendingPage, setTrendingPage] = useState(1);

  const [allMovies, setAllMovies] = useState([]);
  const [allPage, setAllPage] = useState(1);

  // Fetch trending movies
//   useEffect(() => {
//     const fetchTrending = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${trendingPage}`
//         );
//         setTrendingMovies(prev => [...prev, ...res.data.results]);
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       }
//     };
//     fetchTrending();
//   }, [trendingPage]);

  // Fetch all movies
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${allPage}`
        );
        setAllMovies(prev => [...prev, ...res.data.results]);
      } catch (error) {
        console.error('Error fetching all movies:', error);
      }
    };
    fetchAllMovies();
  }, [allPage]);

  return (
    <div>
      <Navbar />

      {/* Trending Movies Section */}
      {/* <MovieList title="Trending Movies" movies={trendingMovies} />
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" onClick={() => setTrendingPage(prev => prev + 1)}>
          Load More Trending
        </Button>
      </Container> */}

      {/* All Movies Section */}
      <MovieList title="All Movies" movies={allMovies} />
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" onClick={() => setAllPage(prev => prev + 1)}>
          Load More Movies
        </Button>
      </Container>
    </div>
  );
};

export default Home;
