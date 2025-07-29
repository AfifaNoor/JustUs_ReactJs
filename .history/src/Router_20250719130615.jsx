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
import SubCategory from './SubCategory';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/her-category" element={<HerCategoryPage />} />
      <Route path="/his-category" element={<HisCategoryPage />} />
      <Route path="/her-category/subcategory" element={<SubCategory />} />
    </>
  )
);

export default Router;
