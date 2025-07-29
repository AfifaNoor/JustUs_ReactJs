import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import HerCategoryPage from './HerCategoryPage';
import HisCategoryPage from './HisCategoryPage';
import SubCategory from './SubCategory';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/her-category" element={<HerCategoryPage />} />
      <Route path="/home/his-category" element={<HisCategoryPage />} />
      <Route path="/her-category/subcategory/:name" element={<SubCategory />} />
    </>
  )
);

export default router;
