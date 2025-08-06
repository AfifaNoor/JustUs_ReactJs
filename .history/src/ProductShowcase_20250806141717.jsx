import React, { useEffect, useState } from 'react';

const ProductShowcase = () => {
    const[products,setProducts]=useState([]);
    const[mainSection,setMainsection] =useState([]);
    const[category,setCategory] = useState([]);
    const[subcategory,setSubCategory]=useState([]);


    useEffect(()=>{
        const fetchFilteredProduct = async () =>{
            try{
                const response = await axios.get('https://mediatracker-dp6t.onrender.com/api/products?mainSection=her&category=Cool%20Dress&subcategory=Babydoll')
                setProducts()
            }
        }
    })

  return (
    <div>
      
    </div>
  )
}

export default ProductShowcase
