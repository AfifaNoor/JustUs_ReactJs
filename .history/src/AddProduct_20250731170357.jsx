import React, { useState } from 'react';
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {

const [gender, setGender] = useState('')
const [category, setCategory] = useState('')
const [subcategory, setSubcategory] = useState('')
const [productName, setProductName] = useState('')
const [imageUrl, setImageUrl] = useState('')
const [price, setPrice] = useState('')
const [priority, setPriority] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    mainSection : gender,
    category,
    subcategory,
    name: productName,
    imageUrls : imageUrl,
    price,
    priority
  };
  console.log(formData);

  try{
    const response = await axios.post()
  }
  

};

  return (
    <div className='add-product-page'>
      <h2 className='page-title'>Add Product Page</h2>

      <form className='form-container'>

        <div className='form-group'>
          <label className='form-label'>Select Gender</label>
          <select className='form-select' required>
            <option value="">Select</option>
            <option value="his">His</option>
            <option value="her">Her</option>
          </select>
        </div>
       
        <div className='form-group'>
          <label className='form-label'>Category</label>
          <select className='form-select' required>
            <option value="">Select</option>
            <option value="dress">Dress</option>
            <option value="tshirt">T Shirt</option>
          </select>
        </div>

        <div className='form-group'>
          <label className='form-label'>Subcategory</label>
          <select className='form-select' required>
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
            placeholder='Enter Product Name'
            required
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Main Image URL</label>
          <input
            className='form-input'
            type='text'
            placeholder='Image URL'
            required
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Price</label>
          <input
            className='form-input'
            type="number"
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
