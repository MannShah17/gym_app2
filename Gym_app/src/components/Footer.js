import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../signup.css';

const Footer = () => (
  <Box
    mt='80px'
    bgcolor='#ff2625'
    color='common.white'
    boxShadow='rgba(0, 0, 0, 0.7) 0px 1px 2px 0px, rgba(0, 0, 0, 0.5) 0px 2px 6px 2px'
    pt='16px'
    pb='22px'
    className='footer-container'
  >
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}
      spacing={2}
      flexWrap='wrap'
      className='footer-content'
    >
      <IconButton color='inherit' aria-label='Facebook'></IconButton>
    </Stack>
    <Typography
      sx={{ fontSize: { lg: '22px', xs: '20px' } }}
      textAlign='center'
      fontFamily='cursive'
    >
      Made By Gym Buddy
    </Typography>
    <Typography
      sx={{ fontSize: { lg: '18px', xs: '16px' } }}
      textAlign='center'
      fontFamily='cursive'
      color='grey.300'
    >
      Contact us at: info@gymbuddy.com
    </Typography>
  </Box>
);

export default Footer;
