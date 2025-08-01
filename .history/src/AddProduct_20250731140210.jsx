import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
  return (
    <div className='add-product-page'>
      <h2 className='page-title'>Add Product Page</h2>

      <form className='form-container'>

        <>
          <label className='form-label'>Select Gender</label>
          <select className='form-select' required>
            <option value="">Gender</option>
            <option value="his">His</option>
            <option value="her">Her</option>
          </select>
        </>

        <label className='form-label'>Product Name</label>
        <input
          className='form-input'
          type='text'
          placeholder='Enter Product Name'
          required
        />

        <>
          <label className='form-label'>Category</label>
          <select className='form-select' required>
            <option value="">Select</option>
            <option>Dress</option>
            <option>t shirt</option>
          </select>
        </>

        <>
          <label className='form-label'>Subcategory</label>
          <select className='form-select' required>
            <option>Select</option>
            <option>Subcategory</option>
          </select>
        </>

        <>
          <label className='form-label'>Main Image URL</label>
          <input
            className='form-input'
            type='text'
            placeholder='Image URL'
            required
          />
        </>

        <label className='form-label'>Price</label>
        <input
          className='form-input'
          type="number"
          name="price"
          required
        />

        <>
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
        </>
        <button className='submit-button' type="submit">Submit Product</button>
      </form>
    </div>
  )
}

export default AddProduct
