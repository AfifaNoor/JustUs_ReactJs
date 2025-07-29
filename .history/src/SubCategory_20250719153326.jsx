import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const SubCategory = () => {
  const [subcategory, setSubcategory] = useState([]);
  const {name} = useParams();
  const navigate=useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://mediatracker-dp6t.onrender.com/api/categories/her/${name}`);

        setSubcategory(response.data);
        console.log(response.data);
        
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
      { subcategory.map((value)=>(
        <li key={value.id}>{value.name.subcategories}</li>
      ))

      }
    </ul>

    </div>
  )
}

export default SubCategory
