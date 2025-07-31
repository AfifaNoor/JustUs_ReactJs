import React from 'react'

const AddProduct = () => {
  return (
    <div className='prooduct-container' >
     <div className="gender-toggle">
        <button onClick={() => setSelectedGender("his")}>His</button>
        <button onClick={() => setSelectedGender("her")}>Her</button>
      </div>
      
    </div>
  )
}

export default AddProduct
