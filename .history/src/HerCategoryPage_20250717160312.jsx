import React from 'react'
import './HerCategoryPage.css';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const navigate=useNavigate();
  return (
    <div className='category-container'>
    <div className='category-list'>
    <div className='back-btn'>
        Back
    </div>
    <button className='category-btn' onClick={() => navigate('./subcategory')}>Cool Dress</button>
    <button className='category-btn'>Western Dress</button>
    <button className='category-btn'>Desi Diva</button>
    <button className='category-btn'>Dream Dress</button>
    <button className='category-btn'>Wedding Dress</button>
    <button className='category-btn'>Footwear</button>
    <button className='category-btn'>Bags</button>
    <button className='category-btn'>Skincare & Beauty </button>
    <button className='category-btn'>Jewellery</button>
    </div>
    </div>
  )
}

export default CategoryPage
