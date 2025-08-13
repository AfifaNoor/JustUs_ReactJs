import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './SubCategory.css'


const SubCategory = () => {
  const [subcategory, setSubcategory] = useState([]);
  const[categoryName , setCategoryname] =useState('');
  
  const {name} = useParams();
  const navigate=useNavigate();
  console.log(name ,"name786")
   
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
        setCategoryname(filterCategory.name)
        console.log(filterCategory.subcategories, 'subcategory')
        console.log(filterCategory.name, 'setCategoryname')
        
        
      } catch (error) {
        console.error('Error', error);
        alert("Invalid");
      }
    };

    fetchCategories();
  }, [name]);

 const handleProduct = (subcategory) => {
  console.log("Selected subcategory", subcategory);
  navigate('/product-showcase', {
    state: {
      mainSection: 'her',
      category: categoryName,
      subcategory: subcategory
    }
  });
};


return (
    <div className='container'>
      <div className='back-btn' onClick={() => navigate(-1)}>
      ←
      </div>
  <div className="subcategory-btn-container">
  {subcategory.length > 0 ? (
    subcategory.map((item, index) => (
      <button
        key={index}
        className="subcategory-btn"
        onClick={() => handleProduct(item)}
      >
        {item}
      </button>
    ))
  ) : (
    <button className="subcategory-btn" disabled>
      No subcategories available
    </button>
  )}
</div>

    </div>
  );
};

export default SubCategory
