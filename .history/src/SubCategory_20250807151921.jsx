import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
// import { IterationCcw } from 'lucide-react';
import './SubCategory.css'


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
        const filterCategory = response.data.find(
          (category) => category.name.toLowerCase() === name.toLowerCase()
        );
        setSubcategory(filterCategory.subcategories);
        console.log(setSubcategory ,'subcategory')

        
        
      } catch (error) {
        console.error('Error', error);
        alert("Invalid");
      }
    };

    fetchCategories();
  }, [name]);

  const handleProduct=(selectedSubcategory)=>{
    navigate('/product-showcase',{
      state : {
        mainSection : 'her',
        category : name ,
        subcategory: selectedSubcategory
      }
    })
  }

return (
    <div className='container'>
      <div className='back-btn' onClick={() => navigate(-1)}>
      ←
      </div>
      <h2>{name}</h2>
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
  );
};

export default SubCategory
