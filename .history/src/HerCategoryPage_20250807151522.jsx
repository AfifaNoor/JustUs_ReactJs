import React from 'react'
import './HerCategoryPage.css';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';


const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  
console.log(categories,'categories')
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
    <div className='back-btn' onClick={() => navigate(-1)}>
    ←
</div>

     {subcategory.length > 0 ? (
  subcategory.map((item, index) => (
    <button
      key={index}
      className='subcategory-btn'
      onClick={() => handleProduct(item)}
    >
      {item}
    </button>
  ))
) : (
  <button className='subcategory-btn' disabled>
    No subcategories available
  </button>
)}

    </div>
    </div>
    
  )
}

export default CategoryPage;
