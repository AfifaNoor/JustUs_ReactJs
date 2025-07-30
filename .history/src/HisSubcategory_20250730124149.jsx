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
            const response = await axios.
        }
    }
})

  return (
    <div>
      
    </div>
  )
}

export default HisSubcategory
