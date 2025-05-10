import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Grid, Container, Typography, Button } from '@mui/material';

const MovieList = ({ title, movies, loadMore }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint
//     axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6c7660e5cb8c5a17d4517e8efa57bc74')
//       .then(response => {
//         // setMovies(response.data); 
//         setMovies(response.data.results);
//       })
//       .catch(error => {
//         console.error('Error fetching movies:', error);
//       });
//   }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>{title}</Typography>
      <Grid container spacing={3}>
        {movies.map(movie => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard
              movie={movie}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
