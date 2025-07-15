import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
    </>
  )
);

export default Router;
