// import React, { useState, useEffect } from 'react';
// import {
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   Box
// } from '@mui/material';

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');
//   const [recentSearches, setRecentSearches] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('recentSearches')) || [];
//     setRecentSearches(stored);
//   }, []);

//   const handleSearch = () => {
//     if (!query.trim()) return;

//     const updatedSearches = [query, ...recentSearches.filter(q => q !== query)].slice(0, 5);
//     localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
//     setRecentSearches(updatedSearches);

//     onSearch(query);
//     setQuery('');
//   };

//   return (
//     <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
//       <TextField
//         label="Search Movies"
//         variant="outlined"
//         fullWidth
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//       />
//       <Button
//         variant="contained"
//         sx={{ mt: 2 }}
//         fullWidth
//         onClick={handleSearch}
//       >
//         Search
//       </Button>

//       {recentSearches.length > 0 && (
//         <Box sx={{ mt: 3 }}>
//           <Typography variant="subtitle1">Recent Searches:</Typography>
//           <List dense>
//             {recentSearches.map((term, idx) => (
//               <ListItem
//                 button
//                 key={idx}
//                 onClick={() => onSearch(term)}
//               >
//                 <ListItemText primary={term} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default SearchBar;
