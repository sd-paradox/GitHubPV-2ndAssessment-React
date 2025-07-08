import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

const Home = lazy(() => import('../pages/Home'));
const Profile = lazy(() => import('../pages/Profile'));

const Rout = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Box textAlign="center" mt={6}>
            <CircularProgress />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Rout;
