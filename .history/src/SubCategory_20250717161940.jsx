import React from 'react'
import { useNavigate } from 'react-router-dom'

const SubCategory = () => {
  const navigate=useNavigate();
  return (
    <div className='container'>
    <div className='back-btn' onClick={() => navigate('./her-category')}>
        ←
    </div>
    <div className='subcategory-list'>
    <button className='subcategory-btn'>Babydoll</button>
    <button className='subcategory-btn'>Revealing Dresses</button>
    <button className='subcategory-btn'>Saree & Blouse </button>
    <button className='subcategory-btn'>Sex Toys</button>
    </div>
    </div>
  )
}

export default SubCategory
