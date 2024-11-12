import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/material/styles';

// Custom styled button for social logins
const SocialButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '16px',
  padding: '10px 20px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '10px', // Space between icon and text
}));

function Login() {
  return (
    <Stack
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5', // Light grayish background for a modern feel
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '380px' }, // Ensures responsiveness
          border: '1px solid #ddd', // Subtle border color
          borderRadius: '12px', // Slightly rounded corners
          padding: 4, // Increased padding for a spacious form
          boxShadow: 6, // Slightly deeper shadow for a floating effect
          backgroundColor: 'white',
          transition: 'all 0.3s ease-in-out', // Smooth transition on hover
          '&:hover': {
            boxShadow: 12, // Elevated shadow on hover
          },
        }}
      >
        <Stack spacing={3}>
          {/* Title section */}
          <Stack
            mb={3}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: 28,
                color: '#333', // Darker text color for better contrast
              }}
            >
              Login
            </Typography>
            {/* <Divider sx={{ width: '60px', marginTop: 1, borderColor: '#ccc' }} /> */}
          </Stack>

          {/* Input fields */}
          <Stack spacing={3}>
            <TextField
            //   size="small"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiInputLabel-root': {
                  color: '#666', // Soft color for label
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd', // Subtle border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#1976d2', // Change border color on hover
                  },
                },
              }}
            />
            <TextField
            //   size="small"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{
                '& .MuiInputLabel-root': {
                  color: '#666',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1976d2', // Blue border on hover
                  },
                },
              }}
            />
          </Stack>

          {/* Submit button */}
          <Stack spacing={2} alignItems="center">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: '12px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                textTransform: 'none', // Disable uppercase transformation
                '&:hover': {
                  backgroundColor: '#1565c0', // Darker blue on hover
                },
              }}
            >
              Login
            </Button>

            {/* <Divider sx={{ width: '150px', borderColor: '#ccc' }} />    */}
            {/* Social login buttons */}
            <Stack spacing={2} direction='row'>
              <SocialButton
                variant="outlined"
                sx={{
                  backgroundColor: '#4285F4', // Google blue
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#357AE8', // Darker blue on hover
                  },
                }}
              >
                <GoogleIcon sx={{ color: 'white' }} />
                {/* Login with Google */}
              </SocialButton>

              <SocialButton
                variant="outlined"
                sx={{
                  backgroundColor: '#000000', // Apple black
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#333333', // Darker black on hover
                  },
                }}
              >
                <AppleIcon sx={{ color: 'white' }} />
                {/* Login with Apple */}
              </SocialButton>

              <SocialButton
                variant="outlined"
                sx={{
                  backgroundColor: '#1877F2', // Facebook blue
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#165EAB', // Darker blue on hover
                  },
                }}
              >
                <FacebookIcon sx={{ color: 'white' }} />
                {/* Login with Facebook */}
              </SocialButton>
            </Stack>

            <Typography variant="body2" color="text.secondary" align="center">
              Don't have an account?{' '}
              <a href="/signin" style={{ color: '#1976d2', textDecoration: 'none' }}>
                Sign up
              </a>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Login;
