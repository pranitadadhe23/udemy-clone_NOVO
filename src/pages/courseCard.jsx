// CourseCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function CourseCard({ title, instructor, progress }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">Instructor: {instructor}</Typography>
        <Typography variant="body2">Progress: {progress}%</Typography>
      </CardContent>
    </Card>
  );
}
