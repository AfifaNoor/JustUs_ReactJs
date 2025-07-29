import React from 'react'
import './HerCategoryPage.css';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';


const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  const navigate=useNavigate();

   useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://mediatracker-dp6t.onrender.com/api/categories/her');
        setCategories(response.data);
      } catch (error) {
        console.error('Error', error);
        alert("Invalid");
      }
    };

    fetchCategories();
  }, []);



  return (
    <div className='category-container'>
    <div className='category-list'>
    <div className='back-btn' onClick={() => navigate("/home")}>
        ←
    </div>
    <button className='category-btn' onClick={() => navigate('./her-category/subcategory')}>Cool Dress</button>
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

export default CategoryPage;
