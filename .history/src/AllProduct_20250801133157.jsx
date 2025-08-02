import React, { use } from 'react';
import { useEffect, useState } from 'react';
import './AllProduct.css';
import axios from 'axios';

const AllProduct = () => {
    const [allproduct, setAllProduct] = useState([]);
 
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://mediatracker-dp6t.onrender.com/api/products');
            setAllProduct(response.data);
            console.log(response.data, 'Fetched Products');
        };

        fetchProducts();
    }, []);

  return (
    <div className='table-container'>
    <h2 className='table-header'>All Products</h2>
    <table className='product-table'>
    <thead>
         <tr>
          <th>Gender </th>   
          <th>Category</th>
          <th>SubCategory</th>
          <th>Product Name</th>
           <th>Image</th>
            <th>Price</th>
            <th>Priority</th> 
        </tr>
      </thead>
      <tbody>
        {allproduct.map((product,index)=>{
            <tr key={index}>
                <td>{product.mainsection}</td>
                <td>{product.category}</td>
                <td>{product.subcategory}</td>
                <td>{product.mainsection}</td>
                <td>{product.mainsection}</td>
                <td>{product.mainsection}</td>
                <td>{product.mainsection}</td>
                
            </tr>
        })}
      </tbody>
    </table>
    </div>
  )
}

export default AllProduct;
