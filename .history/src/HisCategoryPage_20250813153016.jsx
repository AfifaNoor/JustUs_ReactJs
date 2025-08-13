import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HisCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  console.log(categories, "categories");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://mediatracker-dp6t.onrender.com/api/categories/his");
        setCategories(response.data);
        console.log('response', response);
      } catch (error) {
        console.error("error");
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className='category-container'>
      <div className='category-list'>
        <div className='back-btn' onClick={() => navigate('-1')}>
          ←
        </div>
        {categories.map((value) => (
          <button
            className='category-btn'
            onClick={() => navigate(`/his-category/subcategory/${value.name}`)}
            key={value._id}
          >
            {value.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HisCategoryPage;
