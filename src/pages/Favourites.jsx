import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  return (
    <div>

    <Navbar />
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Favorite Movies</Typography>
      <Grid container spacing={3}>
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <Typography>No favorite movies added yet.</Typography>
        )}
      </Grid>
    </Container>
    
    </div>
    
  );
};

export default Favorites;
