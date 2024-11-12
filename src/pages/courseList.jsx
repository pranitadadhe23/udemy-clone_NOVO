// CourseList.js
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const courses = [
  { title: 'React Basics', description: 'Learn the fundamentals of React.' },
  { title: 'Advanced React', description: 'Dive deeper into React with hooks and context.' },
  { title: 'Intro to MongoDB', description: 'Learn MongoDB for data storage and retrieval.' },
  { title: 'Full-Stack Development', description: 'Become proficient in full-stack development.' }
];

function CourseList() {
  return (
    <Stack spacing={2} sx={{ padding: 2 } } direction='row'>
      {courses.map((course, index) => (
        <Card key={index} sx={{ backgroundColor: '#f9f9f9', boxShadow: 2, borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {course.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default CourseList;
