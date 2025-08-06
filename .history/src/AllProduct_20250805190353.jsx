import React from 'react';
import { useEffect, useState } from 'react';
import './AllProduct.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllProduct = () => {
    const [allproduct, setAllProduct] = useState([]);
    console.log(allproduct,'allproduct');
    const navigate=useNavigate();
 
    useEffect(() => {
        const fetchProducts = async () => {
          try{
             const response = await axios.get('https://mediatracker-dp6t.onrender.com/api/products');
            setAllProduct(response.data);
            console.log(response.data, 'Fetched Products');
          }catch(error )  {
            console.log(error,'Invalid')
          }
           
        };

        fetchProducts();
    }, []); 

  return (
    <div className='table-container'>
    <div className='back-btn' onClick={() => navigate(-1)}>
    ←
    </div>
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
            return (
                <tr key={index}>
                    <td>{product.mainSection}</td>
                    <td>{product.category}</td>
                    <td>{product.subcategory}</td>
                    <td>{product.name}</td>
                    <td >
                    <img 
                    src={product.imageUrls}
                    alt={product.name}  
                    style={{width: '70px' , objectFit: 'cover'  }}
                    /></td>
                    <td>{product.price}</td>
                    <td>{product.priority}</td>
                    
                </tr>
            );
        })}
       
      </tbody>
    </table>
    </div>
  )
}

export default AllProduct;
