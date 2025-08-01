import React from 'react';

const AllProduct = () => {


  return (
    <div className='table-container'>
    <h2 className='table-header'>All Products</h2>
    <table className='product-table'>
      <thead>
        <tr>
          <th>Gender</th>
          <th>Category</th>
          <th>SubCategory</th>
          <th>Product Name</th>
           <th>Image</th>
            <th>Price</th>
            <th>Priority</th> 
        </tr>
      </thead>
    </table>
    </div>
  )
}

export default AllProduct;
