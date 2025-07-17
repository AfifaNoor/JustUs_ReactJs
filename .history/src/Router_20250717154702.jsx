import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import HerCategoryPage from './HerCategoryPage';
import HisCategoryPage from './HisCategoryPage';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/her-category" element={<HerCategoryPage/>}/>
      <Route path="/his-category" element={<HisCategoryPage/>}/>

    </>
  )
);

export default Router;
