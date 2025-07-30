import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const HisSubcategory = () => {
    const [hissubcategory , setHiscategory] = useState([]);
    const {name}= useParams();
    const navigate = useNavigate();
    
  return (
    <div>
      
    </div>
  )
}

export default HisSubcategory
