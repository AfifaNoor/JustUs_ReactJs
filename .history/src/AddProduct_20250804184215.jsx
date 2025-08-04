import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {

  const [gender, setGender] = useState('');
  const [genderOptions, setGenderOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [category, setCategory] = useState('');
  const [subcategoryOptions, setSubcategoryOptions] = useState([]);
  const [subcategory, setSubcategory] = useState('');
  const [productName, setProductName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [priority, setPriority] = useState('');


const priorityOptions = ["High", "Medium", "Low"];

useEffect(() => {
    const fetchMainSections = async () => {
      try {
        const response = await axios.get('https://mediatracker-dp6t.onrender.com/api/product-metadata');
        setGenderOptions(response.data.sections);
        console.log(response.data.sections,'setGenderOptions')
      } catch (error) {
        console.error('Error fetching main sections:', error);
      }
    };

    fetchMainSections();
  }, []);

 const fetchCategories = async (choice) => {
    try {
      const response = await axios.get(`https://mediatracker-dp6t.onrender.com/api/categories/${choice}`);
      setCategoryOptions(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchSubcategories = async (gender, category) => {
    try {
      const response = await axios.get(
        `https://mediatracker-dp6t.onrender.com/api/product-metadata?mainSection=${gender}&category=${category}`
      );
      setSubcategoryOptions(response.data.subcategories);
      console.log(response.data.subcategories,'setsubcategory')
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };
  
  const handleGenderChange =(e)=>{
  setGender(e.target.value);
  fetchCategories(e.target.value);
  setCategory('');
  setSubcategory('');

}

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubcategory('');
    fetchSubcategories(e.target.value);
    console.log(category,'category')
   
  };

 const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
    console.log(e.target.value, 'subcategory');
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://mediatracker-dp6t.onrender.com/api/products", {
      mainSection: gender,
      category,
      subcategory,
      name: productName,
      imageUrls: [imageUrl],
      price,
      priority: priority.toLowerCase()
    });
    console.log(response.data, 'response');
  } catch (error) {
    console.log("error", error);
  }
  setGender('');
  setCategory('');
  setSubcategory('');
  setProductName('');
  setImageUrl('');
  setPrice('');
  setPriority('');

};





  return (
    <div className='add-product-page'>
      <h2 className='page-title'>Add Product Page</h2>

      <form className='form-container' onSubmit={handleSubmit}>

        <div className='form-group'>
          <label className='form-label'>Select Gender</label>
          <select className='form-select'
           value={gender} 
           onChange={handleGenderChange}
           required
           >
            <option value="">Select Gender</option>
            {
              genderOptions.map((item,index)=> (
                <option 
                key={index}  value={item}>
                  {item}
                </option>
              ))
            }
           
          </select>
        </div>
       
        <div className='form-group'>
          <label className='form-label'>Category</label>
          <select 
          className='form-select' 
          value={category}
          onChange={handleCategoryChange} 
          required>
            <option value="">Select</option>
            { categoryOptions.map((item,index)=> (
              <option
              key={index}
              value={item.name}>
              {item.name}
              </option>
            ))

            }
            
          </select>
        </div>

        <div className='form-group'>
          <label className='form-label'>Subcategory</label>
          <select className='form-select'
          value={subcategory}
          onChange={handleSubcategoryChange} 
          required>
            <option value="">Select</option>
           { subcategoryOptions.map((item,index)=>(
            <option
            key={index}
            value={item}>

            {item}

            </option>
           ))

           }
          </select>
        </div>

         <div className='form-group'>
          <label className='form-label'>Product Name</label>
          <input
            className='form-input'
            type='text'
            value={productName}
            onChange={(e)=>setProductName(e.target.value)}
            placeholder='Enter Product Name'
            required
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Main Image URL</label>
          <input
            className='form-input'
            type='text'
            value={imageUrl}
            onChange={(e) =>setImageUrl(e.target.value)}
            placeholder='Image URL'
            
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Price</label>
          <input
            className='form-input'
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            placeholder='Enter Price'
            required
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Priority</label>
          <select
            className='form-select'
            name="priority"
            value={priority}
            onChange={(e)=>setPriority(e.target.value)}
            required
          >
            <option value="">Select Priority</option>
            {priorityOptions.map((item,index)=>(
              <option
              key={index}
              value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
