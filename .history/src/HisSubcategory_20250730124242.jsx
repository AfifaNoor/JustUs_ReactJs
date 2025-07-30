import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const HisSubcategory = () => {
    const [hissubcategory , setHiscategory] = useState([]);
    const {name}= useParams();
    const navigate = useNavigate();
     console.log(name , setHiscategory,"name")

useEffect (() => {
    const fetchHisSubcategory  = async ()=>{
        try{
            const response = await axios.get('https://mediatracker-dp6t.onrender.com/api/categories/his');
            console.log(response)
        }
    }
})

  return (
    <div>
      
    </div>
  )
}

export default HisSubcategory
