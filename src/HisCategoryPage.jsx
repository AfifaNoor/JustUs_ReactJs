import React from 'react'
import { useNavigate } from 'react-router-dom'

const HisCategoryPage = () => {
  const navigate=useNavigate();
  return (
    <div className='category-container'>
    <div className='category-list'>
    <div className='back-btn' onClick={() => navigate('/home')}>
        ←
    </div>
    <button className='category-btn'>Shirt</button>
    <button className='category-btn'>T-Shirt</button>
    <button className='category-btn'>Jeans</button>
    <button className='category-btn'>Trouser</button>
    <button className='category-btn'>Half Pant</button>
    <button className='category-btn'>Footwear</button>
    <button className='category-btn'>SunGlasses</button>
    <button className='category-btn'>Gym Accessories </button>
    <button className='category-btn'>Watches</button>
    <button className='category-btn'>Kurta</button>
    <button className='category-btn'>Perfumes</button>
    <button className='category-btn'>Suits</button>
    <button className='category-btn'>Skincare & Beauty </button>
    <button className='category-btn'>Tech Accessories</button>
    </div>
    </div>
  )
}

export default HisCategoryPage
