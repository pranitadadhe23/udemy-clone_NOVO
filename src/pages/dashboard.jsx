import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import LanguageIcon from '@mui/icons-material/Language';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  borderRadius: '18px',
  backgroundColor: '#eeeeee',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
  border: '0.5px',
  borderColor: '#bdbdbd',
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Dashboard() {
const [open, setOpen] = useState(false);

const toggleDrawer = (newOpen) => () => {
  setOpen(newOpen);
};

const [expandedId, setExpandedId] = useState(null);

const handleMouseEnter = (id) => {
  setExpandedId(id);
};

const handleMouseLeave = () => {
  setExpandedId(null);
};

const navigate = useNavigate();

const DrawerList = (
  <Box sx={{ width: 250 }} role="presentation">
    <List>
      <ListItemButton>
        <Card sx={{ padding: 1, width: '100%', bgcolor: '#fff', border: 1, borderColor: '#eeeeee' }}>
          <Stack direction='row'>
          <ListItemIcon sx={{ mt: '4px' }}>
            <LocalAtmIcon sx={{ color: '#000' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: '#000', fontWeight: 500 }}>Plan & Pricing</ListItemText>
          </Stack>
        </Card>
      </ListItemButton>
      <ListItemButton>
        <Card sx={{ padding: 1, width: '100%', bgcolor: '#000' }}>
          <Stack direction='row'>
            <ListItemIcon sx={{ mt: '4px' }}>
              <BusinessCenterIcon sx={{ color: '#fff' }}/>  
            </ListItemIcon>
            <ListItemText sx={{ color: '#fff', fontWeight: 500 }}>Udemy Business</ListItemText>
          </Stack>
        </Card>
      </ListItemButton>
      <ListItemButton>
        <Card sx={{ padding: 1, width: '100%', bgcolor: '#fff', border: 1, borderColor: '#eeeeee' }}>
          <Stack direction='row'>
            <ListItemIcon sx={{ mt: '4px' }}>
              <HandshakeIcon sx={{ color: '#000' }}/>
            </ListItemIcon>
            <ListItemText sx={{ color: '#000', fontWeight: 500 }}>Teach on Udemy</ListItemText>
          </Stack>
        </Card>
      </ListItemButton>
    </List>
    <Divider />
    <Accordion
      expanded={expandedId === 0} 
      onMouseEnter={() => handleMouseEnter(0)}
      onMouseLeave={handleMouseLeave} 
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
          <Typography fontSize={18} fontWeight='bold'>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
          <ListItemButton>
            <ListItemText>Development</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Business</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Finance & Accounting</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>IT & Software</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Office Productivity</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Personal Development</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Design</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Marketing</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Lifestyle</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Photography & Video</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Health & Fitness</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Music</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Teaching & Academics</ListItemText>
          </ListItemButton>
        </List>
        </AccordionDetails>
      </Accordion>
  </Box>
);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
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
          <Typography
            fontWeight='bold'
            fontSize={26}
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Udemy
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Stack>
          <Grid container sx={{ justifyContent: 'flex-end' }}>
          <Stack direction='row' spacing={2}> 
            <IconButton>
              <ShoppingCartIcon sx={{ color: '#000' }}/>
            </IconButton>
            <Button onClick={() => navigate('./login')} variant="outlined" color='inherit'>
              <Typography variant='button'>Log In</Typography> 
            </Button>
            <Button onClick={() => navigate('./signin')} variant="contained" sx={{ bgcolor: '#000' }}>
            <Typography variant='button'>Sign In</Typography> 
            </Button>
            <Button variant="outlined" color='inherit'>
              <LanguageIcon />
            </Button>
          </Stack>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Dashboard;
