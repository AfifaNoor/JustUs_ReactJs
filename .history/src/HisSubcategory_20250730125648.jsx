import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const HisSubcategory = () => {
    const [hissubcategory , setHiscategory] = useState([]);
    const {name}= useParams();
    const navigate = useNavigate();
     console.log(name , setHiscategory,"name")

 useEffect(() => {
    const fetchHisSubcategory = async () => {
      try {
        const response = await axios.get(
          'https://mediatracker-dp6t.onrender.com/api/categories/his');

          console.log(response.data ,'data')
        // const filterCategory =  response.data.find((category) => 
        // category.name.toLowercase === name.toLocaleLowerCase);
        const filterCategory = response.data.find(
          (category) => category.name.toLowerCase() === name.toLowerCase()
        );
        setSubcategory(filterCategory.subcategories);
        console.log(setHiscategory ,'subcategory')

        
        
      } catch (error) {
        console.error('Error', error);
        alert("Invalid");
      }
    };

    fetchHisSubcategory();
  }, [name]);

  return (
    <div>
      
    </div>
  )
}

export default HisSubcategory
