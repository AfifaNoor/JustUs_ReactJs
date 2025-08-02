import React, { use, useEffect, useState } from 'react';
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {

const [gender, setGender] = useState('')
const [genderOptions, setGenderOptions] = useState([]);
const [selection , setSelection] = useState('')
const [category, setCategory] = useState('')
const [subcategory, setSubcategory] = useState('')
const [productName, setProductName] = useState('')
const [imageUrl, setImageUrl] = useState('')
const [price, setPrice] = useState('')
const [priority, setPriority] = useState('')
console.log(genderOptions,'genderoption')

useEffect(()=>{
  fetchmainSection()

})

const fetchmainSection = async () => {
  try {
    const response = await axios.get("https://mediatracker-dp6t.onrender.com/api/product-metadata");
      setGenderOptions(response.data)
      console.log("API response:", response.data.sections);

  } catch (error) {
    console.log("error", error);
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
          value={category}
          onChange={(e)=>setCategory(e.target.value)} 
          required>
            <option value="">Select</option>
            {/* <option value="dress">Dress</option>
            <option value="tshirt">T Shirt</option> */}
            
          </select>
        </div>

        <div className='form-group'>
          <label className='form-label'>Subcategory</label>
          <select className='form-select'
          value={subcategory}
          onChange={(e)=>setSubcategory(e.target.value)} 
          required>
            <option value="">Select</option>
            <option value="summer">Summer Wear</option>
            <option value="winter">Winter Wear</option>
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
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
