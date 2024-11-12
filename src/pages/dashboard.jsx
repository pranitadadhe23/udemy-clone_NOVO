// import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import {
//   AppBar, Box, Toolbar, IconButton, Typography, InputBase,
//   Button, Stack, Grid, Drawer, List, Divider, ListItemButton,
//   ListItemIcon, ListItemText, Accordion, AccordionSummary,
//   AccordionDetails, Card
// } from '@mui/material';
// import {
//   Menu as MenuIcon, Search as SearchIcon, LocalAtm as LocalAtmIcon,
//   Handshake as HandshakeIcon, BusinessCenter as BusinessCenterIcon,
//   ExpandMore as ExpandMoreIcon, ShoppingCart as ShoppingCartIcon,
//   Language as LanguageIcon
// } from '@mui/icons-material';

// // Search styling
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: '18px',
//   backgroundColor: '#f0f0f0',
//   '&:hover': { backgroundColor: '#e0e0e0' },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': { width: '20ch' },
//     },
//   },
// }));

// function Dashboard() {
//   const [open, setOpen] = useState(false);
//   const [expandedId, setExpandedId] = useState(null);
//   const navigate = useNavigate();

//   const toggleDrawer = (newOpen) => () => setOpen(newOpen);
//   const handleMouseEnter = (id) => setExpandedId(id);
//   const handleMouseLeave = () => setExpandedId(null);

//   // Drawer with categories and actions
//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <List>
//         {[
//           { icon: <LocalAtmIcon />, label: 'Plan & Pricing', bgColor: '#fff', color: '#000' },
//           { icon: <BusinessCenterIcon />, label: 'Udemy Business', bgColor: '#000', color: '#fff' },
//           { icon: <HandshakeIcon />, label: 'Teach on Udemy', bgColor: '#fff', color: '#000' }
//         ].map((item, index) => (
//           <ListItemButton key={index}>
//             <Card sx={{ padding: 1, width: '100%', bgcolor: item.bgColor, border: 1, borderColor: '#eeeeee' }}>
//               <Stack direction="row">
//                 <ListItemIcon sx={{ mt: '4px' }}>{React.cloneElement(item.icon, { sx: { color: item.color } })}</ListItemIcon>
//                 <ListItemText sx={{ color: item.color, fontWeight: 500 }}>{item.label}</ListItemText>
//               </Stack>
//             </Card>
//           </ListItemButton>
//         ))}
//       </List>
//       <Divider />
//       <Accordion
//         expanded={expandedId === 0}
//         onMouseEnter={() => handleMouseEnter(0)}
//         onMouseLeave={handleMouseLeave}
//       >
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography fontSize={18} fontWeight="bold">Categories</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <List>
//             {['Development', 'Business', 'Finance & Accounting', 'IT & Software', 'Office Productivity',
//               'Personal Development', 'Design', 'Marketing', 'Lifestyle', 'Photography & Video',
//               'Health & Fitness', 'Music', 'Teaching & Academics']
//               .map((category, idx) => (
//                 <ListItemButton key={idx}>
//                   <ListItemText>{category}</ListItemText>
//                 </ListItemButton>
//               ))}
//           </List>
//         </AccordionDetails>
//       </Accordion>
//     </Box>
//   );

//   return (
//     <Stack>
//       <Box sx={{ flexGrow: 1 }}>
//         <Drawer open={open} onClose={toggleDrawer(false)}>
//           {DrawerList}
//         </Drawer>
//         <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               onClick={toggleDrawer(true)}
//               aria-label="open drawer"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
//               <img style={{ height: '50px', width: '50px' }} src="/NOVO.png" alt="Logo" />
//               <Typography fontWeight="bold" fontSize={26} fontFamily="arial-black" noWrap sx={{ flexGrow: 1 }}>
//                 SIT
//               </Typography>
//               <Search>
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
//               </Search>
//             </Stack>
//             <Grid container sx={{ justifyContent: 'flex-end' }}>
//               <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
//                 <IconButton>
//                   <ShoppingCartIcon sx={{ color: '#000' }} />
//                 </IconButton>
//                 <Button onClick={() => navigate('./login')} variant="outlined" color="inherit">
//                   <Typography variant="button">Log In</Typography>
//                 </Button>
//                 <Button onClick={() => navigate('./signin')} variant="contained" sx={{ bgcolor: '#000' }}>
//                   <Typography variant="button" color="inherit">Sign In</Typography>
//                 </Button>
//                 <Button variant="outlined" color="inherit">
//                   <LanguageIcon />
//                 </Button>
//               </Stack>
//             </Grid>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </Stack>
//   );
// }

// export default Dashboard;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  AppBar, Box, Toolbar, IconButton, Typography, InputBase,
  Button, Stack, Grid, Drawer, List, Divider, ListItemButton,
  ListItemIcon, ListItemText, Accordion, AccordionSummary,
  AccordionDetails, Card
} from '@mui/material';
import {
  Menu as MenuIcon, Search as SearchIcon, LocalAtm as LocalAtmIcon,
  Handshake as HandshakeIcon, BusinessCenter as BusinessCenterIcon,
  ExpandMore as ExpandMoreIcon, ShoppingCart as ShoppingCartIcon,
  Language as LanguageIcon
} from '@mui/icons-material';

import CourseList from './courseList'; // Import the CourseList component

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '18px',
  backgroundColor: '#eeeeee',
  '&:hover': { backgroundColor: '#e0e0e0' },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(1), width: 'auto' },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': { width: '20ch' },
    },
  },
}));

function Dashboard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  return (
    <Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {/* Drawer Content */}
        </Drawer>
        <AppBar position="static" color='action'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Stack direction='row' spacing={3}>
              <img style={{ height:'50px', width:'50px' }} src="/NOVO.png" alt="Logo" />
              <Typography
                fontWeight='bold'
                fontSize={26}
                fontFamily="arial-black"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                SIT
              </Typography>
              <Stack>
                <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
              </Stack>
              
            </Stack>
            <Grid container sx={{ justifyContent: 'flex-end' }}>
              <Stack direction='row' spacing={2}> 
                <IconButton>
                  <ShoppingCartIcon sx={{ color: '#000' }}/>
                </IconButton>
                <Button onClick={() => navigate('./login')} variant="outlined" color='inherit'>
                  Log In
                </Button>
                <Button onClick={() => navigate('./signin')} variant="contained" sx={{ bgcolor: '#000' }}>
                  Sign In
                </Button>
                <Button variant="outlined" color='inherit'>
                  <LanguageIcon />
                </Button>
              </Stack>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ p: 2 }}>
        <CourseList /> {/* Include CourseList here to show the course cards */}
      </Box>
    </Stack>
  );
}

export default Dashboard;
