import React, { useEffect, useState } from 'react';

const ProductShowcase = () => {
    const[products,setProducts]=useState([]);
    const[mainSection,setMainsection] =useState([]);
    const[category,setCategory] = useState([]);
    const[subcategory,setSubCategory]=useState([]);


    useEffect(()=>{
        const fetchFilteredProduct = async () =>{
            try{
                const response = await axios.get
                (`https://mediatracker-dp6t.onrender.com/api/products?mainSection=${mainSection}&category=${category}&subcategory=${subcategory}`)
                setProducts(response.data)
                console.log(response.data,'setProducts')
            }catch(error){
                console.log(error,'Error')
            }
        }
        fetchFilteredProduct();
    },[])

  return (
    <div>
        {products.map((item)=>(
            <div key={item._id}
        ))}
      
    </div>
  )
}

export default ProductShowcase
