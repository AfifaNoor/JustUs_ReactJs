import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const HisSubcategory = () => {
    const [hissubcategory , setHiscategory] = useState([]);
    const {name}= useParams();
    const navigate = useNavigate();
     console.log(name , setHiscategory,"name")

useEffect (())

  return (
    <div>
      
    </div>
  )
}

export default HisSubcategory
