import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RouterProvider} from 'react-router-dom'
import Router from'./Router'
const App = () => {
  return (
   <>
    <ToastContainer />
    <RouterProvider router={Router}/>
   </>
  )
}

export default App;