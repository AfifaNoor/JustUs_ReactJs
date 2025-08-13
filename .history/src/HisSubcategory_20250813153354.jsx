import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const HisSubcategory = () => {
  const [hissubcategory, setHissubcategory] = useState([]);
  const [categoryName, setCategoryname] = useState('');
  console.log(hissubcategory, 'hissubcategory');
  console.log(categoryName, 'categoryName');

  const { name } = useParams();
  const navigate = useNavigate();
  console.log(hissubcategory,name,'hissubcategory')

  useEffect(() => {
    const fetchHisSubcategory = async () => {
      try {
        const response = await axios.get(
          'https://mediatracker-dp6t.onrender.com/api/categories/his'
        );
        console.log(response.data , 'response')

        const filterCategory = response.data.find(
          (category) => category.name.toLowerCase() === name.toLowerCase()
        );
        setHissubcategory(filterCategory.subcategories);
        setCategoryname(filterCategory.name);
        console.log(setHissubcategory,'subcategory')
      } catch (error) {
        console.error('Error', error);
        alert('Invalid');
      }
    };

    fetchHisSubcategory();
  }, [name]);

  const handleProduct = (selectedSubcategory) => {
  console.log("Selected subcategory", hissubcategory);
  navigate('/product-showcase', {

    state: {
      mainSection: 'his',
      category: categoryName,
      subcategory: selectedSubcategory
    }
  });
};

  return (
    <div className='container'>
      <div className='back-btn' onClick={() => navigate('/home/his-category')}>
        ←
      </div>
      <h2>{name}</h2>
      <div className='subcategories-list'>
        {hissubcategory.length > 0 ? (
          hissubcategory.map((item, index) => (
            <button key={index} onClick={() => handleProduct(item)}>
              {item}
            </button>
            
          ))
        ) : (
          <div>No subcategories found.</div>
        )}
      </div>
    </div>
  );
};

export default HisSubcategory;
