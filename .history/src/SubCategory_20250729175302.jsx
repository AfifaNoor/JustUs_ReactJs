import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const SubCategory = () => {
  const [subcategory, setSubcategory] = useState([]);
  const {name} = useParams();
  const navigate=useNavigate();
  console.log(name , subcategory,"name")
   
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://mediatracker-dp6t.onrender.com/api/categories/her');

          console.log(response.data ,'data')
        // const filterCategory =  response.data.find((category) => 
        // category.name.toLowercase === name.toLocaleLowerCase);
        const filterCategory = response.data.find(
          (category) => category.name.toLowerCase() === 'cool dress'
        );
        setSubcategory(filterCategory);
        console.log(setSubcategory ,'subcategory' )

        
        
      } catch (error) {
        console.error('Error', error);
        alert("Invalid");
      }
    };

    fetchCategories();
  }, [name]);
  return (
    <div className='container'>
    <div className='back-btn' onClick={() => navigate('./her-category')}>
        ←
    </div>
    <h2>{name}</h2>
    <ul className='subcategory-list'>
        {subcategory.length > 0 ? (
          subcategory.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No subcategories available</li>
        )}
      </ul>

    </div>
  )
}

export default SubCategory
