import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const HisSubcategory = () => {
  const [hissubcategory, setHissubcategory] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();
  console.log(hissubcategory,'hissubcategory')

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
      } catch (error) {
        console.error('Error', error);
        alert('Invalid');
      }
    };

    fetchHisSubcategory();
  }, [name]);

  return (
    <div className='container'>
      <div className='back-btn' onClick={() => navigate('/his-category')}>
        ←
      </div>
      <h2>{name}</h2>
      <ul className='subcategories-list'>
        {hissubcategory.length > 0 ? (
          hissubcategory.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No subcategories found.</li>
        )}
      </ul>
    </div>
  );
};

export default HisSubcategory;
