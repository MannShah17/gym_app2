import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

const plans = [
  {
    duration: '3 Months',
    price: '₹1999',
    features: [
      'Full gym access',
      '1 fitness assessment',
      '5 personal training sessions',
    ],
    imageUrl: 'https://i.ibb.co/JmpHZJj/young-fitness-man-studio.jpg',
  },
  {
    duration: '6 Months',
    price: '₹3499',
    features: [
      'Full gym access',
      '2 fitness assessments',
      '10 personal training sessions',
    ],
    imageUrl: 'https://i.ibb.co/B2Hb5kK/young-fitness-man-studio-1.jpg',
  },
  {
    duration: '12 Months',
    price: '₹5999',
    features: [
      'Full gym access',
      '4 fitness assessments',
      '20 personal training sessions',
      'Diet consultation',
    ],
    imageUrl:
      'https://i.ibb.co/K07yfRP/funny-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgroun.jpg',
  },
];

const Pricing = () => (
  <Box
    sx={{ overflowX: 'auto', display: 'flex', justifyContent: 'center', p: 4 }}
  >
    {plans.map((plan) => (
      <Card
        key={plan.duration}
        raised
        sx={{
          minWidth: 275,
          margin: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component='img'
          sx={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
          image={plan.imageUrl}
          alt={`${plan.duration} plan`}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant='h5' component='div' gutterBottom>
            {plan.duration}
          </Typography>
          <Typography variant='h4' component='div' gutterBottom>
            {plan.price}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Plan features:
          </Typography>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>
                <Typography variant='body2'>{feature}</Typography>
              </li>
            ))}
          </ul>
        </CardContent>
        <Box sx={{ p: 2 }}>
          <Button
            variant='contained'
            sx={{ backgroundColor: '#ff2625', color: 'common.white' }}
          >
            Choose Plan
          </Button>
        </Box>
      </Card>
    ))}
  </Box>
);

export default Pricing;
