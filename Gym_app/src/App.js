import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Signup from './components/SignUp';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('userData');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Use a useEffect to navigate after the component is rendered
    if (!isAuthenticated) {
      navigate('/signup', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Define an array of routes where you want to hide the footer
  const noFooterRoutes = ['/signup'];

  // Check if the current route is in the noFooterRoutes array
  const shouldRenderFooter = !noFooterRoutes.includes(location.pathname);

  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {shouldRenderFooter && <Footer />}
    </Box>
  );
};

export default App;
