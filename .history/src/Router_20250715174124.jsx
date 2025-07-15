// Router.jsx
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </>
  )
);

export default router;
