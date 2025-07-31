import React from 'react'

const AddProduct = () => {
  return (
    <div className='add-product-page' >
    <h2> Add Product Page </h2>
    {/* <div className='gender-select'>
        <label for='gender'>Select Gender</label>
        <select id='gender' required>
          <option value="his">His</option>
          <option value="her">Her</option>  
        </select>
    </div> */}
      <div className="dropdown-container">
      <button className="dropdown-btn" > 
        Add Product
        </button>
        <ul className="dropdown-menu">
          <li>His Product</li>
          <li>Her product</li>
        </ul>
        </div>
    </div>
  )
}

export default AddProduct
