import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  InputBase,
  Box,
  Select,
  FormControl,
  useTheme,
  useMediaQuery
} from '@mui/material';

import {
  Brightness4,
  Brightness7,
  Search,
  Favorite,
  Menu as MenuIcon
} from '@mui/icons-material';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [genreAnchor, setGenreAnchor] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleGenreClick = (event) => {
    setGenreAnchor(event.currentTarget);
  };

  const handleGenreClose = () => {
    setGenreAnchor(null);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Typography component={Link} to="/" color="inherit" variant="h6" noWrap sx={{ mr: 2 }}>
          MovieHub
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          
            <Button component={Link} to="/trending" color="inherit">
            Trending
            </Button>

          <Button color="inherit" onClick={handleGenreClick}>
            Genre
          </Button>
          <Menu anchorEl={genreAnchor} open={Boolean(genreAnchor)} onClose={handleGenreClose}>
            <MenuItem onClick={handleGenreClose}>Action</MenuItem>
            <MenuItem onClick={handleGenreClose}>Comedy</MenuItem>
            <MenuItem onClick={handleGenreClose}>Drama</MenuItem>
          </Menu>

          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <Select
              value={sortOption}
              onChange={handleSortChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Sort By' }}
              sx={{ color: 'white', borderBottom: '1px solid white' }}
            >
              <MenuItem value="">Sort By</MenuItem>
              <MenuItem value="genre">Genre</MenuItem>
              <MenuItem value="year">Year</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </FormControl>

          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                px: 1,
                color: 'white',
                border: '1px solid white',
                borderRadius: 1,
                height: 35
              }}
            />
            <IconButton type="submit" sx={{ color: 'white' }}>
              <Search />
            </IconButton>
          </form>

        
            <IconButton component={Link} to="/favorites" color="inherit" >
            <Favorite />
            </IconButton>
       

          <Button component={Link} to="/login" color="inherit">Login</Button>

          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
