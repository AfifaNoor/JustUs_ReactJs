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
  const [priority, setPriority] = useState('');\


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

 const fetchCategories = async (selectedGender) => {
    try {
      const response = await axios.get(
        `https://mediatracker-dp6t.onrender.com/api/categories/${selectedGender}`
      );
      setCategoryOptions(response.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchSubcategories = async (selectedGender, selectedCategory) => {
    try {
      const response = await axios.get(
        `https://mediatracker-dp6t.onrender.com/api/product-metadata?mainSection=${selectedGender}&category=${selectedCategory}`
      );
      setSubcategoryOptions(response.data.subcategories || []);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
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

const handleChange=(e)=>{
  setSelection(e.target.value)
  fetchHiscategory(e.target.value)
  setherSubcategory('')
}

const herCategoryHandle =(e)=>{
  setHercategorySelection(e.target.value)
  fetchHerSubcategory(gender, subcategory);
}

const herSubcategoryHandle =(e) =>{
  setherSubcategorySelection(e.target.value)
  
}



  return (
    <div className='add-product-page'>
      <h2 className='page-title'>Add Product Page</h2>

      <form className='form-container' onSubmit={handleSubmit}>

        <div className='form-group'>
          <label className='form-label'>Select Gender</label>
          <select className='form-select'
           value={selection} 
           onChange={handleChange}
           required
           >
            <option value="">Select</option>
            {
              genderOptions.map((item,index)=> (
                <option 
                key={index}
                value={item}
                >
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
          value={herCategoryselection}
          onChange={herCategoryHandle} 
          required>
            <option value="">Select</option>
            { hercategoryOption.map((item,index)=> (
              <option
              key={index}
              value={item.categories}>
              {item.name}
              </option>
            ))

            }
            
          </select>
        </div>

        <div className='form-group'>
          <label className='form-label'>Subcategory</label>
          <select className='form-select'
          value={herSubcategorySelection}
          onChange={herSubcategoryHandle} 
          required>
            <option value="">Select</option>
           { herSubcategory.map((item,index)=>(
            <option
            key={index}
            value={item}>

            {item.subcategories}

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
