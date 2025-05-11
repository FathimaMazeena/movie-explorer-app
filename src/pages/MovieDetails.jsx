// MovieDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CircularProgress, Chip, Stack } from '@mui/material';
import Navbar from '../components/Navbar';

const API_KEY = '6c7660e5cb8c5a17d4517e8efa57bc74';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
        <Navbar />
    <Box p={4} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
      <Card sx={{ width: { xs: '100%', md: 300 }, flexShrink: 0 }}>
        <CardMedia
          component="img"
          height="450"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Card>

      <Box>
        <Typography variant="h4" gutterBottom>{movie.title}</Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {movie.release_date} • {movie.runtime} min
        </Typography>

        <Stack direction="row" spacing={1} my={2} flexWrap="wrap">
          {movie.genres.map((genre) => (
            <Chip key={genre.id} label={genre.name} variant="outlined" />
          ))}
        </Stack>

        <Typography variant="body1" paragraph>{movie.overview}</Typography>

        <Typography variant="h6" mt={4}>Rating: {movie.vote_average}/10</Typography>
        <Typography variant="body2" color="textSecondary">Votes: {movie.vote_count}</Typography>
      </Box>
    </Box>
    </div>
    
  );
};

export default MovieDetail;
