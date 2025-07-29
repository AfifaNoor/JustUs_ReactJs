import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SubCategory = () => {
  const [subcategory, setSubcategory] = useState([]);
  const navigate=useNavigate();
  return (
    <div className='container'>
    <div className='back-btn' onClick={() => navigate('./her-category')}>
        ←
    </div>
    <ul className='subcategory-list'>
      { subcategory.map((value)=>(
        <li key={value.id}>{value.name.subcategory}</li>
      ))

      }
    </ul>
    </div>
  )
}

export default SubCategory
