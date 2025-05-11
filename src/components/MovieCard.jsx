import React, { useState, useEffect } from 'react';
import {
  Card, CardMedia, CardContent, CardActions,
  Typography, IconButton, Button, Box
} from '@mui/material';
import { Link } from 'react-router-dom';

import { Favorite, FavoriteBorder } from '@mui/icons-material';


const MovieCard = ({ movie }) => {
     const [isFavorited, setIsFavorited] = useState(false);

//   const handleFavoriteClick = () => {
//     setIsFavorited(prev => !prev);
//   };

useEffect(() => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const isAlreadyFavorited = favorites.some(fav => fav.id === movie.id);
  setIsFavorited(isAlreadyFavorited);
}, [movie.id]);


const handleFavoriteClick = () => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (isFavorited) {
    // Remove from favorites
    favorites = favorites.filter(fav => fav.id !== movie.id);
  } else {
    // Add to favorites
    favorites.push(movie);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  setIsFavorited(!isFavorited);
};


  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        // image={`${IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 60, overflow: 'hidden' }}>
          {movie.overview}
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary" sx={{ marginTop: 1 }}>
          Release Date: {movie.release_date}
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary">
          Rating: ⭐ {movie.vote_average}
        </Typography>
       <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={handleFavoriteClick} color={isFavorited ? 'primary' : 'default'}>
            {isFavorited ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Box>
      </CardContent>
      <CardActions>
        <Button  component={Link} to={`/movie/${movie.id}`} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
