import React from 'react'

const AddProduct = () => {
  return (
    <div className='add-product-page' >
    <h2> Add Product Page </h2>
    <form>
        <label className='form-label'>Select Gender</label>
        <select>
          <option value="his">His</option>
          <option value="her">Her</option>
        </select>
    </form>
      
    </div>
  )
}

export default AddProduct
