import React from 'react';

const AllProduct = () => {


  return (
    <div className='table-container'>
    <td className='table-header'>All Products</td>
    <table className='product-table'>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
    </table>
    </div>
  )
}

export default AllProduct;
