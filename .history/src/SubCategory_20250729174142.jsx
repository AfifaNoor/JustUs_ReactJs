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

          console.log(response.data)
        const filterCategory =  response.data.find((category) => 
        category.name.toLowercase === name.toLocaleLowerCase);
        setSubcategory(filterCategory);
        console.log(setSubcategory )

        
        
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
    <ul className='subcategory-list'>
      { subcategory.map((item, index)=>(
        <li key={index}>{item}</li>
      ))

      }
    </ul>

    </div>
  )
}

export default SubCategory
