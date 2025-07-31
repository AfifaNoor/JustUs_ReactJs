import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import HerCategoryPage from './HerCategoryPage';
import HisCategoryPage from './HisCategoryPage';
import SubCategory from './SubCategory';
import HisSubcategory from './HisSubcategory';
import AddProductHer from './AddProductHer';
import AddProductHis from './AddProductHis';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/her-category" element={<HerCategoryPage />} />
      <Route path="/home/his-category" element={<HisCategoryPage />} />
      <Route path="/her-category/subcategory/:name" element={<SubCategory />} />
      <Route path="/his-category/subcategory/:name" element={<HisSubcategory/>} />
      <Route path="/add-product-her" element={<AddProductHer/>}/>
      <Route path="/add-product-his" element={<AddProductHis/>}/>
    </>
  )
);

export default router;
