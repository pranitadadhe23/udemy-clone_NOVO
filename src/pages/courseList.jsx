// // CourseList.js
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { Stack } from '@mui/material';

// const courses = [
//   { title: 'React Basics', description: 'Learn the fundamentals of React.' },
//   { title: 'Advanced React', description: 'Dive deeper into React with hooks and context.' },
//   { title: 'Intro to MongoDB', description: 'Learn MongoDB for data storage and retrieval.' },
//   { title: 'Full-Stack Development', description: 'Become proficient in full-stack development.' }
// ];

// function CourseList() {
//   return (
//     <Stack spacing={2} sx={{ padding: 2 } } direction='row'>
//       {courses.map((course, index) => (
//         <Card key={index} sx={{ backgroundColor: '#f9f9f9', boxShadow: 2, borderRadius: '12px' }}>
//           <CardContent>
//             <Typography variant="h6" fontWeight="bold">
//               {course.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {course.description}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Stack>
//   );
// }

// export default CourseList;

import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Tabs, Tab, Stack, Button, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const thumbnailImage = 'thumbnail.png'; // Update with the correct image path


const courses = [
  {
    title: 'Web Development',
    description: 'Learn to build modern web applications.',
    imageUrl: 'webdevimg.jpg',
    price: '₹299',
    rating: 4.5,
    id:0,
  },
  {
    title: 'Data Science',
    description: 'Explore data analysis and machine learning.',
    imageUrl: 'datasciimg.jpg',
    price: '₹399',
    rating: 4.7,
    id:1,
  },
  {
    title: 'Digital Marketing',
    description: 'Master online marketing and SEO techniques.',
    imageUrl: 'marketing.jpg',
    price: '₹499',
    rating: 4.2,
    id:2,
  },
  {
    title: 'Graphic Design',
    description: 'Learn design principles and software skills.',
    imageUrl: 'graphicimg.jpg',
    price: '₹499',
    rating: 4.6,
    id:3,
  },
];

function CourseList() {
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const navigate = useNavigate()
  const handleNavigate=(id)=>{
    navigate('./purchase')
  }
  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box>
      {/* Thumbnail Image */}
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <img src={thumbnailImage} alt="Thumbnail" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>

      {/* Text Below Thumbnail */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          All the skills you need in one place
        </Typography>
        <Typography variant="body1" color="textSecondary">
          From critical skills to technical topics, NOVO supports your professional development.
        </Typography>
      </Box>

      {/* Category Tabs */}
      <Tabs
        value={selectedCategory}
        onChange={handleCategoryChange}
        centered
        indicatorColor="primary"
        textColor="black"
        sx={{
          mb: 4,
          '& .MuiTab-root': {
            color: 'black',
          },
        }}
      >
        <Tab label="Web Development" />
        <Tab label="IT Certification" />
        <Tab label="Leadership" />
        <Tab label="Data Science" />
        <Tab label="Communication" />
      </Tabs>

      {/* Subcategory Bars with Hover Effect and Beautified Buttons */}
      <Box sx={{ mb: 4 }}>
        {selectedCategory === 0 && (
          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            {['JavaScript', 'HTML', 'CSS'].map((item) => (
              <Box
                key={item}
                sx={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Typography variant="body1" color="black">
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
        {selectedCategory === 1 && (
          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            {['CompTIA', 'Cisco', 'Microsoft'].map((item) => (
              <Box
                key={item}
                sx={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Typography variant="body1" color="black">
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
        {selectedCategory === 2 && (
          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            {['Team Building', 'Leadership Strategies', 'Conflict Resolution'].map((item) => (
              <Box
                key={item}
                sx={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Typography variant="body1" color="black">
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
        {selectedCategory === 3 && (
          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            {['Python', 'R Programming', 'Machine Learning'].map((item) => (
              <Box
                key={item}
                sx={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Typography variant="body1" color="black">
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
        {selectedCategory === 4 && (
          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            {['Communication Skills', 'Presentation Skills', 'Negotiation Skills'].map((item) => (
              <Box
                key={item}
                sx={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Typography variant="body1" color="black">
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      {/* Display Courses */}
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
            onClick={() => {handleNavigate(course.id)}}
              sx={{
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.imageUrl}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
                <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
                  {course.price}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                  <Typography variant="body2" color="textPrimary" fontWeight="bold">
                    {course.rating.toFixed(1)}
                  </Typography>
                  <Rating name="read-only" value={course.rating} precision={0.5} readOnly />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CourseList;




// import * as React from 'react';
// import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

// const courses = [
//   {
//     title: 'Web Development',
//     description: 'Learn to build modern web applications.',
//     imageUrl: 'webdevimg.jpg',
//   },
//   {
//     title: 'Data Science',
//     description: 'Explore data analysis and machine learning.',
//     imageUrl: 'datasciimg.jpg',
//   },
//   {
//     title: 'Digital Marketing',
//     description: 'Master online marketing and SEO techniques.',
//     imageUrl: 'marketing.jpg',
//   },
//   {
//     title: 'Graphic Design',
//     description: 'Learn design principles and software skills.',
//     imageUrl: 'graphicimg.jpg',
//   },
//   {
//     title: 'Web Development',
//     description: 'Learn to build modern web applications.',
//     imageUrl: 'webdevimg.jpg',
//   },
//   {
//     title: 'Data Science',
//     description: 'Explore data analysis and machine learning.',
//     imageUrl: 'datasciimg.jpg',
//   },
//   {
//     title: 'Digital Marketing',
//     description: 'Master online marketing and SEO techniques.',
//     imageUrl: 'marketing.jpg',
//   },
//   {
//     title: 'Graphic Design',
//     description: 'Learn design principles and software skills.',
//     imageUrl: 'graphicimg.jpg',
//   },
// ];

// function CourseList({ selectedCategory }) {
//   // Filter courses based on selectedCategory if needed, otherwise display all courses
//   return (
//     <Grid container spacing={4}>
//       {courses.map((course, index) => (
//         <Grid item xs={12} sm={6} md={3} key={index}>
//           <Card
//             sx={{
//               boxShadow: 3,
//               '&:hover': {
//                 boxShadow: 6,
//                 transform: 'scale(1.05)', // Slight scaling effect on hover
//                 transition: 'transform 0.3s ease-in-out',
//               },
//             }}
//           >
//             <CardMedia
//               component="img"
//               height="140"
//               image={course.imageUrl}
//               alt={course.title}
//             />
//             <CardContent>
//               <Typography variant="h6" fontWeight="bold">
//                 {course.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {course.description}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default CourseList;
