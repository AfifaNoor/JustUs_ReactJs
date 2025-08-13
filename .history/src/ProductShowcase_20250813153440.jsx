    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { useLocation } from 'react-router-dom';

    const ProductShowcase = () => {
        const[products,setProducts]=useState([]);

        const location=useLocation(); 
        const {mainSection,category,subcategory} = location.state
        console.log(location.state.category,'location')
         console.log("Selected subcategory:", subcategory);
        

        


        useEffect(()=>{
            const fetchFilteredProduct = async () =>{
                try{
                    const response = await axios.get
                   (`https://mediatracker-dp6t.onrender.com/api/products?mainSection=${encodeURIComponent(mainSection)}&category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`);
                        setProducts(response.data)
                    console.log(response.data,'setProducts')
                }catch(error){
                    console.log(error,'Error')
                }
            }
            fetchFilteredProduct();
        },[mainSection,category,subcategory])

    return (
        <div className='product-showcase'>
         <div className='back-btn' onClick={() => navigate('-1')}>
          ←
        </div>
        {products.map((product,index)=>(
            <div 
            key={index}>
            <img src={product.imageUrls} alt=''/>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.subcategories}</p>

            </div>
        ))}
        
        </div>
    )
    }

    export default ProductShowcase
