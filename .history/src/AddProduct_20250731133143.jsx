import React from 'react'

const AddProduct = () => {
  return (
    <div className='add-product-page' >
    <h2> Add Product Page </h2>
    <form className='form-container'>
    <>
        <label className='form-label'>Select Gender</label>
        <select>
          <option value="">Gender</option>
          <option value="his">His</option>
          <option value="her">Her</option>
        </select>
    </>
        

        <label className='form-label'>Product Name </label>
        <input
        className='form-input'
        type='text'
        placeholder='Enter Product Name'
        required
         />

        <>

        <label>Category</label>
        <select>
            <option value="">Select</option>
            <option> Dress</option>
            <option> t shirt</option>
        </select>
        </>
        
        <>
        <label>Subcategory</label>
        <select>
            <option>Select</option>
            <option>Subcategory</option>
        </select>
        </>
       

        <>

        <label>Main Image URL</label>
        <input 
        className='form-input'
        type='text'
        placeholder='image Url'
        required
        />

        </>
       

        <label>Price</label>
        <input
          type="number"
          name="price"
          required
        />

        <>
        <label className='form-label'>Priority</label>
        <select
          name="priority"
          required
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        </>

         <button type="submit">Submit Product</button>
    </form>
      
    </div>
  )
}

export default AddProduct
