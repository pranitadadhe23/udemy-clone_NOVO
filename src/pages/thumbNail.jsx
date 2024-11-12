import React from 'react';
import { Box, Typography } from '@mui/material';

const Thumbnail = () => {
  const thumbnailImage = 'thumbnail.png'; // Update with the correct image path

  return (
    <Box sx={{ textAlign: 'center', mb: 3 }}>
      <img src={thumbnailImage} alt="Thumbnail" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }} />
      <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
        All the skills you need in one place
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
        From critical skills to technical topics, Udemy supports your professional development.
      </Typography>
    </Box>
  );
}

export default Thumbnail;
