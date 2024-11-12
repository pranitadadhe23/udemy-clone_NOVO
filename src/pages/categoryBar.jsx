import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';

function CategoryBar({ selectedCategory, setSelectedCategory }) {
  const getButtonStyle = (index) => {
    return selectedCategory === index
      ? {
          backgroundColor: 'black',
          color: 'white',
        }
      : {
          backgroundColor: '#f0f0f0',
          color: 'black',
        };
  };

  return (
    <Box>
      {/* Category Tabs with Black Color */}
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <Box
          sx={{
            ...getButtonStyle(0),
            padding: '10px 20px',
            borderRadius: '15px', // Small curve to the button
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
          }}
          onClick={() => setSelectedCategory(0)}
        >
          <Typography variant="body1" color="inherit">
            Web Development
          </Typography>
        </Box>
        <Box
          sx={{
            ...getButtonStyle(1),
            padding: '10px 20px',
            borderRadius: '15px', // Small curve to the button
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
          }}
          onClick={() => setSelectedCategory(1)}
        >
          <Typography variant="body1" color="inherit">
            IT Certification
          </Typography>
        </Box>
        <Box
          sx={{
            ...getButtonStyle(2),
            padding: '10px 20px',
            borderRadius: '15px', // Small curve to the button
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
          }}
          onClick={() => setSelectedCategory(2)}
        >
          <Typography variant="body1" color="inherit">
            Leadership
          </Typography>
        </Box>
        <Box
          sx={{
            ...getButtonStyle(3),
            padding: '10px 20px',
            borderRadius: '15px', // Small curve to the button
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
          }}
          onClick={() => setSelectedCategory(3)}
        >
          <Typography variant="body1" color="inherit">
            Data Science
          </Typography>
        </Box>
        <Box
          sx={{
            ...getButtonStyle(4),
            padding: '10px 20px',
            borderRadius: '15px', // Small curve to the button
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
          }}
          onClick={() => setSelectedCategory(4)}
        >
          <Typography variant="body1" color="inherit">
            Communication
          </Typography>
        </Box>
      </Stack>

      {/* Display Subcategory Bars */}
      {/* Depending on the selected category, show the respective subcategory buttons (e.g. JavaScript, HTML, CSS) */}
      {/* You can modify this part based on your specific subcategories for each category. */}
    </Box>
  );
}

export default CategoryBar;
