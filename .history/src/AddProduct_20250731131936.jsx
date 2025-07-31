import React from 'react'

const AddProduct = () => {
  return (
    <div className='add-product-page' >
    <h2> Add Product Page </h2>
    <form className='form-container'>
        <label className='form-label'>Select Gender</label>
        <select>
          <option value="his">His</option>
          <option value="her">Her</option>
        </select>

        <label className='form-label'>Product Name </label>
        <input
        className='form-input'
        type='text'
        placeholder='Enter Product Name'
        required
         />

        <label>Subcategory</label>
        <select>
            <option></option>
        </select>

        <label>Main Image URL</label>
        <input 
        className='form-input'
        type='text'
        placeholder='image Url'
        required
        />



    </form>
      
    </div>
  )
}

export default AddProduct
